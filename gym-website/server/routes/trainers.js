const express = require('express');
const router = express.Router();

// @route   GET /api/trainers
// @desc    Get all trainers
// @access  Public
router.get('/', (req, res) => {
  res.json({ message: 'Get all trainers - to be implemented' });
});

// @route   GET /api/trainers/:id
// @desc    Get trainer by ID
// @access  Public
router.get('/:id', (req, res) => {
  res.json({ message: 'Get trainer by ID - to be implemented' });
});

module.exports = router;
