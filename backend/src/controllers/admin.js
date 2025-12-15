const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

// Admin Login
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
