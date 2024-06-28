import React from 'react';
import './About.css';
import AboutArr from './About.json';

export function About() {
  return (
    
    <div>
         <h2 className="header1">SAFE WITH US</h2>
     
      <div className='contAbout'>
   
        {AboutArr.map((item, index) => (
        <div className='rectangle' style={{ left: item.left }} key={index}>
          <div className='cont'>
            <img src={item.imgSrc} width={30} className={item.imgClass} alt={item.alt}></img>
            <p className='textAbout'>{item.text}</p>
          </div>
        </div>
      ))}</div>
     
    </div>
  );
}

