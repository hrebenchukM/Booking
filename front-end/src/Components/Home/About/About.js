import React from 'react';
import './About.css';
import AboutArr from './About.json';

export function About() {
  return (
    <div className="safe-container">
      <p className="safe-text">SAFE WITH US</p>
      <div className="rectangles-container">
        {AboutArr.map((item, index) => (
          <div className="rectangle-container" key={index}>
            <div className="rectangle-img">
              <img src={`/Home/About/${item.imgSrc}`} width={30} className={item.imgClass} alt={item.alt} />
              <p className="rectangle-name">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
