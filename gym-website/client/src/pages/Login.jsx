import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:5003/api/auth/login', {
        email: formData.email,
        password: formData.password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Store token in localStorage
      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.data.user));

      setSuccess('Login successful! Redirecting...');
      
      // Redirect to home page after successful login
      setTimeout(() => {
        navigate('/');
      }, 1500);

    } catch (error) {
      console.error('Login error:', error);
      
      let errorMessage = 'Login failed. Please try again.';
      
      if (error.response) {
        // Server responded with error status
        if (error.response.data?.errors) {
          errorMessage = error.response.data.errors.join(', ');
        } else if (error.response.data?.message) {
          errorMessage = error.response.data.message;
        } else {
          errorMessage = `Error ${error.response.status}: ${error.response.statusText}`;
        }
      } else if (error.request) {
        // Request was made but no response received
        errorMessage = 'Network error. Please check your internet connection.';
      } else {
        // Something else happened
        errorMessage = error.message || errorMessage;
      }

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login">
      {/* Hero Section */}
      <section className="login-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome Back</h1>
            <p>Sign in to your PowerFit Gym account and continue your fitness journey</p>
            <div className="hero-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Track your progress</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Book classes</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Personalized plans</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Login Form Section */}
      <section className="login-form-section">
        <div className="container">
          <div className="form-content">
            <div className="form-info">
              <h2>Sign In to Your Account</h2>
              <p>Access your personalized fitness dashboard and unlock exclusive features</p>
              
              <div className="info-benefits">
                <div className="benefit-item">
                  <div className="benefit-icon">📊</div>
                  <div className="benefit-text">
                    <h3>Progress Tracking</h3>
                    <p>Monitor your fitness journey with detailed analytics</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🎯</div>
                  <div className="benefit-text">
                    <h3>Personalized Plans</h3>
                    <p>Get customized workout and nutrition plans</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🏆</div>
                  <div className="benefit-text">
                    <h3>Achievement Badges</h3>
                    <p>Earn rewards for reaching your fitness goals</p>
                  </div>
                </div>
              </div>

              <div className="signup-prompt">
                <p>Don't have an account?</p>
                <Link to="/signup" className="btn btn-outline">Sign Up</Link>
              </div>
            </div>

            <div className="form-wrapper">
              <div className="form-card">
                <h3>Login</h3>
                
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

                <form onSubmit={handleSubmit} className="login-form">
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

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div className="form-options">
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      Remember me
                    </label>
                    <Link to="/forgot-password" className="forgot-link">
                      Forgot password?
                    </Link>
                  </div>

                  <div className="form-actions">
                    <button 
                      type="submit" 
                      className="btn btn-primary btn-full"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Signing In...' : 'Sign In'}
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

export default Login;
