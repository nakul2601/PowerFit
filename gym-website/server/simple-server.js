const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

console.warn('⚠️  You are running server/simple-server.js (MOCK server).');
console.warn('⚠️  This server does NOT connect to MongoDB and will NOT persist data.');
console.warn('✅ Use "npm run dev" to run server/server.js for real DB writes.');

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// Mock auth endpoints
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  // Mock authentication
  if (email && password) {
    res.json({
      success: true,
      data: {
        token: 'mock-jwt-token',
        user: {
          id: '1',
          name: 'Test User',
          email: email
        }
      }
    });
  } else {
    res.status(400).json({
      success: false,
      message: 'Email and password are required'
    });
  }
});

app.post('/api/auth/signup', (req, res) => {
  const { name, email, password } = req.body;
  
  // Mock registration
  if (name && email && password) {
    res.json({
      success: true,
      data: {
        token: 'mock-jwt-token',
        user: {
          id: '1',
          name: name,
          email: email
        }
      }
    });
  } else {
    res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }
});

// Mock membership endpoint
app.post('/api/membership', (req, res) => {
  const { name, email, phone, package: pkg, message } = req.body;
  
  // Mock membership submission
  if (name && email && phone && pkg && message) {
    res.json({
      success: true,
      data: {
        id: '1',
        name: name,
        email: email,
        phone: phone,
        package: pkg,
        message: message,
        status: 'pending',
        createdAt: new Date().toISOString()
      }
    });
  } else {
    res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }
});

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

// Start server
// Avoid conflicting with the real server on 5000
const PORT = process.env.MOCK_PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
  console.log(`Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
  console.log('Test endpoints:');
  console.log('- GET /api/test');
  console.log('- GET /api/health');
  console.log('- POST /api/auth/login');
  console.log('- POST /api/auth/signup');
  console.log('- POST /api/membership');
});
