// const { getSign } = require('../controllers/authController');
// const router = require('express').Router();

// router.get('/', getSign);
// module.exports = router;

const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);

module.exports = router;
