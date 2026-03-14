import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ChestWorkouts = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const chestWorkouts = [
    {
      id: 1,
      title: 'Bench Press',
      routeName: 'bench-press',
      description: 'The king of chest exercises. Build overall chest mass and strength with this compound movement that targets the pectoralis major, anterior deltoids, and triceps.',
      image: '🏋️',
      difficulty: 'Intermediate',
      duration: '45 min',
      equipment: 'Barbell, Bench, Weight Plates'
    },
    {
      id: 2,
      title: 'Incline Dumbbell Press',
      routeName: 'incline-dumbbell-press',
      description: 'Target the upper chest fibers for a complete chest development. The incline angle emphasizes the clavicular head of the pectoralis major for that full, rounded look.',
      image: '📈',
      difficulty: 'Intermediate',
      duration: '40 min',
      equipment: 'Dumbbells, Incline Bench'
    },
    {
      id: 3,
      title: 'Push Ups',
      routeName: 'push-ups',
      description: 'Classic bodyweight exercise that builds functional upper body strength. Targets chest, shoulders, and triceps while engaging core muscles for stability.',
      image: '💪',
      difficulty: 'Beginner',
      duration: '30 min',
      equipment: 'Bodyweight only, Exercise Mat'
    },
    {
      id: 4,
      title: 'Dumbbell Flyes',
      routeName: 'dumbbell-flyes',
      description: 'Isolation exercise that stretches and contracts the chest muscles. Excellent for adding definition and targeting the inner and outer chest fibers.',
      image: '🦋',
      difficulty: 'Intermediate',
      duration: '35 min',
      equipment: 'Dumbbells, Flat Bench'
    },
    {
      id: 5,
      title: 'Cable Crossovers',
      routeName: 'cable-crossovers',
      description: 'Constant tension exercise that isolates the chest muscles. Perfect for finishing your chest workout with a deep burn and muscle pump.',
      image: '⚡',
      difficulty: 'Advanced',
      duration: '30 min',
      equipment: 'Cable Machine, D-handles'
    },
    {
      id: 6,
      title: 'Decline Push Ups',
      routeName: 'decline-push-ups',
      description: 'Advanced variation that targets the lower chest fibers. The decline angle increases the load on the chest for enhanced muscle activation.',
      image: '🔽',
      difficulty: 'Advanced',
      duration: '25 min',
      equipment: 'Bodyweight, Bench or Platform'
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
            <span className="breadcrumb-active">Chest Exercises</span>
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
            <h1>Chest Exercises</h1>
            <p>Build a powerful chest with these targeted exercises designed for all fitness levels</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">6</span>
                <span className="stat-label">Chest Workouts</span>
              </div>
              <div className="stat">
                <span className="stat-number">All</span>
                <span className="stat-label">Fitness Levels</span>
              </div>
              <div className="stat">
                <span className="stat-number">25-45</span>
                <span className="stat-label">Minutes Average</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workouts Grid */}
      <section className="workouts-section">
        <div className="container">
          <div className="section-header">
            <h2>Chest Workout Plans</h2>
            <p>Specialized chest workout routines for building strength and mass</p>
          </div>

          <div className="workouts-grid">
            {chestWorkouts.map(workout => (
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

export default ChestWorkouts;
