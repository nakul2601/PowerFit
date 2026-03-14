const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^[\d\s\-\+\(\)]+$/, 'Please enter a valid phone number']
  },
  package: {
    type: String,
    required: [true, 'Package selection is required'],
    enum: {
      values: ['basic', 'pro', 'elite'],
      message: 'Package must be either basic, pro, or elite'
    }
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [1000, 'Message cannot exceed 1000 characters']
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Add index for faster queries
membershipSchema.index({ email: 1 });
membershipSchema.index({ status: 1 });
membershipSchema.index({ createdAt: -1 });

// Store membership applications in the "members" collection (as shown in Compass)
module.exports = mongoose.model('Membership', membershipSchema, 'members');
