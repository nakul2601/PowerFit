import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CardioWorkouts = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const cardioWorkouts = [
    {
      id: 1,
      title: 'Running',
      routeName: 'running',
      description: 'The most fundamental cardio exercise. Improves cardiovascular endurance, burns calories efficiently, and strengthens leg muscles. Perfect for all fitness levels.',
      image: '🏃',
      difficulty: 'Beginner',
      duration: '30 min',
      equipment: 'Running Shoes, Treadmill or Outdoor'
    },
    {
      id: 2,
      title: 'Cycling',
      routeName: 'cycling',
      description: 'Low-impact cardio that builds leg strength and endurance. Gentle on joints while providing excellent cardiovascular benefits and calorie burning.',
      image: '🚴',
      difficulty: 'Intermediate',
      duration: '45 min',
      equipment: 'Stationary Bike or Bicycle'
    },
    {
      id: 3,
      title: 'Jump Rope',
      routeName: 'jump-rope',
      description: 'High-intensity exercise that improves coordination, agility, and cardiovascular fitness. Burns calories quickly while enhancing footwork and timing.',
      image: '🪢',
      difficulty: 'Intermediate',
      duration: '25 min',
      equipment: 'Jump Rope, Exercise Mat'
    },
    {
      id: 4,
      title: 'HIIT Training',
      routeName: 'hiit-training',
      description: 'High-Intensity Interval Training that alternates between intense bursts and recovery periods. Maximizes calorie burn and improves metabolic rate.',
      image: '⚡',
      difficulty: 'Advanced',
      duration: '30 min',
      equipment: 'Timer, Various Equipment Options'
    },
    {
      id: 5,
      title: 'Rowing Machine',
      routeName: 'rowing-machine',
      description: 'Full-body cardio that engages arms, legs, and core simultaneously. Excellent for building endurance while being gentle on joints.',
      image: '🚣',
      difficulty: 'Intermediate',
      duration: '40 min',
      equipment: 'Rowing Machine'
    },
    {
      id: 6,
      title: 'Stair Climber',
      routeName: 'stair-climber',
      description: 'Lower body focused cardio that builds leg strength and endurance. Simulates stair climbing for an intense calorie-burning workout.',
      image: '🪜',
      difficulty: 'Intermediate',
      duration: '35 min',
      equipment: 'Stair Climber Machine or Stairs'
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
            <span className="breadcrumb-active">Cardio Workouts</span>
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
            <h1>Cardio Workouts</h1>
            <p>Improve endurance and burn calories with these effective cardio routines</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">6</span>
                <span className="stat-label">Cardio Workouts</span>
              </div>
              <div className="stat">
                <span className="stat-number">All</span>
                <span className="stat-label">Fitness Levels</span>
              </div>
              <div className="stat">
                <span className="stat-number">25-45</span>
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
            <h2>Cardio Workout Plans</h2>
            <p>Heart-pumping routines designed to boost endurance and burn calories</p>
          </div>

          <div className="workouts-grid">
            {cardioWorkouts.map(workout => (
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

export default CardioWorkouts;
