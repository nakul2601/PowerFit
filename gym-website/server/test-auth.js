// Test script for authentication endpoints
// Run this with: node test-auth.js

const axios = require('axios');

const API_URL = 'http://localhost:5000/api/auth';

// Test data
const testUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'Password123'
};

async function testAuth() {
  try {
    console.log('🧪 Testing Authentication APIs...\n');

    // Test 1: Signup
    console.log('1️⃣ Testing Signup...');
    try {
      const signupResponse = await axios.post(`${API_URL}/signup`, testUser);
      console.log('✅ Signup Success:', signupResponse.data);
      console.log('📝 Token:', signupResponse.data.data.token.substring(0, 50) + '...\n');
      
      const token = signupResponse.data.data.token;

      // Test 2: Login
      console.log('2️⃣ Testing Login...');
      const loginResponse = await axios.post(`${API_URL}/login`, {
        email: testUser.email,
        password: testUser.password
      });
      console.log('✅ Login Success:', loginResponse.data);
      console.log('📝 Token:', loginResponse.data.data.token.substring(0, 50) + '...\n');

      // Test 3: Protected Route
      console.log('3️⃣ Testing Protected Route...');
      const meResponse = await axios.get(`${API_URL}/me`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('✅ Protected Route Success:', meResponse.data);

    } catch (error) {
      if (error.response) {
        console.log('❌ Error:', error.response.status, error.response.data);
      } else {
        console.log('❌ Error:', error.message);
      }
    }

    // Test 4: Invalid Login
    console.log('\n4️⃣ Testing Invalid Login...');
    try {
      await axios.post(`${API_URL}/login`, {
        email: testUser.email,
        password: 'wrongpassword'
      });
    } catch (error) {
      console.log('✅ Invalid Login Correctly Rejected:', error.response.data);
    }

    // Test 5: Validation Errors
    console.log('\n5️⃣ Testing Validation Errors...');
    try {
      await axios.post(`${API_URL}/signup`, {
        name: '',
        email: 'invalid-email',
        password: '123'
      });
    } catch (error) {
      console.log('✅ Validation Errors Correctly Caught:', error.response.data);
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Run tests
testAuth();
