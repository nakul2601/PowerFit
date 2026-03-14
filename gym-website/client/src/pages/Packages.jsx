import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PackageCard from '../components/PackageCard';

const Packages = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const packages = [
    {
      name: 'Basic',
      price: '₹999',
      period: '/month',
      originalPrice: '₹999',
      description: 'Perfect for beginners looking to start their fitness journey',
      features: [
        'Gym equipment access',
        '24/7 gym access',
        'Basic workout plan',
        'Locker room access',
        'Free fitness assessment',
        'Mobile app access'
      ],
      popular: false,
      color: 'blue'
    },
    {
      name: 'Standard',
      price: '₹2499',
      period: '/3 months',
      originalPrice: '₹2997',
      savings: 'Save ₹498',
      description: 'Most popular choice for serious fitness enthusiasts',
      features: [
        'Everything in Basic',
        'Group fitness classes',
        'Personalized workout plan',
        'Nutrition guidance',
        'Progress tracking',
        'Guest privileges (2/month)',
        'Priority booking',
        'Free personal training session'
      ],
      popular: true,
      color: 'orange'
    },
    {
      name: 'Premium',
      price: '₹7999',
      period: '/year',
      originalPrice: '₹11988',
      savings: 'Save ₹3989',
      description: 'Ultimate package for dedicated fitness achievers',
      features: [
        'Everything in Standard',
        'Unlimited personal trainer sessions',
        'Custom meal plans',
        'Spa and sauna access',
        'Unlimited guest privileges',
        'VIP locker room',
        'Monthly body composition analysis',
        'Nutritionist consultation',
        'Exclusive workshops',
        'Merchandise discount (20%)'
      ],
      popular: false,
      color: 'purple'
    }
  ];

  const additionalFeatures = [
    {
      icon: '💪',
      title: 'Expert Trainers',
      description: 'Certified professionals to guide your fitness journey'
    },
    {
      icon: '🏋️',
      title: 'Modern Equipment',
      description: 'State-of-the-art gym equipment from leading brands'
    },
    {
      icon: '🥗',
      title: 'Nutrition Support',
      description: 'Personalized diet plans and nutritional guidance'
    },
    {
      icon: '📱',
      title: 'Mobile App',
      description: 'Track progress, book classes, and manage membership'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my membership plan later?',
      answer: 'Yes! You can upgrade or downgrade your membership at any time. Changes will be reflected in your next billing cycle.'
    },
    {
      question: 'Is there a joining fee?',
      answer: 'No, we don\'t charge any joining fees. You only pay for your chosen membership plan.'
    },
    {
      question: 'Can I freeze my membership?',
      answer: 'Yes, you can freeze your membership for up to 3 months with valid reasons like medical conditions or travel.'
    },
    {
      question: 'What if I want to cancel?',
      answer: 'You can cancel your membership anytime with a 30-day notice. No cancellation fees apply.'
    },
    {
      question: 'Are there any hidden charges?',
      answer: 'Absolutely not! The price you see is what you pay. No hidden fees or surprise charges.'
    }
  ];

  return (
    <div className="packages">
      {/* Hero Section */}
      <section className="packages-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Choose Your Fitness Journey</h1>
            <p>Select the perfect membership plan that fits your goals and lifestyle</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">3</span>
                <span className="stat-label">Flexible Plans</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Gym Access</span>
              </div>
              <div className="stat">
                <span className="stat-number">No</span>
                <span className="stat-label">Hidden Fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Membership Plans</h2>
            <p>Transparent pricing with no surprises</p>
          </div>

          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <div key={index} className={`package-wrapper ${pkg.popular ? 'featured' : ''}`}>
                {pkg.popular && (
                  <div className="popular-badge">
                    <span>Most Popular</span>
                  </div>
                )}
                <div className="package-card">
                  <div className="package-header">
                    <h3>{pkg.name}</h3>
                    <p className="package-description">{pkg.description}</p>
                    <div className="package-price">
                      {pkg.savings && (
                        <div className="savings-badge">{pkg.savings}</div>
                      )}
                      <div className="price-main">
                        <span className="currency">₹</span>
                        <span className="amount">{pkg.price.replace('₹', '')}</span>
                        <span className="period">{pkg.period}</span>
                      </div>
                      {pkg.originalPrice !== pkg.price && (
                        <div className="original-price">
                          <span>Was {pkg.originalPrice}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="package-features">
                    <ul className="features-list">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="feature-item">
                          <span className="feature-icon">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="package-action">
                    <Link 
                      to="/join" 
                      className={`btn ${pkg.popular ? 'btn-primary' : 'btn-outline'} btn-full btn-large`}
                    >
                      Join Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="additional-features">
        <div className="container">
          <div className="section-header">
            <h2>What's Included in All Plans</h2>
            <p>Every membership comes with these essential benefits</p>
          </div>

          <div className="features-grid">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-header">
                  <span className="feature-icon">{feature.icon}</span>
                  <h3>{feature.title}</h3>
                </div>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison-section">
        <div className="container">
          <div className="section-header">
            <h2>Compare Plans</h2>
            <p>See the differences between our membership options</p>
          </div>

          <div className="comparison-table">
            <div className="table-header">
              <div className="feature-column">Features</div>
              <div className="plan-column">Basic</div>
              <div className="plan-column featured">Standard</div>
              <div className="plan-column">Premium</div>
            </div>

            <div className="table-row">
              <div className="feature-column">Gym Access</div>
              <div className="plan-column">✓</div>
              <div className="plan-column featured">✓</div>
              <div className="plan-column">✓</div>
            </div>

            <div className="table-row">
              <div className="feature-column">Group Classes</div>
              <div className="plan-column">-</div>
              <div className="plan-column featured">✓</div>
              <div className="plan-column">✓</div>
            </div>

            <div className="table-row">
              <div className="feature-column">Personal Training</div>
              <div className="plan-column">-</div>
              <div className="plan-column featured">1 session/month</div>
              <div className="plan-column">Unlimited</div>
            </div>

            <div className="table-row">
              <div className="feature-column">Nutrition Plan</div>
              <div className="plan-column">Basic</div>
              <div className="plan-column featured">Personalized</div>
              <div className="plan-column">Custom + Consultation</div>
            </div>

            <div className="table-row">
              <div className="feature-column">Guest Privileges</div>
              <div className="plan-column">-</div>
              <div className="plan-column featured">2/month</div>
              <div className="plan-column">Unlimited</div>
            </div>

            <div className="table-row">
              <div className="feature-column">Spa Access</div>
              <div className="plan-column">-</div>
              <div className="plan-column featured">-</div>
              <div className="plan-column">✓</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about our memberships</p>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Fitness Journey?</h2>
            <p>Join PowerFit Gym today and transform your life</p>
            <div className="cta-buttons">
              <Link to="/join" className="btn btn-primary btn-large">
                Join Now
              </Link>
              <Link to="/contact" className="btn btn-outline btn-large">
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
                <span>Free trial available</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
