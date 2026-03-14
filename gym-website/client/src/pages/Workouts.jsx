import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Workouts = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const workoutCategories = [
    {
      id: 'chest',
      name: 'Chest Exercises',
      icon: '💪',
      description: 'Build a powerful chest with these targeted exercises'
    },
    {
      id: 'legs',
      name: 'Leg Exercises',
      icon: '🦵',
      description: 'Strengthen your lower body with comprehensive leg workouts'
    },
    {
      id: 'cardio',
      name: 'Cardio',
      icon: '🏃',
      description: 'Improve endurance and burn calories with cardio routines'
    },
    {
      id: 'yoga',
      name: 'Yoga',
      icon: '🧘',
      description: 'Enhance flexibility and mindfulness through yoga practice'
    }
  ];

  const workouts = {
    chest: [
      {
        id: 1,
        title: 'Bench Press',
        routeName: 'bench-press',
        description: 'Classic compound exercise for building chest strength and mass. Targets pectoral muscles, triceps, and anterior deltoids.',
        image: '🏋️',
        difficulty: 'intermediate',
        duration: '45 min',
        equipment: 'Barbell, Bench'
      },
      {
        id: 2,
        title: 'Push-ups',
        routeName: 'push-ups',
        description: 'Bodyweight exercise that strengthens chest, shoulders, and triceps. Great for building functional upper body strength.',
        image: '💪',
        difficulty: 'beginner',
        duration: '30 min',
        equipment: 'Bodyweight only'
      },
      {
        id: 3,
        title: 'Dumbbell Flyes',
        routeName: 'dumbbell-flyes',
        description: 'Isolation exercise that targets the chest muscles with emphasis on the inner chest for better definition.',
        image: '🏋️',
        difficulty: 'intermediate',
        duration: '35 min',
        equipment: 'Dumbbells, Bench'
      },
      {
        id: 4,
        title: 'Incline Press',
        routeName: 'incline-press',
        description: 'Targets the upper chest fibers for a complete chest development. Creates that full, rounded look.',
        image: '📈',
        difficulty: 'advanced',
        duration: '40 min',
        equipment: 'Barbell, Incline Bench'
      }
    ],
    legs: [
      {
        id: 5,
        title: 'Squats',
        routeName: 'squats',
        description: 'King of leg exercises. Builds quadriceps, hamstrings, glutes, and core strength. Essential for lower body development.',
        image: '🦵',
        difficulty: 'intermediate',
        duration: '45 min',
        equipment: 'Barbell, Squat Rack'
      },
      {
        id: 6,
        title: 'Deadlifts',
        routeName: 'deadlifts',
        description: 'Full-body compound movement that primarily targets hamstrings, glutes, and lower back. Builds overall strength.',
        image: '🏋️',
        difficulty: 'advanced',
        duration: '50 min',
        equipment: 'Barbell, Weight Plates'
      },
      {
        id: 7,
        title: 'Lunges',
        routeName: 'lunges',
        description: 'Unilateral leg exercise that improves balance and targets each leg individually. Great for muscle symmetry.',
        image: '🚶',
        difficulty: 'beginner',
        duration: '30 min',
        equipment: 'Bodyweight or Dumbbells'
      },
      {
        id: 8,
        title: 'Leg Press',
        routeName: 'leg-press',
        description: 'Machine exercise that allows heavy loading without requiring balance. Targets all major leg muscles.',
        image: '🏋️',
        difficulty: 'intermediate',
        duration: '40 min',
        equipment: 'Leg Press Machine'
      }
    ],
    cardio: [
      {
        id: 9,
        title: 'HIIT Running',
        routeName: 'hiit-running',
        description: 'High-intensity interval training that alternates between sprinting and recovery. Maximizes calorie burn in minimal time.',
        image: '🏃',
        difficulty: 'advanced',
        duration: '30 min',
        equipment: 'Treadmill'
      },
      {
        id: 10,
        title: 'Cycling Intervals',
        routeName: 'cycling-intervals',
        description: 'Low-impact cardio with interval training. Improves cardiovascular fitness while being gentle on joints.',
        image: '🚴',
        difficulty: 'intermediate',
        duration: '45 min',
        equipment: 'Stationary Bike'
      },
      {
        id: 11,
        title: 'Rowing Machine',
        routeName: 'rowing-machine',
        description: 'Full-body cardio that works arms, legs, and core simultaneously. Excellent for building endurance.',
        image: '🚣',
        difficulty: 'intermediate',
        duration: '40 min',
        equipment: 'Rowing Machine'
      },
      {
        id: 12,
        title: 'Jump Rope',
        routeName: 'jump-rope',
        description: 'Simple yet effective cardio exercise that improves coordination, agility, and cardiovascular fitness.',
        image: '🪢',
        difficulty: 'beginner',
        duration: '25 min',
        equipment: 'Jump Rope'
      }
    ],
    yoga: [
      {
        id: 13,
        title: 'Sun Salutation',
        routeName: 'sun-salutation',
        description: 'Flowing sequence of poses that warms up the body and improves flexibility. Perfect for starting your day.',
        image: '🌅',
        difficulty: 'beginner',
        duration: '30 min',
        equipment: 'Yoga Mat'
      },
      {
        id: 14,
        title: 'Vinyasa Flow',
        routeName: 'vinyasa-flow',
        description: 'Dynamic yoga practice that links breath with movement. Builds strength, flexibility, and mindfulness.',
        image: '🌊',
        difficulty: 'intermediate',
        duration: '60 min',
        equipment: 'Yoga Mat'
      },
      {
        id: 15,
        title: 'Power Yoga',
        routeName: 'power-yoga',
        description: 'Fitness-based yoga that incorporates strength training and cardio elements. Challenging and energizing.',
        image: '⚡',
        difficulty: 'advanced',
        duration: '75 min',
        equipment: 'Yoga Mat'
      },
      {
        id: 16,
        title: 'Restorative Yoga',
        routeName: 'restorative-yoga',
        description: 'Gentle practice focused on relaxation and recovery. Uses props for support and longer holds.',
        image: '😌',
        difficulty: 'beginner',
        duration: '90 min',
        equipment: 'Yoga Mat, Props'
      }
    ]
  };

  const allWorkouts = [
    ...workouts.chest,
    ...workouts.legs,
    ...workouts.cardio,
    ...workouts.yoga
  ];

  const filteredWorkouts = selectedCategory === 'all' 
    ? allWorkouts 
    : workouts[selectedCategory] || [];

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'beginner': return '#4caf50';
      case 'intermediate': return '#ff9800';
      case 'advanced': return '#f44336';
      default: return '#666';
    }
  };

  return (
    <div className="workouts">
      {/* Hero Section */}
      <section className="workouts-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Workout Plans</h1>
            <p>Choose from our comprehensive collection of exercises designed to help you achieve your fitness goals</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">16</span>
                <span className="stat-label">Workout Plans</span>
              </div>
              <div className="stat">
                <span className="stat-number">4</span>
                <span className="stat-label">Categories</span>
              </div>
              <div className="stat">
                <span className="stat-number">All</span>
                <span className="stat-label">Fitness Levels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2>Workout Categories</h2>
          <p>Select a category to view specialized workout plans</p>
          
          <div className="categories-grid">
            <button 
              className={`category-card ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              <div className="category-icon">🏋️</div>
              <h3>All Workouts</h3>
              <p>View all available workout plans</p>
            </button>

            {workoutCategories.map(category => (
              <button 
                key={category.id}
                className={`category-card ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => navigate(`/workouts/${category.id}`)}
              >
                <div className="category-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Workouts Grid */}
      <section className="workouts-section">
        <div className="container">
          <div className="section-header">
            <h2>
              {selectedCategory === 'all' 
                ? 'All Workout Plans' 
                : workoutCategories.find(c => c.id === selectedCategory)?.name || 'Workout Plans'
              }
            </h2>
            <p>
              {selectedCategory === 'all' 
                ? 'Browse our complete collection of workout plans' 
                : `Specialized ${selectedCategory} workout routines`
              }
            </p>
          </div>

          <div className="workouts-grid">
            {filteredWorkouts.map(workout => (
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
                    <button 
                      className="btn btn-primary btn-sm" 
                      onClick={() => navigate(`/workout/${workout.routeName}`)}
                    >
                      Start Workout
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredWorkouts.length === 0 && (
            <div className="no-workouts">
              <div className="no-workouts-icon">🏋️</div>
              <h3>No workouts found</h3>
              <p>Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="workout-benefits">
        <div className="container">
          <h2>Benefits of Structured Workout Plans</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Goal-Oriented</h3>
              <p>Each workout plan is designed to achieve specific fitness goals</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <h3>Progressive Overload</h3>
              <p>Structured progression ensures continuous improvement</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⏱️</div>
              <h3>Time-Efficient</h3>
              <p>Maximize results with optimized workout durations</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔄</div>
              <h3>Balanced Training</h3>
              <p>Comprehensive routines that work all major muscle groups</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="workout-tips">
        <div className="container">
          <h2>Workout Tips for Success</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-number">1</div>
              <h3>Warm Up Properly</h3>
              <p>Always start with 5-10 minutes of light cardio and dynamic stretching to prepare your muscles</p>
            </div>
            <div className="tip-card">
              <div className="tip-number">2</div>
              <h3>Focus on Form</h3>
              <p>Proper form is more important than weight. Master the technique before increasing intensity</p>
            </div>
            <div className="tip-card">
              <div className="tip-number">3</div>
              <h3>Stay Consistent</h3>
              <p>Regular workouts are key to seeing results. Aim for 3-5 sessions per week</p>
            </div>
            <div className="tip-card">
              <div className="tip-number">4</div>
              <h3>Listen to Your Body</h3>
              <p>Rest when needed and don't push through pain. Recovery is part of the process</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workouts;
