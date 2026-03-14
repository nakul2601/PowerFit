import React from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h1>About PowerFit Gym</h1>
        
        <section className="about-story">
          <h2 className="section-title">Our Story</h2>
          <p>
            Founded in 2020, PowerFit Gym has been dedicated to helping individuals achieve their fitness goals. 
            We started with a simple mission: to create a welcoming environment where people of all fitness levels 
            can feel comfortable and motivated to improve their health.
          </p>
          <p>
            Today, we're proud to be one of the most trusted fitness centers in the area, with over 5,000 members 
            and a team of 20+ certified trainers who are passionate about helping you succeed.
          </p>
        </section>

        <section className="about-mission">
          <h2 className="section-title">Our Mission</h2>
          <div className="mission-grid">
            <div className="mission-item">
              <h3 className="subheading">Empowerment</h3>
              <p>Empowering individuals to take control of their health and fitness journey</p>
            </div>
            <div className="mission-item">
              <h3 className="subheading">Community</h3>
              <p>Building a supportive community that motivates and inspires each other</p>
            </div>
            <div className="mission-item">
              <h3 className="subheading">Excellence</h3>
              <p>Delivering exceptional service and results through expert guidance</p>
            </div>
          </div>
        </section>

        <section className="about-stats">
          <h2 className="section-title">By the Numbers</h2>
          <div className="stats-grid">
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
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Gym Access</div>
            </div>
          </div>
        </section>

        <section className="about-facilities">
          <h2 className="section-title">Our Facilities</h2>
          <div className="facilities-grid">
            <div className="facility-item">
              <h3 className="subheading">🏋️ Weight Training Area</h3>
              <p>Fully equipped with free weights, machines, and power racks</p>
            </div>
            <div className="facility-item">
              <h3 className="subheading">🏃 Cardio Zone</h3>
              <p>Modern treadmills, ellipticals, and stationary bikes</p>
            </div>
            <div className="facility-item">
              <h3 className="subheading">🧘 Studio Space</h3>
              <p>Dedicated area for yoga, pilates, and group classes</p>
            </div>
            <div className="facility-item">
              <h3 className="subheading">🚿 Locker Rooms</h3>
              <p>Clean, spacious locker rooms with showers and amenities</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
