const Membership = require('../models/Membership');

// @desc    Submit membership application
// @route   POST /api/membership
// @access  Public
const submitMembership = async (req, res) => {
  try {
    console.log('Membership submit req.body:', req.body);
    const { name, email, phone, package: packageName, message } = req.body;

    // Validation
    if (!name || !email || !phone || !packageName || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, email, phone, package, and message'
      });
    }

    // Email validation
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Phone validation (basic validation)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(phone) || phone.length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid phone number'
      });
    }

    // Package validation
    const validPackages = ['basic', 'pro', 'elite'];
    if (!validPackages.includes(packageName.toLowerCase())) {
      return res.status(400).json({
        success: false,
        message: 'Invalid package selected. Please choose from: basic, pro, or elite'
      });
    }

    // Name validation
    if (name.trim().length < 2 || name.trim().length > 100) {
      return res.status(400).json({
        success: false,
        message: 'Name must be between 2 and 100 characters'
      });
    }

    // Message validation
    if (message.trim().length < 10 || message.trim().length > 1000) {
      return res.status(400).json({
        success: false,
        message: 'Message must be between 10 and 1000 characters'
      });
    }

    // Check if there's already a pending application from this email
    const existingApplication = await Membership.findOne({ 
      email: email.toLowerCase(),
      status: 'pending'
    });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: 'You already have a pending membership application. Please wait for approval.'
      });
    }

    // Create new membership application
    const membership = new Membership({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      package: packageName.toLowerCase(),
      message: message.trim()
    });

    // Save to database
    await membership.save();
    console.log('Membership saved:', membership._id);

    // Return success response
    res.status(201).json({
      success: true,
      message: 'Membership application submitted successfully! We will contact you soon.',
      data: {
        id: membership._id,
        name: membership.name,
        email: membership.email,
        package: membership.package,
        status: membership.status,
        createdAt: membership.createdAt
      }
    });

  } catch (error) {
    console.error('Membership submission error:', error);
    
    // Handle duplicate key error (email uniqueness)
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'An application with this email already exists'
      });
    }

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error while submitting membership application',
      error: process.env.NODE_ENV === 'development' ? error.message : {}
    });
  }
};

// @desc    Get all membership applications (admin only)
// @route   GET /api/membership
// @access  Private/Admin
const getAllMemberships = async (req, res) => {
  try {
    const { page = 1, limit = 10, status, package: packageName } = req.query;
    
    // Build filter
    const filter = {};
    if (status) filter.status = status;
    if (packageName) filter.package = packageName;

    const memberships = await Membership.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Membership.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: memberships,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get memberships error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching membership applications',
      error: process.env.NODE_ENV === 'development' ? error.message : {}
    });
  }
};

// @desc    Update membership status (admin only)
// @route   PUT /api/membership/:id
// @access  Private/Admin
const updateMembershipStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    if (!['pending', 'approved', 'rejected'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status. Must be: pending, approved, or rejected'
      });
    }

    const membership = await Membership.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!membership) {
      return res.status(404).json({
        success: false,
        message: 'Membership application not found'
      });
    }

    res.status(200).json({
      success: true,
      message: `Membership application ${status} successfully`,
      data: membership
    });
  } catch (error) {
    console.error('Update membership error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating membership application',
      error: process.env.NODE_ENV === 'development' ? error.message : {}
    });
  }
};

// @desc    Get membership by ID (admin only)
// @route   GET /api/membership/:id
// @access  Private/Admin
const getMembershipById = async (req, res) => {
  try {
    const { id } = req.params;

    const membership = await Membership.findById(id);

    if (!membership) {
      return res.status(404).json({
        success: false,
        message: 'Membership application not found'
      });
    }

    res.status(200).json({
      success: true,
      data: membership
    });
  } catch (error) {
    console.error('Get membership error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching membership application',
      error: process.env.NODE_ENV === 'development' ? error.message : {}
    });
  }
};

module.exports = {
  submitMembership,
  getAllMemberships,
  updateMembershipStatus,
  getMembershipById
};
