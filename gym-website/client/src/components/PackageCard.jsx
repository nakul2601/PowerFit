import React from 'react';

const PackageCard = ({ package: pkg }) => {
  return (
    <div className={`package-card ${pkg.popular ? 'popular' : ''}`}>
      {pkg.popular && (
        <div className="popular-badge">
          <span>Most Popular</span>
        </div>
      )}
      
      <div className="package-header">
        <h3 className="package-name">{pkg.name}</h3>
        <div className="package-price">
          <span className="price">{pkg.price}</span>
          <span className="period">{pkg.period}</span>
        </div>
      </div>

      <div className="package-features">
        <ul className="features-list">
          {pkg.features.map((feature, index) => (
            <li key={index} className="feature-item">
              <span className="feature-icon">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="package-action">
        <button className={`btn ${pkg.popular ? 'btn-primary' : 'btn-outline'} btn-full`}>
          Choose {pkg.name}
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
