import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const WorkoutPlayer = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [workout, setWorkout] = useState(null);

  // Workout data with steps
  const workoutData = {
    'bench-press': {
      title: 'Bench Press',
      description: 'The king of chest exercises. Build overall chest mass and strength with this compound movement that targets the pectoralis major, anterior deltoids, and triceps.',
      duration: 45,
      equipment: 'Barbell, Bench, Weight Plates',
      difficulty: 'Intermediate',
      steps: [
        'Lie flat on the bench with your eyes under the bar',
        'Grip the bar slightly wider than shoulder-width',
        'Unrack the bar and hold it with straight arms',
        'Lower the bar to your mid-chest, keeping elbows at 45 degrees',
        'Push the bar back up to starting position',
        'Repeat for desired repetitions',
        'Rerack the bar safely when finished'
      ]
    },
    'incline-dumbbell-press': {
      title: 'Incline Dumbbell Press',
      description: 'Target the upper chest fibers for a complete chest development. The incline angle emphasizes the clavicular head of the pectoralis major for that full, rounded look.',
      duration: 40,
      equipment: 'Dumbbells, Incline Bench',
      difficulty: 'Intermediate',
      steps: [
        'Set bench to 30-45 degree incline',
        'Sit on bench with dumbbells resting on thighs',
        'Lie back while bringing dumbbells to chest position',
        'Press dumbbells up until arms are fully extended',
        'Lower dumbbells slowly to chest level',
        'Repeat for desired repetitions',
        'Place dumbbells on thighs and sit up to finish'
      ]
    },
    'push-ups': {
      title: 'Push Ups',
      description: 'Classic bodyweight exercise that builds functional upper body strength. Targets chest, shoulders, and triceps while engaging core muscles for stability.',
      duration: 30,
      equipment: 'Bodyweight only, Exercise Mat',
      difficulty: 'Beginner',
      steps: [
        'Start in plank position with hands slightly wider than shoulders',
        'Keep body in straight line from head to heels',
        'Lower chest toward floor by bending elbows',
        'Push back up to starting position',
        'Maintain core engagement throughout movement',
        'Repeat for desired repetitions',
        'Modify with knees down if needed'
      ]
    },
    'squats': {
      title: 'Squats',
      description: 'The king of all leg exercises. Build massive quadriceps, hamstrings, glutes, and core strength. Essential foundation for any serious leg training routine.',
      duration: 45,
      equipment: 'Barbell, Squat Rack, Weight Plates',
      difficulty: 'Intermediate',
      steps: [
        'Position barbell on upper back/traps',
        'Step under bar and unrack with straight legs',
        'Stand with feet shoulder-width apart',
        'Lower hips back and down as if sitting in chair',
        'Go until thighs are parallel to floor or lower',
        'Drive through heels to return to standing',
        'Rerack bar safely when finished'
      ]
    },
    'lunges': {
      title: 'Lunges',
      description: 'Unilateral exercise that improves balance and targets each leg individually. Perfect for muscle symmetry and functional strength development.',
      duration: 30,
      equipment: 'Bodyweight or Dumbbells',
      difficulty: 'Beginner',
      steps: [
        'Stand tall with feet hip-width apart',
        'Step forward with one leg',
        'Lower hips until both knees are at 90 degrees',
        'Front knee should be over ankle, back knee toward floor',
        'Push through front heel to return to starting position',
        'Alternate legs or complete all reps on one side',
        'Keep torso upright throughout movement'
      ]
    },
    'running': {
      title: 'Running',
      description: 'The most fundamental cardio exercise. Improves cardiovascular endurance, burns calories efficiently, and strengthens leg muscles. Perfect for all fitness levels.',
      duration: 30,
      equipment: 'Running Shoes, Treadmill or Outdoor',
      difficulty: 'Beginner',
      steps: [
        'Warm up with 5 minutes of light walking',
        'Start with comfortable running pace',
        'Maintain steady breathing pattern',
        'Keep arms relaxed and swing naturally',
        'Land mid-foot, avoid heel striking',
        'Cool down with 5 minutes of walking',
        'Stretch major muscle groups after run'
      ]
    },
    'cycling': {
      title: 'Cycling',
      description: 'Low-impact cardio that builds leg strength and endurance. Gentle on joints while providing excellent cardiovascular benefits and calorie burning.',
      duration: 45,
      equipment: 'Stationary Bike or Bicycle',
      difficulty: 'Intermediate',
      steps: [
        'Adjust bike seat to hip height',
        'Set appropriate resistance level',
        'Start with easy pedaling to warm up',
        'Maintain steady cadence of 80-100 RPM',
        'Keep back straight and core engaged',
        'Increase resistance for intervals if desired',
        'Cool down with easy pedaling'
      ]
    },
    'jump-rope': {
      title: 'Jump Rope',
      description: 'High-intensity exercise that improves coordination, agility, and cardiovascular fitness. Burns calories quickly while enhancing footwork and timing.',
      duration: 25,
      equipment: 'Jump Rope, Exercise Mat',
      difficulty: 'Intermediate',
      steps: [
        'Adjust rope length to arm height',
        'Hold handles with firm grip',
        'Start with rope behind body',
        'Swing rope over head and jump over it',
        'Land softly on balls of feet',
        'Keep jumps small and consistent',
        'Maintain steady rhythm throughout'
      ]
    },
    'sun-salutation': {
      title: 'Sun Salutation',
      description: 'Flowing sequence of poses that warms up the body and improves flexibility. Perfect for starting your day with mindful movement and breath synchronization.',
      duration: 30,
      equipment: 'Yoga Mat, Comfortable Clothing',
      difficulty: 'Beginner',
      steps: [
        'Stand in Mountain Pose (Tadasana)',
        'Inhale and raise arms overhead',
        'Exhale and fold forward into Forward Bend',
        'Inhale and step back to Plank position',
        'Lower down through Chaturanga (push-up position)',
        'Inhale and lift chest into Upward Dog',
        'Exhale and press back to Downward Dog',
        'Step forward and repeat sequence'
      ]
    },
    'vinyasa-flow': {
      title: 'Vinyasa Flow',
      description: 'Dynamic yoga practice that links breath with movement. Builds strength, flexibility, and mindfulness through continuous flowing sequences.',
      duration: 60,
      equipment: 'Yoga Mat, Blocks (optional)',
      difficulty: 'Intermediate',
      steps: [
        'Begin in comfortable seated position',
        'Focus on establishing steady breathing pattern',
        'Move through Sun Salutation A sequences',
        'Flow between poses with breath synchronization',
        'Hold standing poses for 5 breaths each',
        'Include balancing poses and backbends',
        'End with Savasana (final relaxation)'
      ]
    },
    'power-yoga': {
      title: 'Power Yoga',
      description: 'Fitness-based yoga that incorporates strength training and cardio elements. Challenging and energizing practice for building heat and stamina.',
      duration: 75,
      equipment: 'Yoga Mat, Towel, Water Bottle',
      difficulty: 'Advanced',
      steps: [
        'Start with dynamic warm-up sequences',
        'Move through challenging Sun Salutations',
        'Include strength-building standing poses',
        'Add arm balances and inversions',
        'Maintain continuous flow between poses',
        'Focus on core engagement throughout',
        'Cool down with stretching and Savasana'
      ]
    }
  };

  useEffect(() => {
    const foundWorkout = workoutData[name];
    setWorkout(foundWorkout);
  }, [name]);

  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  const completeWorkout = () => {
    setIsTimerRunning(false);
    alert('Workout completed! Great job!');
    navigate('/workouts');
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return '#4caf50';
      case 'Intermediate': return '#ff9800';
      case 'Advanced': return '#f44336';
      default: return '#666';
    }
  };

  if (!workout) {
    return (
      <div className="workout-player">
        <div className="container">
          <h2>Workout not found</h2>
          <button className="btn btn-primary" onClick={() => navigate('/workouts')}>
            Back to Workouts
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="workout-player">
      <div className="container">
        {/* Header */}
        <div className="workout-header">
          <button className="btn btn-outline" onClick={() => navigate('/workouts')}>
            ← Back to Workouts
          </button>
          <h1>{workout.title}</h1>
          <div className="workout-meta">
            <span className="difficulty-badge" style={{ backgroundColor: getDifficultyColor(workout.difficulty) }}>
              {workout.difficulty}
            </span>
            <span className="duration">⏱️ {workout.duration} min</span>
            <span className="equipment">🏋️ {workout.equipment}</span>
          </div>
        </div>

        {/* Timer Section */}
        <div className="timer-section">
          <div className="timer-display">
            <h2>{formatTime(timer)}</h2>
          </div>
          <div className="timer-controls">
            {!isTimerRunning ? (
              <button className="btn btn-primary btn-lg" onClick={startTimer}>
                Start Timer
              </button>
            ) : (
              <button className="btn btn-outline btn-lg" onClick={() => setIsTimerRunning(false)}>
                Pause Timer
              </button>
            )}
            <button className="btn btn-success btn-lg" onClick={completeWorkout}>
              Complete Workout
            </button>
          </div>
        </div>

        {/* Workout Info */}
        <div className="workout-info">
          <div className="workout-description">
            <h3>About This Workout</h3>
            <p>{workout.description}</p>
          </div>

          <div className="workout-steps">
            <h3>Exercise Steps</h3>
            <ol>
              {workout.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlayer;
