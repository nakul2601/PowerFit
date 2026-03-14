import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      console.log('Making signup request to:', 'http://localhost:5003/api/auth/signup');
      console.log('Request data:', {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });

      const response = await axios.post('http://localhost:5003/api/auth/signup', {
        name: formData.name,
        email: formData.email,
        password: formData.password
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 10000
      });

      console.log('Signup response:', response.data);

      // Show success message
      setSuccess('Account created successfully! Redirecting to login page...');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
      });
      
      // Redirect to login page after successful signup
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (error) {
      console.error('Signup error:', error);
      
      let errorMessage = 'Signup failed. Please try again.';
      
      if (error.response) {
        // Server responded with error status
        console.log('Error response:', error.response);
        if (error.response.data?.errors) {
          errorMessage = error.response.data.errors.join(', ');
        } else if (error.response.data?.message) {
          errorMessage = error.response.data.message;
        } else {
          errorMessage = `Error ${error.response.status}: ${error.response.statusText}`;
        }
      } else if (error.request) {
        // Request was made but no response received
        console.log('Error request:', error.request);
        errorMessage = 'Network error. Please check your internet connection.';
      } else {
        // Something else happened
        console.log('Error message:', error.message);
        errorMessage = error.message || errorMessage;
      }

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup">
      {/* Hero Section */}
      <section className="signup-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Join PowerFit Gym</h1>
            <p>Create your account and start your fitness transformation today</p>
            <div className="hero-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Free 7-day trial</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>No joining fee</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Form Section */}
      <section className="signup-form-section">
        <div className="container">
          <div className="form-content">
            <div className="form-info">
              <h2>Start Your Fitness Journey</h2>
              <p>Join thousands of members who have transformed their lives with PowerFit Gym</p>
              
              <div className="info-benefits">
                <div className="benefit-item">
                  <div className="benefit-icon">🏋️</div>
                  <div className="benefit-text">
                    <h3>Modern Equipment</h3>
                    <p>Access to state-of-the-art fitness equipment</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">👨‍🏫</div>
                  <div className="benefit-text">
                    <h3>Expert Trainers</h3>
                    <p>Professional guidance from certified trainers</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">📱</div>
                  <div className="benefit-text">
                    <h3>Mobile App</h3>
                    <p>Track progress and book classes on the go</p>
                  </div>
                </div>
              </div>

              <div className="login-prompt">
                <p>Already have an account?</p>
                <Link to="/login" className="btn btn-outline">Sign In</Link>
              </div>
            </div>

            <div className="form-wrapper">
              <div className="form-card">
                <h3>Create Account</h3>
                
                {success && (
                  <div className="success-message">
                    <div className="success-icon">✓</div>
                    <p>{success}</p>
                  </div>
                )}

                {error && (
                  <div className="error-message">
                    <div className="error-icon">⚠</div>
                    <p>{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="signup-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                        required
                        disabled={isLoading}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="form-requirements">
                    <p>Password must contain:</p>
                    <ul>
                      <li>At least 8 characters</li>
                      <li>One uppercase letter</li>
                      <li>One lowercase letter</li>
                      <li>One number</li>
                    </ul>
                  </div>

                  <div className="form-options">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                      />
                      <span className="checkmark"></span>
                      I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
                    </label>
                  </div>

                  <div className="form-actions">
                    <button 
                      type="submit" 
                      className="btn btn-primary btn-full"
                      disabled={isLoading || !formData.agreeToTerms}
                    >
                      {isLoading ? 'Creating Account...' : 'Create Account'}
                    </button>
                  </div>

                  <div className="divider">
                    <span>OR</span>
                  </div>

                  <div className="social-login">
                    <button type="button" className="btn btn-social btn-google">
                      <span className="social-icon">🔍</span>
                      Continue with Google
                    </button>
                    <button type="button" className="btn btn-social btn-facebook">
                      <span className="social-icon">📘</span>
                      Continue with Facebook
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
