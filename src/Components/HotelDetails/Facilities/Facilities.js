import React, { useEffect, useState } from 'react';
import facilitiesData from './Facilities.json';
import './Fac.css';

export function Facilities() {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    setFacilities(facilitiesData);
  }, []);

  return (
    <div>
      <h2 className='facilities-title'>FACILITIES</h2>
      <div className="facilities-container">
        {facilities.map((category, index) => (
          <div className="facilities-texts" key={index}>
            <p className='category-title'>
              <img src={`/HotelDetails/Facilities/${category.icon}`} className="icon"/>
              {category.title}
            </p>
            <div className='facilities-text'>
              {category.items.map((item, idx) => (
                <p key={idx}>
                  <img src="/HotelDetails/Facilities/check.png" alt="Check Icon" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
