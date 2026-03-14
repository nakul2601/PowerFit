const express = require('express');
const router = express.Router();

// @route   GET /api/workouts
// @desc    Get all workouts
// @access  Public
router.get('/', (req, res) => {
  res.json({ message: 'Get all workouts - to be implemented' });
});

// @route   GET /api/workouts/:level
// @desc    Get workouts by difficulty level
// @access  Public
router.get('/:level', (req, res) => {
  res.json({ message: 'Get workouts by level - to be implemented' });
});

module.exports = router;
