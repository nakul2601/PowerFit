import React from 'react';
import { useNavigate } from 'react-router-dom';
import TrainerCard from '../components/TrainerCard';

const Trainers = () => {
  const navigate = useNavigate();

  const trainers = [
    {
      name: 'Sarah Johnson',
      routeName: 'sarah-johnson',
      specialty: 'Strength & Conditioning',
      experience: '8 years',
      certification: 'NASM-CPT',
      image: '👩‍🦰',
      bio: 'Specializes in strength training and athletic performance enhancement',
      trainingStyle: 'High-intensity strength training with focus on progressive overload',
      expertise: ['Strength Training', 'Athletic Performance', 'Powerlifting', 'Functional Fitness']
    },
    {
      name: 'Mike Chen',
      routeName: 'mike-chen',
      specialty: 'CrossFit & HIIT',
      experience: '6 years',
      certification: 'ACE-CPT',
      image: '👨‍🦱',
      bio: 'Expert in high-intensity training and functional fitness',
      trainingStyle: 'Dynamic CrossFit workouts with metabolic conditioning',
      expertise: ['CrossFit', 'HIIT', 'Functional Training', 'Olympic Lifting']
    },
    {
      name: 'Emily Davis',
      routeName: 'emily-davis',
      specialty: 'Yoga & Flexibility',
      experience: '10 years',
      certification: 'RYT-500',
      image: '👩‍🦳',
      bio: 'Certified yoga instructor focusing on flexibility and mindfulness',
      trainingStyle: 'Mind-body approach with emphasis on proper alignment',
      expertise: ['Hatha Yoga', 'Vinyasa Flow', 'Meditation', 'Flexibility Training']
    },
    {
      name: 'James Wilson',
      routeName: 'james-wilson',
      specialty: 'Bodybuilding',
      experience: '12 years',
      certification: 'IFBB Pro',
      image: '👨‍🦲',
      bio: 'Professional bodybuilder with extensive competition experience',
      trainingStyle: 'Classic bodybuilding with modern periodization',
      expertise: ['Bodybuilding', 'Competition Prep', 'Muscle Hypertrophy', 'Contest Posing']
    },
    {
      name: 'Lisa Martinez',
      routeName: 'lisa-martinez',
      specialty: 'Nutrition & Weight Loss',
      experience: '7 years',
      certification: 'CNC',
      image: '👩‍🦱',
      bio: 'Nutrition coach specializing in sustainable weight loss',
      trainingStyle: 'Holistic approach combining nutrition and exercise',
      expertise: ['Weight Loss', 'Nutrition Coaching', 'Meal Planning', 'Lifestyle Coaching']
    },
    {
      name: 'David Kim',
      routeName: 'david-kim',
      specialty: 'Rehabilitation',
      experience: '9 years',
      certification: 'DPT',
      image: '👨‍🦰',
      bio: 'Physical therapist focused on injury prevention and rehabilitation',
      trainingStyle: 'Evidence-based rehabilitation with progressive loading',
      expertise: ['Physical Therapy', 'Injury Prevention', 'Post-Rehab Fitness', 'Corrective Exercise']
    }
  ];

  return (
    <div className="trainers">
      <div className="container">
        <h1>Our Expert Trainers</h1>
        <p>Learn from the best - our certified trainers are here to help you achieve your fitness goals</p>
        
        <div className="trainers-grid">
          {trainers.map((trainer, index) => (
            <TrainerCard key={index} trainer={trainer} />
          ))}
        </div>

        <section className="trainer-benefits">
          <h2>Why Train With Our Experts?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Personalized Approach</h3>
              <p>Customized plans based on your goals, fitness level, and preferences.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📊</div>
              <h3>Progress Tracking</h3>
              <p>Regular assessments and adjustments to ensure continuous improvement</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔬</div>
              <h3>Scientific Methods</h3>
              <p>Evidence-based training techniques for safe and effective results</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💪</div>
              <h3>Motivation & Support</h3>
              <p>Constant encouragement and accountability to keep you on track</p>
            </div>
          </div>
        </section>

        <section className="booking-section">
          <h2>Ready to Start Training?</h2>
          <p>Take membership of our gym and start your fitness journey today.</p>
          <button className="btn btn-primary" onClick={() => navigate('/join')}>Join</button>
        </section>
      </div>
    </div>
  );
};

export default Trainers;
