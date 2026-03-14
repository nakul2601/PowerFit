// Test script for membership endpoint
// Run this with: node test-membership.js

const axios = require('axios');

const API_URL = 'http://localhost:5000/api/membership';

// Test data
const testMembership = {
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
  phone: '+1 (555) 123-4567',
  package: 'pro',
  message: 'I am interested in joining the gym for personal training and group classes. I have been working out for 2 years and want to take my fitness to the next level. Please let me know about the available time slots and trainer availability.'
};

async function testMembershipAPI() {
  try {
    console.log('🧪 Testing Membership API...\n');

    // Test 1: Submit membership application
    console.log('1️⃣ Testing Membership Submission...');
    try {
      const response = await axios.post(API_URL, testMembership);
      console.log('✅ Membership Submitted Successfully:');
      console.log('📝 Response:', response.data);
      console.log('🆔 Application ID:', response.data.data.id);
      console.log('📅 Submitted At:', response.data.data.createdAt);
      
      const membershipId = response.data.data.id;

      // Test 2: Duplicate submission (should fail)
      console.log('\n2️⃣ Testing Duplicate Submission...');
      try {
        await axios.post(API_URL, testMembership);
      } catch (error) {
        console.log('✅ Duplicate Submission Correctly Rejected:', error.response.data);
      }

      // Test 3: Invalid email validation
      console.log('\n3️⃣ Testing Email Validation...');
      try {
        await axios.post(API_URL, {
          ...testMembership,
          email: 'invalid-email'
        });
      } catch (error) {
        console.log('✅ Invalid Email Correctly Rejected:', error.response.data);
      }

      // Test 4: Invalid package validation
      console.log('\n4️⃣ Testing Package Validation...');
      try {
        await axios.post(API_URL, {
          ...testMembership,
          email: 'test2@example.com',
          package: 'invalid-package'
        });
      } catch (error) {
        console.log('✅ Invalid Package Correctly Rejected:', error.response.data);
      }

      // Test 5: Missing fields validation
      console.log('\n5️⃣ Testing Missing Fields Validation...');
      try {
        await axios.post(API_URL, {
          name: 'Test User',
          email: 'test3@example.com'
          // Missing phone, package, message
        });
      } catch (error) {
        console.log('✅ Missing Fields Correctly Rejected:', error.response.data);
      }

      // Test 6: Phone number validation
      console.log('\n6️⃣ Testing Phone Validation...');
      try {
        await axios.post(API_URL, {
          ...testMembership,
          email: 'test4@example.com',
          phone: 'abc'
        });
      } catch (error) {
        console.log('✅ Invalid Phone Correctly Rejected:', error.response.data);
      }

      // Test 7: Message length validation
      console.log('\n7️⃣ Testing Message Length Validation...');
      try {
        await axios.post(API_URL, {
          ...testMembership,
          email: 'test5@example.com',
          message: 'short'
        });
      } catch (error) {
        console.log('✅ Short Message Correctly Rejected:', error.response.data);
      }

      console.log('\n🎉 All membership API tests completed!');

    } catch (error) {
      if (error.response) {
        console.log('❌ Error:', error.response.status, error.response.data);
      } else {
        console.log('❌ Error:', error.message);
      }
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Run tests
testMembershipAPI();
