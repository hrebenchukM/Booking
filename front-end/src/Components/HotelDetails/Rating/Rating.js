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
      <div className='rating-title'>GUEST REVIEWS</div>
      <div className="ratings-grid">
        {ratingsData.map((rating, index) => {

       
          return (
            <div className="rating-item" key={index}>
              <div className="circle">
                <svg width="80" height="80">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="#581ADB"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 36} //длина и интервалы штрихов и пробелов обводки
                    strokeDashoffset={2 * Math.PI * 36 - (rating.score / 10) * 2 * Math.PI * 36}//смещение штрихов обводки-опр.часть
                    strokeLinecap="round"//форма концов линии обводки, закругленнаяф
                  />
                </svg>
                <span className="score">{rating.score}</span>
              </div>
              <div className="label">{rating.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rating;
