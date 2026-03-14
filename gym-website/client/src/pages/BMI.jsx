import React, { useState } from 'react';

const BMI = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    
    if (!weight || !height) return;
    
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);
    
    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setCategory('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setCategory('Overweight');
    } else {
      setCategory('Obese');
    }
  };

  const resetForm = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setCategory('');
  };

  return (
    <div className="bmi">
      <div className="container">
        <div className="page-header">
          <h1>BMI Calculator</h1>
          <p>Calculate your Body Mass Index to assess your health status</p>
        </div>

        <div className="bmi-content">
          <div className="bmi-calculator">
            <form onSubmit={calculateBMI} className="bmi-form">
              <div className="form-group">
                <label htmlFor="weight">Weight (kg)</label>
                <input
                  type="number"
                  id="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter your weight"
                  step="0.1"
                  min="1"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="height">Height (cm)</label>
                <input
                  type="number"
                  id="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Enter your height"
                  min="1"
                  required
                />
              </div>
              
              <div className="form-buttons">
                <button type="submit" className="btn btn-primary">Calculate BMI</button>
                <button type="button" className="btn btn-outline" onClick={resetForm}>Reset</button>
              </div>
            </form>

            {bmi && (
              <div className="bmi-result">
                <h3>Your BMI Result</h3>
                <div className="bmi-value">{bmi}</div>
                <div className={`bmi-category ${category.toLowerCase().replace(' ', '-')}`}>
                  {category}
                </div>
              </div>
            )}
          </div>

          <div className="bmi-info">
            <h3>BMI Categories</h3>
            <div className="bmi-categories">
              <div className="category-item underweight">
                <span className="range">&lt; 18.5</span>
                <span className="label">Underweight</span>
              </div>
              <div className="category-item normal">
                <span className="range">18.5 - 24.9</span>
                <span className="label">Normal weight</span>
              </div>
              <div className="category-item overweight">
                <span className="range">25 - 29.9</span>
                <span className="label">Overweight</span>
              </div>
              <div className="category-item obese">
                <span className="range">≥ 30</span>
                <span className="label">Obese</span>
              </div>
            </div>

            <div className="bmi-tips">
              <h4>Health Tips</h4>
              {bmi && (
                <div className="tip-content">
                  {category === 'Underweight' && (
                    <p>Consider consulting with a nutritionist to develop a healthy weight gain plan. Focus on nutrient-dense foods and strength training exercises.</p>
                  )}
                  {category === 'Normal weight' && (
                    <p>Great job! Maintain your healthy weight with regular exercise and a balanced diet. Continue your current fitness routine.</p>
                  )}
                  {category === 'Overweight' && (
                    <p>Consider incorporating more cardiovascular exercises and reducing calorie intake. Consult with our trainers for a personalized weight loss plan.</p>
                  )}
                  {category === 'Obese' && (
                    <p>We recommend consulting with healthcare professionals and our certified trainers to create a safe and effective weight management plan.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <section className="bmi-disclaimer">
          <h3>Important Note</h3>
          <p>BMI is a screening tool and not a diagnostic measure. It doesn't account for muscle mass, bone density, or overall body composition. For a comprehensive health assessment, consult with healthcare professionals.</p>
        </section>
      </div>
    </div>
  );
};

export default BMI;
