import React from 'react';
import './Important.css';
import ImportantArr from './Important.json';

export function Important() {
  return (
    <div className="important-container">
      <p className="important-text">IMPORTANT INFORMATION</p>
      <div className="rectangles-important-container">
        {ImportantArr.map((item, index) => (
          <div className="rectangle-important-container" key={index}>
            <div className="rectangle-important-img">
              <img src={`/HotelDetails/Important/${item.imgSrc}`} width={30} className={item.imgClass} alt={item.alt} />
              <p className="rectangle-important-name">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
