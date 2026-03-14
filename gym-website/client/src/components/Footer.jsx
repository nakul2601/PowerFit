import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <Link to="/" className="brand-logo">
                <span className="logo-icon">💪</span>
                <span className="brand-name">PowerFit</span>
              </Link>
              <p className="footer-description">
                Transform your life with expert training and state-of-the-art equipment. 
                Join thousands who have achieved their fitness goals with us.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <span>f</span>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <span>📷</span>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <span>𝕏</span>
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  <span>▶</span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/packages">Membership</Link></li>
              <li><Link to="/workouts">Workout Plans</Link></li>
              <li><Link to="/trainers">Our Trainers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><Link to="/packages">Personal Training</Link></li>
              <li><Link to="/workouts">Group Classes</Link></li>
              <li><Link to="/bmi">BMI Calculator</Link></li>
              <li><Link to="/contact">Nutrition Counseling</Link></li>
              <li><Link to="/contact">Corporate Wellness</Link></li>
              <li><Link to="/contact">Online Coaching</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Sector 17 Plaza, Chandigarh, Punjab 160017, India</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+91 1234567890</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>info@powerfitgym.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <span>Mon–Fri: 5AM – 11PM<br />Sat–Sun: 6AM – 10PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 PowerFit Gym. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
