import React, { useEffect, useState } from 'react';
import './Nearby.css';

import nearbyData from './NearBy.json';


export function NearBy() {
  const [nearBy, setNearBy] = useState([]);
  const [showSpecCategories, setShowSpecCategories] = useState(false);

  useEffect(() => {
    setNearBy(nearBy);
  }, []);

  
  const showAll = () => {
    setShowSpecCategories(!showSpecCategories);
  };

  return (
    <div>
      <h2 className='nearby-title'>WHAT'S NEARBY</h2>
      <div className="nearby-container">
        {nearbyData.map((category, index) => (
            <div className="nearby-texts" key={index}>
              <div className='category-title-nearby'>
                <img src={`/HotelDetails/Nearby/${category.icon}`} className="icon" alt={`${category.title} icon`} />
                {category.title}
              </div>
              <div className='nearby-text'>
                {category.items.map((item, idx) => (
                  <div key={idx}>
                    <div className="check-icon">
                      
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          
        ))}
      </div>
      {!showSpecCategories && (
        <button className="show-more-button" onClick={showAll}>
          Show all 
        </button>
      )}
    </div>
  );
}

// const Nearby = () => {
//   return (
//     <div className="Nearby">
//       <h2>WHAT'S NEARBY</h2>
//       <div className="nearby-grid">
//         <div className="nearby-column">
//           <h3><img src="/SearchResult/Nearby/Attractions.png" alt="Attractions Icon" className="icon" /> Attractions</h3>
//           <ul>
//             <li><Link to="/attraction/1">Park Yunist - 2 km</Link></li>
//             <li><Link to="/attraction/2">Сквер Павла Шклярука - 1 km</Link></li>
//             <li><Link to="/attraction/3">Сквер героичной обороны Одеси - 1 km</Link></li>
//             <li><Link to="/attraction/4">Міжрейсова база моряків - 5 km</Link></li>
//             <li><Link to="/attraction/5">Школа-интернат № 91 для глухонимих дітей - 12 km</Link></li>
//             <li><Link to="/attraction/6">Український науковий центр екології моря - 11 km</Link></li>
//             <li><Link to="/attraction/7">Сквер героїв-летчиків - 4 km</Link></li>
//             <li><Link to="/attraction/8">Скелердом - 2 km</Link></li>
//             <li><Link to="/attraction/9">Стадион ОНЮА - 2 km</Link></li>
//             <li><Link to="/attraction/10">Botanical Garden - 2 km</Link></li>
//           </ul>
//         </div>
//         <div className="nearby-column">
//           <h3><img src="/SearchResult/Nearby/Attractions2.png" alt="Cafes Icon" className="icon" />Attractions</h3>
//           <ul>
//             <li><Link to="/attraction/11">Cafe/bar Бекерай SDOBA - 2 km</Link></li>
//             <li><Link to="/attraction/12">Restaurant Shipinat - 1 km</Link></li>
//             <li><Link to="/attraction/13">Restaurant Стронг Хаус - 2 km</Link></li>
//           </ul>
//           <h3><img src="/SearchResult/Nearby/transport.png" alt="Public transport Icon" className="icon" />Public transport</h3>
//           <ul>
//             <li><Link to="/transport/1">Train Odessa-Mala - 16 km</Link></li>
//             <li><Link to="/transport/2">Train Odessa Train Station - 11 km</Link></li>
//           </ul>
//         </div>
//         <div className="nearby-column">
//           <h3><img src="/SearchResult/Nearby/beaches.png" alt="Beaches Icon" className="icon" />Beaches in the neighbourhood</h3>
//           <ul>
//             <li><Link to="/beach/1">Arkadia Beach - 9 km</Link></li>
//             <li><Link to="/beach/2">Station Velykoho Fontanu Beach - 8 km</Link></li>
//             <li><Link to="/beach/3">Chayka - 12 km</Link></li>
//             <li><Link to="/beach/4">SBU beach - 18 km</Link></li>
//             <li><Link to="/beach/5">Malomu Fontani Beach - 19 km</Link></li>
//           </ul>
//           <h3><img src="/SearchResult/Nearby/transport2.png" alt="Airport Icon" className="icon" />Public transport</h3>
//           <ul>
//             <li><Link to="/transport/3">Kyiv International Airport - 16 km</Link></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nearby;
