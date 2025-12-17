const Car = require("../models/car");
const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const User = require("../models/User");
const Booking = require("../models/Booking");


exports.adminLogin = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password)
			return res.status(400).json({ message: 'Email and password required' });

		const admin = await Admin.findOne({ email });
		if (!admin) return res.status(404).json({ message: 'Admin not found' });

		const isValid = await admin.comparePassword(password);
		if (!isValid) return res.status(400).json({ message: 'Incorrect password' });

		// Create JWT
		const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, {
			expiresIn: '1d',
		});

		// send httpOnly cookie
		res
			.cookie('adminToken', token, { httpOnly: true, sameSite: 'lax' })
			.status(200) 
			.json({ message: 'Login successful' });
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Server error' });
	}
};

// Admin Logout
exports.adminLogout = (req, res) => {
	res.clearCookie('adminToken').json({ message: 'Admin logged out' });
};

/*GET ALL USERS */
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });

    // attach booking count per user
    const usersWithBookings = await Promise.all(
      users.map(async (user) => {
        const bookingsCount = await Booking.countDocuments({
          user: user._id,
        });

        return {
          ...user.toObject(),
          bookingsCount,
        };
      })
    );

    res.status(200).json({
      success: true,
      users: usersWithBookings,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   RECENT USERS (Dashboard)
========================= */
exports.getRecentUsers = async (req, res) => {
  try {
    const users = await User.find({ role: "user" })
      .select("-password")
      .sort({ createdAt: -1 })
      .limit(5);

    const totalUsers = await User.countDocuments({ role: "user" });

    res.json({
      success: true,
      users,
      totalUsers, // ✅ ADD THIS
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


/*USER STATS */
exports.getUserStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: "user" });

    res.json({
      success: true,
      stats: {
        totalUsers,
      },
    });
  } catch (error) {
    console.error("USER STATS ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/*  */
// exports.toggleUserStatus = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     user.status = user.status === "Blocked" ? "Active" : "Blocked";
//     await user.save();

//     res.json({
//       success: true,
//       message: "User status updated",
//     });
//   } catch (error) {
//     console.error("TOGGLE USER ERROR:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

/*  delete user*/
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.deleteOne();

    res.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("DELETE USER ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/* get revenue */

exports.getRevenueStats = async (req, res) => {
  try {
    // start of today
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    // start of week (last 7 days)
    const weekStart = new Date();
    weekStart.setDate(weekStart.getDate() - 7);

    // start of month
    const monthStart = new Date();
    monthStart.setDate(1);
    monthStart.setHours(0, 0, 0, 0);

    // common match
    const matchStage = {
      status: { $in: ["confirmed", "completed"] },
    };

    // total revenue
    const totalRevenue = await Booking.aggregate([
      { $match: matchStage },
      { $group: { _id: null, amount: { $sum: "$totalAmount" } } },
    ]);

    // TODAY REVENUE
    const todayRevenue = await Booking.aggregate([
      {
        $match: {
          ...matchStage,
          createdAt: { $gte: todayStart },
        },
      },
      { $group: { _id: null, amount: { $sum: "$totalAmount" } } },
    ]);

    // WEEKLY REVENUE
    const weeklyRevenue = await Booking.aggregate([
      {
        $match: {
          ...matchStage,
          createdAt: { $gte: weekStart },
        },
      },
      { $group: { _id: null, amount: { $sum: "$totalAmount" } } },
    ]);

    // MONTHLY REVENUE
    const monthlyRevenue = await Booking.aggregate([
      {
        $match: {
          ...matchStage,
          createdAt: { $gte: monthStart },
        },
      },
      { $group: { _id: null, amount: { $sum: "$totalAmount" } } },
    ]);

    res.json({
      success: true,
      revenue: {
        total: totalRevenue[0]?.amount || 0,
        today: todayRevenue[0]?.amount || 0,
        weekly: weeklyRevenue[0]?.amount || 0,
        monthly: monthlyRevenue[0]?.amount || 0,
      },
    });
  } catch (error) {
    console.error("REVENUE ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};
