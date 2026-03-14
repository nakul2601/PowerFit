import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { membershipAPI, handleAPIError } from '../services/api';

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: 'basic',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState({
    success: null,
    message: ''
  });

  const packages = [
    { value: 'basic', label: 'Basic - ₹999/month' },
    { value: 'pro', label: 'Standard - ₹2499/3 months' },
    { value: 'elite', label: 'Premium - ₹7999/year' }
  ];

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
    setSubmissionStatus({ success: null, message: '' });

    try {
      const response = await membershipAPI.submitApplication(formData);

      setSubmissionStatus({
        success: true,
        message: 'Membership application submitted successfully! We will contact you within 24 hours.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        package: 'basic',
        message: ''
      });

    } catch (error) {
      const errorMessage = handleAPIError(error);
      setSubmissionStatus({
        success: false,
        message: errorMessage
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="join">
      {/* Hero Section */}
      <section className="join-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Join PowerFit Gym</h1>
            <p>Take the first step towards your fitness transformation</p>
            <div className="hero-benefits">
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>No joining fee</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>Flexible membership plans</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="join-form-section">
        <div className="container">
          <div className="form-content">
            <div className="form-info">
              <h2>Start Your Fitness Journey Today</h2>
              <p>Fill out the form below and our team will get in touch with you within 24 hours to complete your membership registration.</p>
              
              <div className="info-features">
                <div className="info-feature">
                  <div className="feature-icon">🏋️</div>
                  <div className="feature-text">
                    <h3>State-of-the-art Equipment</h3>
                    <p>Modern fitness equipment from leading brands</p>
                  </div>
                </div>
                <div className="info-feature">
                  <div className="feature-icon">👨‍🏫</div>
                  <div className="feature-text">
                    <h3>Expert Trainers</h3>
                    <p>Certified professionals to guide your journey</p>
                  </div>
                </div>
                <div className="info-feature">
                  <div className="feature-icon">📅</div>
                  <div className="feature-text">
                    <h3>Flexible Scheduling</h3>
                    <p>24/7 gym access to fit your lifestyle</p>
                  </div>
                </div>
              </div>

              <div className="contact-info">
                <h3>Have Questions?</h3>
                <p>Call us at: <a href="tel:+911234567890">+91 1234567890</a></p>
                <p>Email us at: <a href="mailto:info@powerfitgym.com">info@powerfitgym.com</a></p>
              </div>
            </div>

            <div className="form-wrapper">
              <div className="form-card">
                <h3>Membership Application</h3>
                
                {submissionStatus.success && (
                  <div className="success-message">
                    <div className="success-icon">✓</div>
                    <p>{submissionStatus.message}</p>
                  </div>
                )}

                {submissionStatus.success === false && (
                  <div className="error-message">
                    <div className="error-icon">⚠</div>
                    <p>{submissionStatus.message}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="join-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
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
                      <label htmlFor="email">Email Address *</label>
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
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                        disabled={isLoading}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="package">Membership Package *</label>
                      <select
                        id="package"
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                      >
                        {packages.map(pkg => (
                          <option key={pkg.value} value={pkg.value}>
                            {pkg.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your fitness goals and any specific requirements..."
                      rows="5"
                      required
                      disabled={isLoading}
                    ></textarea>
                  </div>

                  <div className="form-actions">
                    <button 
                      type="submit" 
                      className="btn btn-primary btn-full"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </div>

                  <div className="form-note">
                    <p>By submitting this form, you agree to be contacted by PowerFit Gym regarding your membership application.</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>Why Choose PowerFit Gym?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>Free Trial</h3>
              <p>7-day free trial to experience our facilities and training programs</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>No Hidden Fees</h3>
              <p>Transparent pricing with no surprise charges or hidden costs</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>Community Support</h3>
              <p>Join a supportive community of fitness enthusiasts and professionals</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">4</div>
              <h3>Results Guaranteed</h3>
              <p>Proven track record of helping members achieve their fitness goals</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
