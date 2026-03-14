const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Workout title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: {
      values: ['beginner', 'intermediate', 'advanced'],
      message: 'Category must be either beginner, intermediate, or advanced'
    }
  },
  image: {
    type: String,
    required: [true, 'Image is required'],
    trim: true
  },
  duration: {
    type: String,
    required: [true, 'Duration is required'],
    trim: true,
    maxlength: [20, 'Duration cannot exceed 20 characters']
  },
  equipment: {
    type: String,
    required: [true, 'Equipment is required'],
    trim: true,
    maxlength: [200, 'Equipment cannot exceed 200 characters']
  },
  difficulty: {
    type: String,
    required: [true, 'Difficulty level is required'],
    enum: {
      values: ['easy', 'medium', 'hard'],
      message: 'Difficulty must be either easy, medium, or hard'
    }
  },
  targetMuscles: [{
    type: String,
    trim: true,
    maxlength: [50, 'Muscle name cannot exceed 50 characters']
  }],
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
workoutSchema.index({ category: 1 });
workoutSchema.index({ difficulty: 1 });
workoutSchema.index({ targetMuscles: 1 });
workoutSchema.index({ isActive: 1 });

module.exports = mongoose.model('Workout', workoutSchema);
