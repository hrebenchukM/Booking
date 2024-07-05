import React, { useEffect, useState } from 'react';
import './Facilities.css';
import facilitiesData from '../../assets/facilities.json';

const Facilities = () => {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    setFacilities(facilitiesData);
  }, []);

  return (
    <div className="Facilities">
      <h2>FACILITIES</h2>
      <div className="facilities-grid">
        {facilities.map((category, index) => (
          <div className="facilities-column" key={index}>
            <h3>
              <img src={category.icon} alt={`${category.title} Icon`} className="icon" /> {category.title}
            </h3>
            <ul>
              {category.items.map((item, idx) => (
                <li key={idx}>
                  <img src="/assets/icons/check.png" alt="Check Icon" className="check-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
