const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const mongoose = require('mongoose');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Minimal request + DB state logging (debug persistence issues)
app.use((req, res, next) => {
  const dbState = mongoose.connection?.readyState; // 0=disconnected, 1=connected, 2=connecting, 3=disconnecting
  const dbName = mongoose.connection?.name;
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} (dbState=${dbState}, db=${dbName})`);
  next();
});

// Test API endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'Gym API is running' });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV
  });
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/membership', require('./routes/membership'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Connect to database and start server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Connect to MongoDB first
    await connectDB();
    
    // Start server after successful DB connection
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV}`);
      console.log(`Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
      console.log('Available routes:');
      console.log('- GET /api/test');
      console.log('- GET /api/health');
      console.log('- POST /api/auth/signup');
      console.log('- POST /api/auth/login');
      console.log('- GET /api/auth/me');
      console.log('- POST /api/auth/logout');
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();
