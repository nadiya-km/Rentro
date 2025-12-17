const Car = require("../models/car");
const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const User = require("../models/User");



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
    const users = await User.find({ role: "user" })
      .select("-password")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      users,
    });
  } catch (error) {
    console.error("GET USERS ERROR:", error);
    res.status(500).json({ message: "Server error" });
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

    res.json({
      success: true,
      users,
    });
  } catch (error) {
    console.error("GET RECENT USERS ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/* =========================
   USER STATS
========================= */
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

/* =========================
   BLOCK / UNBLOCK USER
========================= */
exports.toggleUserStatus = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.status = user.status === "Blocked" ? "Active" : "Blocked";
    await user.save();

    res.json({
      success: true,
      message: "User status updated",
    });
  } catch (error) {
    console.error("TOGGLE USER ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/* =========================
   DELETE USER
========================= */
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

