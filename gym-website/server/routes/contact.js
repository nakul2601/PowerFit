const express = require('express');
const router = express.Router();
const { submitMembership } = require('../controllers/membershipController');

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', (req, res) => {
  res.json({ message: 'Contact form submission - to be implemented' });
});

// @route   POST /api/membership
// @desc    Submit membership application
// @access  Public
router.post('/membership', submitMembership);

module.exports = router;
