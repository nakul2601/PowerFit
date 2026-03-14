import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const YogaWorkouts = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const yogaWorkouts = [
    {
      id: 1,
      title: 'Sun Salutation',
      routeName: 'sun-salutation',
      description: 'Flowing sequence of poses that warms up the body and improves flexibility. Perfect for starting your day with mindful movement and breath synchronization.',
      image: '🌅',
      difficulty: 'Beginner',
      duration: '30 min',
      equipment: 'Yoga Mat, Comfortable Clothing'
    },
    {
      id: 2,
      title: 'Vinyasa Flow',
      routeName: 'vinyasa-flow',
      description: 'Dynamic yoga practice that links breath with movement. Builds strength, flexibility, and mindfulness through continuous flowing sequences.',
      image: '🌊',
      difficulty: 'Intermediate',
      duration: '60 min',
      equipment: 'Yoga Mat, Blocks (optional)'
    },
    {
      id: 3,
      title: 'Power Yoga',
      routeName: 'power-yoga',
      description: 'Fitness-based yoga that incorporates strength training and cardio elements. Challenging and energizing practice for building heat and stamina.',
      image: '⚡',
      difficulty: 'Advanced',
      duration: '75 min',
      equipment: 'Yoga Mat, Towel, Water Bottle'
    },
    {
      id: 4,
      title: 'Restorative Yoga',
      routeName: 'restorative-yoga',
      description: 'Gentle practice focused on relaxation and recovery. Uses props for support and longer holds to release tension and calm the nervous system.',
      image: '😌',
      difficulty: 'Beginner',
      duration: '90 min',
      equipment: 'Yoga Mat, Bolster, Blankets, Blocks'
    },
    {
      id: 5,
      title: 'Yin Yoga',
      routeName: 'yin-yoga',
      description: 'Slow-paced practice with long-held poses designed to improve flexibility and energy flow. Targets deep connective tissues and joints.',
      image: '🕯️',
      difficulty: 'Intermediate',
      duration: '60 min',
      equipment: 'Yoga Mat, Cushions, Timer'
    },
    {
      id: 6,
      title: 'Ashtanga Yoga',
      routeName: 'ashtanga-yoga',
      description: 'Traditional, physically demanding style with set sequences. Builds strength, flexibility, and discipline through progressive series of poses.',
      image: '🔥',
      difficulty: 'Advanced',
      duration: '90 min',
      equipment: 'Yoga Mat, familiarity with Primary Series'
    }
  ];

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return '#4caf50';
      case 'Intermediate': return '#ff9800';
      case 'Advanced': return '#f44336';
      default: return '#666';
    }
  };

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="workouts">
      {/* Breadcrumb Navigation */}
      <div className="container">
        <nav className="breadcrumb">
          <div className="breadcrumb-item">
            <a href="/" className="breadcrumb-link">Home</a>
          </div>
          <div className="breadcrumb-item">
            <a href="/workouts" className="breadcrumb-link">Workouts</a>
          </div>
          <div className="breadcrumb-item">
            <span className="breadcrumb-active">Yoga Practice</span>
          </div>
        </nav>
        
        <a href="/workouts" className="back-button">
          ← Back to Workouts
        </a>
      </div>

      {/* Hero Section */}
      <section className="workouts-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Yoga Practice</h1>
            <p>Enhance flexibility and mindfulness through these comprehensive yoga sessions</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">6</span>
                <span className="stat-label">Yoga Sessions</span>
              </div>
              <div className="stat">
                <span className="stat-number">All</span>
                <span className="stat-label">Fitness Levels</span>
              </div>
              <div className="stat">
                <span className="stat-number">30-90</span>
                <span className="stat-label">Minutes Range</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workouts Grid */}
      <section className="workouts-section">
        <div className="container">
          <div className="section-header">
            <h2>Yoga Workout Plans</h2>
            <p>Mind-body practices for flexibility, strength, and inner peace</p>
          </div>

          <div className="workouts-grid">
            {yogaWorkouts.map(workout => (
              <div key={workout.id} className="workout-card">
                <div className="workout-image">
                  <div className="workout-avatar">{workout.image}</div>
                  <div className="difficulty-badge" style={{ backgroundColor: getDifficultyColor(workout.difficulty) }}>
                    {workout.difficulty}
                  </div>
                </div>
                
                <div className="workout-content">
                  <h3 className="workout-title">{workout.title}</h3>
                  
                  <div className="workout-meta">
                    <div className="meta-item">
                      <span className="meta-icon">⏱️</span>
                      <span>{workout.duration}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon">🏋️</span>
                      <span>{workout.equipment}</span>
                    </div>
                  </div>
                  
                  <p className="workout-description">{workout.description}</p>
                  
                  <div className="workout-actions">
                    <button className="btn btn-primary btn-sm" onClick={() => navigate(`/workout/${workout.routeName}`)}>Start Workout</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default YogaWorkouts;
