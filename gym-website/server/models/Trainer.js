const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Trainer name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  specialization: {
    type: String,
    required: [true, 'Specialization is required'],
    trim: true,
    maxlength: [100, 'Specialization cannot exceed 100 characters']
  },
  experience: {
    type: String,
    required: [true, 'Experience is required'],
    trim: true,
    maxlength: [50, 'Experience cannot exceed 50 characters']
  },
  image: {
    type: String,
    required: [true, 'Image is required'],
    trim: true
  },
  certification: {
    type: String,
    required: [true, 'Certification is required'],
    trim: true,
    maxlength: [50, 'Certification cannot exceed 50 characters']
  },
  bio: {
    type: String,
    required: [true, 'Bio is required'],
    trim: true,
    maxlength: [500, 'Bio cannot exceed 500 characters']
  },
  rating: {
    type: Number,
    min: [0, 'Rating cannot be less than 0'],
    max: [5, 'Rating cannot be more than 5'],
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Add indexes for faster queries
trainerSchema.index({ specialization: 1 });
trainerSchema.index({ isActive: 1 });
trainerSchema.index({ rating: -1 });

module.exports = mongoose.model('Trainer', trainerSchema);
