import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const WorkoutDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Comprehensive workout data with step-by-step instructions
  const workoutData = {
    'bench-press': {
      title: 'Bench Press',
      difficulty: 'Intermediate',
      duration: '45 min',
      equipment: 'Barbell, Bench',
      category: 'Chest',
      steps: [
        'Lie flat on the bench with your eyes under the bar',
        'Grip the bar slightly wider than shoulder-width apart',
        'Plant your feet firmly on the ground',
        'Unrack the bar and lower it slowly to your chest',
        'Push the bar upward until your arms are fully extended',
        'Repeat for the desired number of repetitions',
        'Rerack the bar safely after completing your set'
      ]
    },
    'push-ups': {
      title: 'Push Ups',
      difficulty: 'Beginner',
      duration: '30 min',
      equipment: 'Bodyweight only',
      category: 'Chest',
      steps: [
        'Start in a plank position with hands shoulder-width apart',
        'Keep your body in a straight line from head to heels',
        'Lower your body until chest nearly touches the floor',
        'Push back up to the starting position',
        'Maintain proper form throughout the movement',
        'Breathe in on the way down, out on the way up',
        'Repeat for the desired number of repetitions'
      ]
    },
    'dumbbell-flyes': {
      title: 'Dumbbell Flyes',
      difficulty: 'Intermediate',
      duration: '35 min',
      equipment: 'Dumbbells, Bench',
      category: 'Chest',
      steps: [
        'Lie on a flat bench holding dumbbells above your chest',
        'Keep a slight bend in your elbows throughout',
        'Lower the dumbbells out to your sides in a wide arc',
        'Feel the stretch in your chest muscles',
        'Bring the dumbbells back together following the same arc',
        'Squeeze your chest at the top of the movement',
        'Repeat for the desired number of repetitions'
      ]
    },
    'incline-press': {
      title: 'Incline Press',
      difficulty: 'Advanced',
      duration: '40 min',
      equipment: 'Barbell, Incline Bench',
      category: 'Chest',
      steps: [
        'Set the incline bench to a 30-45 degree angle',
        'Lie on the bench with your eyes under the bar',
        'Grip the bar slightly wider than shoulder-width apart',
        'Unrack the bar and lower it slowly to your upper chest',
        'Push the bar upward until your arms are fully extended',
        'Focus on contracting your upper chest muscles',
        'Repeat for the desired number of repetitions'
      ]
    },
    'squats': {
      title: 'Squats',
      difficulty: 'Intermediate',
      duration: '45 min',
      equipment: 'Barbell, Squat Rack',
      category: 'Legs',
      steps: [
        'Position the bar across your upper back',
        'Stand with feet shoulder-width apart',
        'Keep your chest up and back straight',
        'Lower your body until thighs are parallel to floor',
        'Push through your heels to return to standing',
        'Maintain proper form throughout',
        'Repeat for the desired number of repetitions'
      ]
    },
    'deadlifts': {
      title: 'Deadlifts',
      difficulty: 'Advanced',
      duration: '50 min',
      equipment: 'Barbell, Weight Plates',
      category: 'Legs',
      steps: [
        'Stand with feet hip-width apart over the bar',
        'Bend at hips and knees to grip the bar',
        'Keep your back straight and chest up',
        'Drive through your heels to lift the bar',
        'Extend your hips and knees fully',
        'Lower the bar with controlled movement',
        'Repeat for the desired number of repetitions'
      ]
    },
    'lunges': {
      title: 'Lunges',
      difficulty: 'Beginner',
      duration: '30 min',
      equipment: 'Bodyweight or Dumbbells',
      category: 'Legs',
      steps: [
        'Stand with feet hip-width apart',
        'Step forward with one leg',
        'Lower your hips until both knees are bent at 90 degrees',
        'Push back to the starting position',
        'Alternate legs or complete all reps on one side',
        'Keep your torso upright throughout',
        'Repeat for the desired number of repetitions'
      ]
    },
    'leg-press': {
      title: 'Leg Press',
      difficulty: 'Intermediate',
      duration: '40 min',
      equipment: 'Leg Press Machine',
      category: 'Legs',
      steps: [
        'Sit on the leg press machine with feet on platform',
        'Position feet shoulder-width apart',
        'Release the safety locks',
        'Lower the platform slowly toward your chest',
        'Push the platform back to the starting position',
        'Keep your lower back pressed against the seat',
        'Repeat for the desired number of repetitions'
      ]
    },
    'hiit-running': {
      title: 'HIIT Running',
      difficulty: 'Advanced',
      duration: '30 min',
      equipment: 'Treadmill',
      category: 'Cardio',
      steps: [
        'Warm up with 5 minutes of light jogging',
        'Sprint at maximum effort for 30 seconds',
        'Recover with light jogging for 90 seconds',
        'Repeat the sprint-recovery cycle 8-10 times',
        'Focus on proper running form during sprints',
        'Cool down with 5 minutes of walking',
        'Stretch major muscle groups after completion'
      ]
    },
    'cycling-intervals': {
      title: 'Cycling Intervals',
      difficulty: 'Intermediate',
      duration: '45 min',
      equipment: 'Stationary Bike',
      category: 'Cardio',
      steps: [
        'Adjust the bike seat to proper height',
        'Start with 5 minutes of easy cycling',
        'Increase resistance for high-intensity intervals',
        'Cycle hard for 2 minutes',
        'Reduce resistance for 2 minutes of recovery',
        'Repeat the interval cycle 8-10 times',
        'Cool down with 5 minutes of easy cycling'
      ]
    },
    'rowing-machine': {
      title: 'Rowing Machine',
      difficulty: 'Intermediate',
      duration: '40 min',
      equipment: 'Rowing Machine',
      category: 'Cardio',
      steps: [
        'Strap your feet securely in the footrests',
        'Start with the catch position (arms extended)',
        'Drive through your legs first, then lean back',
        'Pull the handle to your chest at the finish',
        'Reverse the motion to return to start',
        'Maintain smooth, continuous motion',
        'Focus on powerful leg drive and controlled recovery'
      ]
    },
    'jump-rope': {
      title: 'Jump Rope',
      difficulty: 'Beginner',
      duration: '25 min',
      equipment: 'Jump Rope',
      category: 'Cardio',
      steps: [
        'Hold rope handles with palms facing forward',
        'Start with small jumps to get rhythm',
        'Keep elbows close to your sides',
        'Jump only high enough to clear the rope',
        'Land softly on the balls of your feet',
        'Maintain steady breathing pattern',
        'Practice intervals of work and rest periods'
      ]
    },
    'sun-salutation': {
      title: 'Sun Salutation',
      difficulty: 'Beginner',
      duration: '30 min',
      equipment: 'Yoga Mat',
      category: 'Yoga',
      steps: [
        'Stand at the top of your mat with hands in prayer position',
        'Inhale and reach arms overhead, looking up',
        'Exhale and fold forward, bringing hands to the floor',
        'Inhale and lift halfway, lengthening your spine',
        'Exhale and step or jump back to plank position',
        'Lower down and then inhale to upward facing dog',
        'Exhale to downward facing dog, hold for 5 breaths',
        'Step or jump forward to hands, inhale to lift halfway',
        'Exhale to fold forward, then inhale to stand up'
      ]
    },
    'vinyasa-flow': {
      title: 'Vinyasa Flow',
      difficulty: 'Intermediate',
      duration: '60 min',
      equipment: 'Yoga Mat',
      category: 'Yoga',
      steps: [
        'Begin in child\'s pose for centering',
        'Flow through sun salutation A sequences',
        'Move into warrior poses with smooth transitions',
        'Link breath with each movement',
        'Include balancing poses like tree or warrior III',
        'Incorporate twists for spinal health',
        'End with seated poses and final relaxation'
      ]
    },
    'power-yoga': {
      title: 'Power Yoga',
      difficulty: 'Advanced',
      duration: '75 min',
      equipment: 'Yoga Mat',
      category: 'Yoga',
      steps: [
        'Start with dynamic warm-up movements',
        'Flow through challenging sun salutation variations',
        'Include advanced poses like crow or handstand prep',
        'Build heat with faster-paced sequences',
        'Incorporate strength-building holds',
        'Practice advanced balancing poses',
        'Cool down with deep stretching and savasana'
      ]
    },
    'restorative-yoga': {
      title: 'Restorative Yoga',
      difficulty: 'Beginner',
      duration: '90 min',
      equipment: 'Yoga Mat, Props',
      category: 'Yoga',
      steps: [
        'Set up props for supported poses',
        'Begin with gentle seated breathing',
        'Move into supported reclining poses',
        'Hold each pose for 5-10 minutes',
        'Use props for complete support and comfort',
        'Focus on deep, mindful breathing',
        'End with extended savasana for deep relaxation'
      ]
    }
  };

  useEffect(() => {
    // Simulate loading and find workout
    const timer = setTimeout(() => {
      const foundWorkout = workoutData[name];
      setWorkout(foundWorkout);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [name]);

  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => setTimer(prev => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return '#4caf50';
      case 'Intermediate': return '#ff9800';
      case 'Advanced': return '#f44336';
      default: return '#666';
    }
  };

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  const pauseTimer = () => {
    setIsTimerRunning(false);
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimer(0);
  };

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!workout) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h2>Workout Not Found</h2>
        <p>The workout you're looking for doesn't exist.</p>
        <button className="btn btn-primary" onClick={() => navigate('/workouts')}>
          Back to Workouts
        </button>
      </div>
    );
  }

  return (
    <div className="workout-detail">
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
            <span className="breadcrumb-active">{workout.title}</span>
          </div>
        </nav>
        
        <a href="/workouts" className="back-button">
          ← Back to Workouts
        </a>
      </div>

      {/* Workout Header */}
      <section className="workout-hero">
        <div className="container">
          <div className="hero-content">
            <h1>{workout.title}</h1>
            <div className="workout-meta">
              <div className="meta-item">
                <span className="meta-icon">⚡</span>
                <span>{workout.difficulty}</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">⏱️</span>
                <span>{workout.duration}</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">🏋️</span>
                <span>{workout.equipment}</span>
              </div>
            </div>
            <div 
              className="difficulty-badge" 
              style={{ backgroundColor: getDifficultyColor(workout.difficulty) }}
            >
              {workout.difficulty}
            </div>
          </div>
        </div>
      </section>

      {/* Timer Section */}
      <section className="timer-section">
        <div className="container">
          <div className="timer-card">
            <h2>Workout Timer</h2>
            <div className="timer-display">
              {formatTime(timer)}
            </div>
            <div className="timer-controls">
              {!isTimerRunning ? (
                <button className="btn btn-primary" onClick={startTimer}>
                  Start Timer
                </button>
              ) : (
                <button className="btn btn-secondary" onClick={pauseTimer}>
                  Pause Timer
                </button>
              )}
              <button className="btn btn-outline" onClick={resetTimer}>
                Reset Timer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Workout Steps */}
      <section className="steps-section">
        <div className="container">
          <div className="section-header">
            <h2>Step-by-Step Instructions</h2>
            <p>Follow these instructions to perform the {workout.title} correctly</p>
          </div>
          
          <div className="steps-container">
            {workout.steps.map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-number">{index + 1}</div>
                <div className="step-content">
                  <p>{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="tips-section">
        <div className="container">
          <div className="section-header">
            <h2>Important Tips</h2>
            <p>Keep these points in mind for a safe and effective workout</p>
          </div>
          
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">🎯</div>
              <h3>Proper Form</h3>
              <p>Focus on maintaining correct form throughout each repetition</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">💪</div>
              <h3>Controlled Movement</h3>
              <p>Perform each movement slowly and with control</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🫁</div>
              <h3>Breathing</h3>
              <p>Maintain steady breathing and don't hold your breath</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🔥</div>
              <h3>Listen to Your Body</h3>
              <p>Stop if you feel pain and adjust intensity as needed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkoutDetail;
