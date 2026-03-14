import React from 'react';
import { useNavigate } from 'react-router-dom';

const TrainerCard = ({ trainer }) => {
  const navigate = useNavigate();

  return (
    <div className="trainer-card">
      <div className="trainer-image">
        <div className="trainer-avatar">{trainer.image}</div>
      </div>
      
      <div className="trainer-info">
        <h3 className="trainer-name">{trainer.name}</h3>
        <div className="trainer-specialty">{trainer.specialty}</div>
        
        <div className="trainer-details">
          <div className="detail-item">
            <span className="detail-label">Experience:</span>
            <span className="detail-value">{trainer.experience}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Certification:</span>
            <span className="detail-value">{trainer.certification}</span>
          </div>
        </div>
        
        <p className="trainer-bio">{trainer.bio}</p>
        
        <div className="trainer-actions">
          <button 
            className="btn btn-outline btn-sm" 
            onClick={() => navigate(`/trainer/${trainer.routeName}`)}
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
