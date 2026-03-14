const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gym-website');

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`Database: ${conn.connection.name}`);
    console.log('MongoDB connection established successfully');
    
    return conn;
  } catch (error) {
    console.error('Database connection error:', error.message);
    console.error('Make sure MongoDB is running on localhost:27017');
    process.exit(1);
  }
};

module.exports = connectDB;
