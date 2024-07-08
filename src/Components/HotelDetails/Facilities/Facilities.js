import React, { useEffect, useState } from 'react';
import facilitiesData from './Facilities.json';
import './Fac.css';

export function Facilities() {
  const [facilities, setFacilities] = useState([]);
  const [showSpecCategories, setShowSpecCategories] = useState(false);

  useEffect(() => {
    setFacilities(facilitiesData);
  }, []);

  
  const showAll = () => {
    setShowSpecCategories(!showSpecCategories);
  };

  return (
    <div>
      <h2 className='facilities-title'>FACILITIES</h2>
      <div className="facilities-container">
        {facilities.map((category, index) => (
          (!showSpecCategories && ['General', 'Parking', 'Languages spoken', 'Cleaning services', 'Reception services', 'Bathroom'].includes(category.title)) || (
            <div className="facilities-texts" key={index}>
              <div className='category-title'>
                <img src={`/HotelDetails/Facilities/${category.icon}`} className="icon" alt={`${category.title} icon`} />
                {category.title}
              </div>
              <div className='facilities-text'>
                {category.items.map((item, idx) => (
                  <div key={idx}>
                    <img src="/HotelDetails/Facilities/check.png" alt="Check Icon" className="check-icon" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
      {!showSpecCategories && (
        <button className="show-more-button" onClick={showAll}>
          Show all facilities
        </button>
      )}
    </div>
  );
}
