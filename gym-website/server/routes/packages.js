const express = require('express');
const router = express.Router();

// @route   GET /api/packages
// @desc    Get all membership packages
// @access  Public
router.get('/', (req, res) => {
  res.json({ message: 'Get all packages - to be implemented' });
});

// @route   GET /api/packages/:id
// @desc    Get package by ID
// @access  Public
router.get('/:id', (req, res) => {
  res.json({ message: 'Get package by ID - to be implemented' });
});

module.exports = router;
