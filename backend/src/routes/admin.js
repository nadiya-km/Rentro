const express = require('express');
const router = express.Router();
const { adminLogin, adminLogout } = require('../controllers/admin');
const { isAdmin } = require('../middleware/admin');

router.post('/login', adminLogin);
router.post('/logout', adminLogout);

//imp
router.get('/check-auth', isAdmin, (req, res) => {
	res.status(200).json({ ok: true });
});

// api protect
router.get('/dashboard', isAdmin, (req, res) => {
	res.json({ message: `Welcome ${req.admin.name}` });
});

module.exports = router;
