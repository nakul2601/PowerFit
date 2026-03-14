import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TrainerProfile = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [trainer, setTrainer] = useState(null);
  const [loading, setLoading] = useState(true);

  // Comprehensive trainer data
  const trainerData = {
    'sarah-johnson': {
      name: 'Sarah Johnson',
      specialization: 'Strength & Conditioning',
      experience: '8 years',
      certification: 'NASM-CPT',
      image: '👩‍🦰',
      bio: 'Sarah Johnson is a certified strength and conditioning specialist with over 8 years of experience in athletic performance enhancement. She has worked with professional athletes and fitness enthusiasts alike, helping them achieve their strength goals through scientifically-backed training methods.',
      trainingStyle: 'High-intensity strength training with focus on progressive overload and periodization. Sarah believes in building functional strength that translates to real-world performance.',
      expertise: ['Strength Training', 'Athletic Performance', 'Powerlifting', 'Functional Fitness', 'Sports Conditioning'],
      achievements: [
        'Trained over 200 athletes for competitive sports',
        'NSM Performance Enhancement Specialist',
        'Former Division 1 Strength Coach',
        'Published author on strength training methodologies'
      ],
      philosophy: 'Strength is not just about lifting heavy weights; it\'s about building a foundation that supports all aspects of physical performance and daily life.'
    },
    'mike-chen': {
      name: 'Mike Chen',
      specialization: 'CrossFit & HIIT',
      experience: '6 years',
      certification: 'ACE-CPT',
      image: '👨‍🦱',
      bio: 'Mike Chen is a dynamic fitness professional specializing in CrossFit and High-Intensity Interval Training. With 6 years of experience, he has helped countless clients transform their fitness levels through challenging yet rewarding workout programs.',
      trainingStyle: 'Dynamic CrossFit workouts with metabolic conditioning. Mike\'s sessions are designed to push limits while maintaining proper form and safety.',
      expertise: ['CrossFit', 'HIIT', 'Functional Training', 'Olympic Lifting', 'Gymnastics'],
      achievements: [
        'CrossFit Level 2 Trainer',
        'Regional CrossFit Competitor',
        'HIIT Workshop Instructor',
        '100+ client success stories'
      ],
      philosophy: 'The only bad workout is the one that didn\'t happen. Every day is an opportunity to become stronger, faster, and better than yesterday.'
    },
    'emily-davis': {
      name: 'Emily Davis',
      specialization: 'Yoga & Flexibility',
      experience: '10 years',
      certification: 'RYT-500',
      image: '👩‍🦳',
      bio: 'Emily Davis is a registered yoga teacher with 500 hours of training and a decade of experience in helping students find balance, flexibility, and mindfulness through the practice of yoga. Her approach combines traditional yoga wisdom with modern understanding of anatomy and movement.',
      trainingStyle: 'Mind-body approach with emphasis on proper alignment and breath awareness. Emily creates a safe, nurturing environment for students of all levels.',
      expertise: ['Hatha Yoga', 'Vinyasa Flow', 'Meditation', 'Flexibility Training', 'Yin Yoga'],
      achievements: [
        'RYT-500 Certified Instructor',
        'Yoga Alliance Continuing Education Provider',
        'Meditation and Mindfulness Coach',
        'Led international yoga retreats'
      ],
      philosophy: 'Yoga is not about touching your toes; it\'s about what you learn on the way down. The mat is a place where we can explore our edges and find our center.'
    },
    'james-wilson': {
      name: 'James Wilson',
      specialization: 'Bodybuilding',
      experience: '12 years',
      certification: 'IFBB Pro',
      image: '👨‍🦲',
      bio: 'James Wilson is an IFBB Professional bodybuilder with 12 years of competitive experience. His expertise extends beyond competition to helping individuals achieve their aesthetic and strength goals through proven bodybuilding principles.',
      trainingStyle: 'Classic bodybuilding with modern periodization. James combines old-school fundamentals with cutting-edge sports science for optimal results.',
      expertise: ['Bodybuilding', 'Competition Prep', 'Muscle Hypertrophy', 'Contest Posing', 'Nutrition Coaching'],
      achievements: [
        'IFBB Professional League Member',
        'Multiple competition titles',
        'Bodybuilding nutrition specialist',
        'Trained 50+ competition athletes'
      ],
      philosophy: 'Bodybuilding is the art of developing the human body to its aesthetic potential through proper nutrition, training, and recovery. It\'s a marathon, not a sprint.'
    },
    'lisa-martinez': {
      name: 'Lisa Martinez',
      specialization: 'Nutrition & Weight Loss',
      experience: '7 years',
      certification: 'CNC',
      image: '👩‍🦱',
      bio: 'Lisa Martinez is a certified nutrition coach with 7 years of experience in helping clients achieve sustainable weight loss and develop healthy relationships with food. Her approach combines nutritional science with behavioral psychology for lasting results.',
      trainingStyle: 'Holistic approach combining nutrition education, exercise programming, and lifestyle coaching. Lisa focuses on creating sustainable habits rather than quick fixes.',
      expertise: ['Weight Loss', 'Nutrition Coaching', 'Meal Planning', 'Lifestyle Coaching', 'Behavioral Change'],
      achievements: [
        'Certified Nutrition Coach (CNC)',
        'Helped clients lose over 2,000 pounds combined',
        'Developed proprietary nutrition program',
        'Corporate wellness program consultant'
      ],
      philosophy: 'Sustainable weight loss is not about restriction; it\'s about creating a lifestyle that nourishes your body and supports your goals without sacrificing joy.'
    },
    'david-kim': {
      name: 'David Kim',
      specialization: 'Rehabilitation',
      experience: '9 years',
      certification: 'DPT',
      image: '👨‍🦰',
      bio: 'Dr. David Kim is a Doctor of Physical Therapy with 9 years of experience in injury rehabilitation and prevention. His unique background allows him to bridge the gap between clinical rehabilitation and fitness performance.',
      trainingStyle: 'Evidence-based rehabilitation with progressive loading. David\'s approach ensures safe return to activity while building resilience against future injuries.',
      expertise: ['Physical Therapy', 'Injury Prevention', 'Post-Rehab Fitness', 'Corrective Exercise', 'Movement Screening'],
      achievements: [
        'Doctor of Physical Therapy (DPT)',
        'Certified Strength and Conditioning Specialist',
        'Published research on injury prevention',
        'Worked with professional sports teams'
      ],
      philosophy: 'Movement is medicine. The key to long-term health and performance is understanding how your body moves and ensuring it moves well.'
    }
  };

  useEffect(() => {
    // Simulate loading and find trainer
    const timer = setTimeout(() => {
      const foundTrainer = trainerData[name];
      setTrainer(foundTrainer);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [name]);

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!trainer) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h2>Trainer Not Found</h2>
        <p>The trainer you're looking for doesn't exist.</p>
        <button className="btn btn-primary" onClick={() => navigate('/trainers')}>
          Back to Trainers
        </button>
      </div>
    );
  }

  return (
    <div className="trainer-profile">
      {/* Breadcrumb Navigation */}
      <div className="container">
        <nav className="breadcrumb">
          <div className="breadcrumb-item">
            <a href="/" className="breadcrumb-link">Home</a>
          </div>
          <div className="breadcrumb-item">
            <a href="/trainers" className="breadcrumb-link">Trainers</a>
          </div>
          <div className="breadcrumb-item">
            <span className="breadcrumb-active">{trainer.name}</span>
          </div>
        </nav>
        
        <a href="/trainers" className="back-button">
          ← Back to Trainers
        </a>
      </div>

      {/* Trainer Hero Section */}
      <section className="trainer-hero">
        <div className="container">
          <div className="trainer-hero-content">
            <div className="trainer-avatar-large">
              {trainer.image}
            </div>
            <div className="trainer-hero-info">
              <h1>{trainer.name}</h1>
              <div className="trainer-meta">
                <div className="meta-item">
                  <span className="meta-icon">🎯</span>
                  <span>{trainer.specialization}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">⏰</span>
                  <span>{trainer.experience}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">🏆</span>
                  <span>{trainer.certification}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <h2>About {trainer.name}</h2>
            <p>Learn more about {trainer.name.split(' ')[0]}\'s background and approach</p>
          </div>
          
          <div className="about-content">
            <div className="trainer-bio">
              <h3>Professional Background</h3>
              <p>{trainer.bio}</p>
            </div>
            
            <div className="training-philosophy">
              <h3>Training Philosophy</h3>
              <p>{trainer.philosophy}</p>
            </div>
            
            <div className="training-style">
              <h3>Training Style</h3>
              <p>{trainer.trainingStyle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section">
        <div className="container">
          <div className="section-header">
            <h2>Areas of Expertise</h2>
            <p>{trainer.name.split(' ')[0]}\'s specialized skills and knowledge</p>
          </div>
          
          <div className="expertise-grid">
            {trainer.expertise.map((skill, index) => (
              <div key={index} className="expertise-card">
                <div className="expertise-icon">💪</div>
                <h4>{skill}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="container">
          <div className="section-header">
            <h2>Achievements & Qualifications</h2>
            <p>Professional accomplishments and credentials</p>
          </div>
          
          <div className="achievements-list">
            {trainer.achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                <div className="achievement-icon">🏅</div>
                <p>{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Train with {trainer.name.split(' ')[0]}?</h2>
            <p>Take the first step towards achieving your fitness goals with expert guidance</p>
            <div className="cta-actions">
              <button className="btn btn-outline" onClick={() => navigate('/trainers')}>
                View Other Trainers
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainerProfile;
