// exports.getSign = (req, res) => {
// 	return res.render('home');
// };
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// REGISTER
exports.register = async (req, res) => {
	try {
		const { name, email, password } = req.body;

		// check existing user
		const exist = await User.findOne({ email });
		if (exist) {
			return res.status(400).json({ message: 'Email already registered!' });
		}

		// hash password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const user = await User.create({
			name,
			email,
			password: hashedPassword,
		});

		return res.status(201).json({ message: 'User registered successfully!' });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Server error' });
	}
};

// LOGIN
exports.login = async (req, res) => {
	try {
		const { email, password } = req.body;

		// check user
		const user = await User.findOne({ email });
		if (!user) return res.status(404).json({ message: 'User not found!' });

		// compare password
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) return res.status(400).json({ message: 'Invalid password!' });

		// create JWT token
		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

		return res.status(200).json({
			message: 'Login successful!',
			token,
			user: {
				id: user._id,
				name: user.name,
				email: user.email,
			},
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Server error' });
	}
};
