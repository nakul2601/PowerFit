import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    membership: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      membership: false
    });
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="page-header">
          <h1>Contact Us</h1>
          <p>Get in touch with us to start your fitness journey</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="info-grid">
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-details">
                  <h3>Address</h3>
                  <p>Sector 17 Plaza, Chandigarh, Punjab 160017, India</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-details">
                  <h3>Phone</h3>
                  <p>+91 1234567890</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-details">
                  <h3>Email</h3>
                  <p>info@powerfitgym.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">🕐</div>
                <div className="info-details">
                  <h3>Hours</h3>
                  <p>Mon-Fri: 5AM - 11PM<br />Sat-Sun: 6AM - 10PM</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#" className="social-icon">📘</a>
                <a href="#" className="social-icon">📷</a>
                <a href="#" className="social-icon">🐦</a>
                <a href="#" className="social-icon">📺</a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your fitness goals or any questions you have..."
                  required
                ></textarea>
              </div>

              <div className="form-group checkbox-group">
                <input
                  type="checkbox"
                  id="membership"
                  name="membership"
                  checked={formData.membership}
                  onChange={handleChange}
                />
                <label htmlFor="membership">
                  I'm interested in membership information
                </label>
              </div>

              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>

        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Do I need to book in advance?</h3>
              <p>No booking required for gym access. However, we recommend booking classes in advance as they fill up quickly.</p>
            </div>
            <div className="faq-item">
              <h3>Is there a joining fee?</h3>
              <p>We occasionally waive joining fees during special promotions. Contact us for current offers.</p>
            </div>
            <div className="faq-item">
              <h3>Can I freeze my membership?</h3>
              <p>Yes, you can freeze your membership for up to 3 months with valid reason (medical, travel, etc.).</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer student discounts?</h3>
              <p>Yes! We offer 20% discount for students with valid ID. Contact us for more details.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
