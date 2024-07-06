import React from 'react';
import './Rating.css';

const ratingsData = [
  { score: 9.8, label: 'FACILITIES' },
  { score: 7.9, label: 'STAFF' },
  { score: 9.2, label: 'CLEANLINESS' },
  { score: 9.5, label: 'COMFORT' },
  { score: 9.2, label: 'LOCATION' },
  { score: 9.8, label: 'VALUE FOR MONEY' },
];

const Rating = () => {
  return (
    <div className="rating-container">
      <h2>GUEST REVIEWS</h2>
      <div className="ratings-grid">
        {ratingsData.map((rating, index) => (
          <div className="rating-item" key={index}>
            <div className="circle">
              <div className="circle-inner">
                <span className="score">{rating.score}</span>
              </div>
            </div>
            <div className="label">{rating.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;
