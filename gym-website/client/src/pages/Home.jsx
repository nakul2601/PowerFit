import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-title">
                Transform Your Body, <span>Transform Your Life</span>
              </h1>
              <p className="hero-subtitle">
                Join PowerFit Gym and unlock your full potential with expert training, 
                state-of-the-art equipment, and a supportive community.
              </p>
              <div className="hero-buttons">
                <div className="hero-cta-buttons">
                  <Link to="/join" className="btn hero-btn">
                    Start Free Trial
                  </Link>
                  <Link to="/contact" className="btn hero-btn">
                    Schedule Visit
                  </Link>
                </div>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">5000+</div>
                  <div className="stat-label">Happy Members</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Expert Trainers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Fitness Classes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose PowerFit?</h2>
            <p>Experience the difference with our premium fitness services</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <span className="icon-emoji">🏋️</span>
                <div className="icon-bg"></div>
              </div>
              <h3>Personal Training</h3>
              <p>
                Get one-on-one guidance from certified trainers who create personalized 
                workout plans tailored to your specific goals and fitness level.
              </p>
              <ul className="feature-list">
                <li>Custom workout plans</li>
                <li>Nutritional guidance</li>
                <li>Progress tracking</li>
                <li>24/7 support</li>
              </ul>
              <Link to="/trainers" className="feature-link">
                Meet Our Trainers →
              </Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <span className="icon-emoji">💪</span>
                <div className="icon-bg"></div>
              </div>
              <h3>Modern Equipment</h3>
              <p>
                Train with the latest fitness technology and equipment from leading brands, 
                ensuring safe and effective workouts every time.
              </p>
              <ul className="feature-list">
                <li>Cardio machines</li>
                <li>Weight training</li>
                <li>Functional training zone</li>
                <li>Olympic lifting platform</li>
              </ul>
              <Link to="/about" className="feature-link">
                Tour Our Facility →
              </Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <span className="icon-emoji">🏋️</span>
                <div className="icon-bg"></div>
              </div>
              <h3>Workout Sessions</h3>
              <p>
                Explore our structured workout sessions designed to help you build strength, 
                improve endurance, and achieve your fitness goals with guided training programs.
              </p>
              <ul className="feature-list">
                <li>Guided workout programs</li>
                <li>Strength & cardio sessions</li>
                <li>Beginner to advanced levels</li>
                <li>Full body training plans</li>
              </ul>
              <Link to="/workouts" className="feature-link">
                Explore Workouts →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Preview Section */}
      <section className="membership-preview">
        <div className="container">
          <div className="section-header">
            <h2>Choose Your Fitness Journey</h2>
            <p>Flexible membership plans designed to fit your lifestyle and goals</p>
          </div>
          
          <div className="packages-preview">
            <div className="package-card">
              <h3>Basic</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">29</span>
                <span className="period">/month</span>
              </div>
              <ul className="package-features">
                <li>✓ Gym equipment access</li>
                <li>✓ 24/7 gym access</li>
                <li>✓ Basic workout plan</li>
                <li>✓ Locker room access</li>
              </ul>
              <Link to="/packages" className="btn btn-outline">
                Learn More
              </Link>
            </div>

            <div className="package-card featured">
              <div className="popular-badge">Most Popular</div>
              <h3>Pro</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">49</span>
                <span className="period">/month</span>
              </div>
              <ul className="package-features">
                <li>✓ Everything in Basic</li>
                <li>✓ Group fitness classes</li>
                <li>✓ Personalized workout plan</li>
                <li>✓ Nutrition guidance</li>
                <li>✓ Progress tracking</li>
              </ul>
              <Link to="/packages" className="btn btn-primary">
                Get Started
              </Link>
            </div>

            <div className="package-card">
              <h3>Elite</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">99</span>
                <span className="period">/month</span>
              </div>
              <ul className="package-features">
                <li>✓ Everything in Pro</li>
                <li>✓ Personal trainer (4 sessions/month)</li>
                <li>✓ Custom meal plans</li>
                <li>✓ Spa access</li>
                <li>✓ Guest privileges</li>
              </ul>
              <Link to="/packages" className="btn btn-outline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer Highlights Section */}
      <section className="trainer-highlights">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Expert Trainers</h2>
            <p>Learn from the best fitness professionals in the industry</p>
          </div>
          
          <div className="trainers-grid">
            <div className="trainer-card">
              <div className="trainer-image">
                <div className="trainer-avatar">👩‍🦰</div>
                <div className="trainer-overlay">
                  <Link to="/trainers" className="btn btn-primary btn-sm">
                    View Profile
                  </Link>
                </div>
              </div>
              <div className="trainer-info">
                <h3>Sarah Johnson</h3>
                <div className="trainer-specialty">Strength & Conditioning</div>
                <div className="trainer-experience">8 years experience</div>
                <p>Specializes in strength training and athletic performance enhancement</p>
              </div>
            </div>

            <div className="trainer-card">
              <div className="trainer-image">
                <div className="trainer-avatar">👨‍🦱</div>
                <div className="trainer-overlay">
                  <Link to="/trainers" className="btn btn-primary btn-sm">
                    View Profile
                  </Link>
                </div>
              </div>
              <div className="trainer-info">
                <h3>Mike Chen</h3>
                <div className="trainer-specialty">CrossFit & HIIT</div>
                <div className="trainer-experience">6 years experience</div>
                <p>Expert in high-intensity training and functional fitness</p>
              </div>
            </div>

            <div className="trainer-card">
              <div className="trainer-image">
                <div className="trainer-avatar">👩‍🦳</div>
                <div className="trainer-overlay">
                  <Link to="/trainers" className="btn btn-primary btn-sm">
                    View Profile
                  </Link>
                </div>
              </div>
              <div className="trainer-info">
                <h3>Emily Davis</h3>
                <div className="trainer-specialty">Yoga & Flexibility</div>
                <div className="trainer-experience">10 years experience</div>
                <p>Certified yoga instructor focusing on flexibility and mindfulness</p>
              </div>
            </div>
          </div>
          
          <div className="trainers-cta">
            <Link to="/trainers" className="btn btn-primary btn-large">
              View All Trainers
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Fitness Journey?</h2>
            <p>Join PowerFit Gym today and get your first month absolutely free!</p>
            <div className="cta-buttons">
              <Link to="/join" className="btn hero-outline-btn">
                Start Free Trial
              </Link>
              <Link to="/contact" className="btn hero-outline-btn">
                Schedule Visit
              </Link>
            </div>
            <div className="cta-features">
              <div className="cta-feature">
                <span className="feature-icon">✓</span>
                <span>No joining fee</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">✓</span>
                <span>Cancel anytime</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">✓</span>
                <span>Free personal training session</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
