import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SavedPlans = () => {
  const navigate = useNavigate();
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  useEffect(() => {
    // Load saved workouts from localStorage
    const workouts = localStorage.getItem('savedWorkouts');
    if (workouts) {
      setSavedWorkouts(JSON.parse(workouts));
    }
  }, []);

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return '#4caf50';
      case 'Intermediate': return '#ff9800';
      case 'Advanced': return '#f44336';
      default: return '#666';
    }
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Chest': return '💪';
      case 'Legs': return '🦵';
      case 'Cardio': return '🏃';
      case 'Yoga': return '🧘';
      default: return '🏋️';
    }
  };

  const getWorkoutRouteName = (workoutName) => {
    return workoutName.toLowerCase().replace(/\s+/g, '-');
  };

  const startWorkout = (workout) => {
    navigate(`/workout/${getWorkoutRouteName(workout.name)}`);
  };

  const removePlan = (index) => {
    const updatedWorkouts = savedWorkouts.filter((_, i) => i !== index);
    setSavedWorkouts(updatedWorkouts);
    localStorage.setItem('savedWorkouts', JSON.stringify(updatedWorkouts));
  };

  const clearAllPlans = () => {
    setSavedWorkouts([]);
    localStorage.removeItem('savedWorkouts');
  };

  return (
    <div className="saved-plans">
      {/* Hero Section */}
      <section className="saved-plans-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Saved Workout Plans</h1>
            <p>Your personal collection of favorite workouts for quick access</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">{savedWorkouts.length}</span>
                <span className="stat-label">Saved Plans</span>
              </div>
              <div className="stat">
                <span className="stat-number">All</span>
                <span className="stat-label">Categories</span>
              </div>
              <div className="stat">
                <span className="stat-number">Custom</span>
                <span className="stat-label">Collection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="navigation-section">
        <div className="container">
          <div className="nav-buttons">
            <button className="btn btn-outline" onClick={() => navigate('/workouts')}>
              ← Browse All Workouts
            </button>
            {savedWorkouts.length > 0 && (
              <button className="btn btn-danger" onClick={clearAllPlans}>
                Clear All Plans
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Saved Plans Grid */}
      <section className="saved-plans-section">
        <div className="container">
          {savedWorkouts.length === 0 ? (
            <div className="no-saved-plans">
              <div className="no-plans-icon">📋</div>
              <h3>No Saved Plans Yet</h3>
              <p>Start building your personal workout collection by saving workouts from the categories</p>
              <button className="btn btn-primary" onClick={() => navigate('/workouts')}>
                Browse Workouts
              </button>
            </div>
          ) : (
            <>
              <div className="section-header">
                <h2>Your Saved Workout Plans</h2>
                <p>Quick access to your favorite exercises and routines</p>
              </div>

              <div className="saved-plans-grid">
                {savedWorkouts.map((workout, index) => (
                  <div key={index} className="saved-plan-card">
                    <div className="plan-header">
                      <div className="plan-icon">{getCategoryIcon(workout.category)}</div>
                      <div className="plan-category">{workout.category}</div>
                      {workout.difficulty && (
                        <div 
                          className="difficulty-badge" 
                          style={{ backgroundColor: getDifficultyColor(workout.difficulty) }}
                        >
                          {workout.difficulty}
                        </div>
                      )}
                    </div>
                    
                    <div className="plan-content">
                      <h3 className="plan-title">{workout.name}</h3>
                      
                      <div className="plan-meta">
                        <div className="meta-item">
                          <span className="meta-icon">⏱️</span>
                          <span>{workout.duration}</span>
                        </div>
                        {workout.equipment && (
                          <div className="meta-item">
                            <span className="meta-icon">🏋️</span>
                            <span>{workout.equipment}</span>
                          </div>
                        )}
                      </div>
                      
                      {workout.description && (
                        <p className="plan-description">{workout.description}</p>
                      )}
                      
                      <div className="plan-actions">
                        <button 
                          className="btn btn-primary btn-sm" 
                          onClick={() => startWorkout(workout)}
                        >
                          Start Workout
                        </button>
                        <button 
                          className="btn btn-danger btn-sm" 
                          onClick={() => removePlan(index)}
                        >
                          Remove Plan
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Tips Section */}
      {savedWorkouts.length > 0 && (
        <section className="tips-section">
          <div className="container">
            <h2>Tips for Your Saved Plans</h2>
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-icon">📅</div>
                <h3>Plan Your Week</h3>
                <p>Use your saved plans to create a balanced weekly workout schedule</p>
              </div>
              <div className="tip-card">
                <div className="tip-icon">🔄</div>
                <h3>Rotate Workouts</h3>
                <p>Keep your routine fresh by rotating between different saved plans</p>
              </div>
              <div className="tip-card">
                <div className="tip-icon">📈</div>
                <h3>Track Progress</h3>
                <p>Monitor your improvement with consistent workout routines</p>
              </div>
              <div className="tip-card">
                <div className="tip-icon">🎯</div>
                <h3>Stay Focused</h3>
                <p>Having saved plans helps you stay committed to your fitness goals</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SavedPlans;
