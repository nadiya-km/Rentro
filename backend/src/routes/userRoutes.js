const express = require('express');
const router = express.Router();
const { login, register, logout, getProfile } = require('../controllers/authController');
const { isAuthenticated } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

//check
router.get('/check-auth', isAuthenticated, (req, res) => {
	res.json({ user: req.user });
});

router.get('/profile', isAuthenticated, (req, res) => {
	res.json({
		message: 'User profile',
		user: req.user, // from JWT / cookie
	});
});
module.exports = router;
