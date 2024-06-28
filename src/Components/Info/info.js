import React from 'react';
import './info.css';
import infoArr from './Info.json';

export function Info() {
  return (
    <div>
          <h2 className="header2">{infoArr.header}</h2>
    <div className="info-container">
      <div className={infoArr.imageClass}></div>
      <div className={infoArr.textClass}>
        <div className='textinfo'>
          {infoArr.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
    </div>

  );
}
