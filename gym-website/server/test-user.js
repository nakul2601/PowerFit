const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Simple user schema without pre-save middleware for testing
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long'],
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (error) {
    return next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema, 'members');

async function testUser() {
  try {
    await mongoose.connect('mongodb://localhost:27017/gym-website');
    console.log('Connected to MongoDB');
    
    // Test creating a user
    const testUser = await User.create({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123'
    });
    
    console.log('User created successfully:', testUser);
    
    await mongoose.connection.close();
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testUser();
