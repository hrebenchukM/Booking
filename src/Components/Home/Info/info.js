import React from 'react';
import './info.css';
import infoArr from './Info.json';

export function Info() {
  return (
<div>
  <h2 className="info-text">{infoArr.header}</h2>
  <div className="informations-container">
  <div className={infoArr.imageClass}></div>
  <div className='info-container'>
    <div className='info-name'>
    {infoArr.paragraphs.map((paragraph, index) => (
      <div key={index}>
        <div >
          <p>{paragraph}</p>
        </div>
      </div>
    ))}
    </div>
    </div>
  </div>
</div>



    
  );
}
