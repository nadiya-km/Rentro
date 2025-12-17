const User = require('../models/user');
const jwt = require('jsonwebtoken');

// REGISTER
exports.register = async (req, res) => {
	const { name, email, password,phone } = req.body;

	const userExists = await User.findOne({ email });
	if (userExists) {
		return res.status(400).json({ message: 'User already exists' });
	}

	const user = await User.create({ name, email, password ,phone});

	res.status(201).json({ message: 'User registered successfully' });
};

// LOGIN
exports.login = async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });
	if (!user) {
		return res.status(401).json({ message: 'Invalid credentials' });
	}

	const isMatch = await user.comparePassword(password);
	if (!isMatch) {
		return res.status(401).json({ message: 'Invalid credentials' });
	}

	const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
		expiresIn: '7d',
	});

	res.cookie('userToken', token, {
		httpOnly: true,
		sameSite: 'strict',
		secure: process.env.NODE_ENV === 'production',
	});

	res.json({ message: 'Login successful' });
};

// LOGOUT
exports.logout = (req, res) => {
	res.clearCookie('userToken');
	res.json({ message: 'Logged out successfully' });
};
