const express = require('express');
const router = express.Router();
const { 
  submitMembership, 
  getAllMemberships, 
  updateMembershipStatus, 
  getMembershipById 
} = require('../controllers/membershipController');
const protect = require('../middleware/auth');

// @route   POST /api/membership
// @desc    Submit membership application
// @access  Public
router.post('/', submitMembership);

// @route   GET /api/membership
// @desc    Get all membership applications (admin only)
// @access  Private/Admin
router.get('/', protect, getAllMemberships);

// @route   GET /api/membership/:id
// @desc    Get membership by ID (admin only)
// @access  Private/Admin
router.get('/:id', protect, getMembershipById);

// @route   PUT /api/membership/:id
// @desc    Update membership status (admin only)
// @access  Private/Admin
router.put('/:id', protect, updateMembershipStatus);

module.exports = router;
