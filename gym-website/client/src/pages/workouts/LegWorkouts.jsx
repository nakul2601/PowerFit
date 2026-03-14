import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LegWorkouts = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const legWorkouts = [
    {
      id: 1,
      title: 'Squats',
      routeName: 'squats',
      description: 'The king of all leg exercises. Build massive quadriceps, hamstrings, glutes, and core strength. Essential foundation for any serious leg training routine.',
      image: '🦵',
      difficulty: 'Intermediate',
      duration: '45 min',
      equipment: 'Barbell, Squat Rack, Weight Plates'
    },
    {
      id: 2,
      title: 'Lunges',
      routeName: 'lunges',
      description: 'Unilateral exercise that improves balance and targets each leg individually. Perfect for muscle symmetry and functional strength development.',
      image: '🚶',
      difficulty: 'Beginner',
      duration: '30 min',
      equipment: 'Bodyweight or Dumbbells'
    },
    {
      id: 3,
      title: 'Leg Press',
      routeName: 'leg-press',
      description: 'Machine exercise that allows heavy loading without requiring balance. Targets all major leg muscles with reduced lower back strain.',
      image: '🏋️',
      difficulty: 'Intermediate',
      duration: '40 min',
      equipment: 'Leg Press Machine'
    },
    {
      id: 4,
      title: 'Romanian Deadlifts',
      routeName: 'romanian-deadlifts',
      description: 'Excellent for hamstring and glute development. Focuses on the hip hinge movement pattern for posterior chain strength.',
      image: '🔥',
      difficulty: 'Advanced',
      duration: '35 min',
      equipment: 'Barbell, Weight Plates'
    },
    {
      id: 5,
      title: 'Bulgarian Split Squats',
      routeName: 'bulgarian-split-squats',
      description: 'Advanced unilateral exercise that challenges balance and targets quads, glutes, and hamstrings. Great for addressing muscle imbalances.',
      image: '⚖️',
      difficulty: 'Advanced',
      duration: '30 min',
      equipment: 'Dumbbells, Bench or Platform'
    },
    {
      id: 6,
      title: 'Calf Raises',
      routeName: 'calf-raises',
      description: 'Isolation exercise for building strong, defined calves. Essential for complete lower body development and athletic performance.',
      image: '⬆️',
      difficulty: 'Beginner',
      duration: '20 min',
      equipment: 'Calf Raise Machine or Step'
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
            <span className="breadcrumb-active">Leg Exercises</span>
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
            <h1>Leg Exercises</h1>
            <p>Strengthen your lower body with comprehensive leg workouts for power and stability</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">6</span>
                <span className="stat-label">Leg Workouts</span>
              </div>
              <div className="stat">
                <span className="stat-number">All</span>
                <span className="stat-label">Fitness Levels</span>
              </div>
              <div className="stat">
                <span className="stat-number">20-45</span>
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
            <h2>Leg Workout Plans</h2>
            <p>Comprehensive leg routines for building strength, power, and muscle mass</p>
          </div>

          <div className="workouts-grid">
            {legWorkouts.map(workout => (
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

export default LegWorkouts;
