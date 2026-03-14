const express = require('express');
const router = express.Router();
const { signup, login, getMe } = require('../controllers/authController');
const protect = require('../middleware/auth');
const { validateSignup, validateLogin } = require('../middleware/validation');

// @route   POST /api/auth/signup
// @desc    Register a new user
// @access  Public
router.post('/signup', validateSignup, signup);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', validateLogin, login);

// @route   GET /api/auth/me
// @desc    Get current user profile
// @access  Private
router.get('/me', protect, getMe);

// @route   POST /api/auth/logout
// @desc    Logout user (client-side token removal)
// @access  Private
router.post('/logout', protect, (req, res) => {
  res.json({
    success: true,
    message: 'Logout successful. Please remove token from client storage.'
  });
});

module.exports = router;
