import React from 'react';
import './HotelCards.css';
import hotelsArr from './hotelCards.json';
import { Link } from "react-router-dom";

export function SearchHotel  ({
  hotel,
  starsNum
}) {
  
const starsArr = [];
for (let i = 1; i <= starsNum; i++) {
    starsArr.push(i);
}
  return (
    <div className="hotel-card">
      <img src={hotel.image} alt="" className="hotel-image" />
      <div>
        <div className="hotel-description">
          <h1 className="hotel-name">{hotel.name}</h1>
          <div className='hotel-distance'>
          <div className="hotel__stars">
                {starsArr.map((_, index) => (<div key={index} className="hotel__stars-star"></div>))}
          </div>
          
          </div>
        
          <div className="hotel-distance">
          <img src='popular.png'width={'24px'}></img>
          <p  style={{color:'rgba(113, 113, 113, 1)'}}>popular</p>

          <img src='center.png'width={'24px'}></img>
          <p  style={{color:'rgba(113, 113, 113, 1)'}}>city center</p>

          <img src='comfortable.png'width={'24px'}></img>
          <p  style={{color:'rgba(113, 113, 113, 1)'}}>comfortable</p>
          </div>
        </div>
        <div className="hotel-details-container">
         <span className="hotel-things">
          airport {hotel.airportDistance} km 
          </span>
          <span className="hotel-things">
          railway station {hotel.stationDistance} km
          </span>
          <span className="hotel-things">
          see on map <img src='strelka.png' className='vector'></img>
          </span>
          <p className="hotel-details" style={{color:'rgba(113, 113, 113, 1)'}}>{hotel.description}</p>

        
       
  
           <span className="hotel-rating">
           <p>
            {hotel.rating}
          </p>
           <div  style={{color:'rgba(113, 113, 113, 1)',border:'0px',fontSize:'16px',margin:'25px'}}>
            reviews 
         <span style={{display:'block'}}> {hotel.reviews}</span>
          </div>
          </span>



        
          <span className="hotel-price">
          <div style={{ color: 'black', fontWeight:'400' }}>
            prices from
          </div>
           <div style={{ color: '#581ADB', fontWeight:'700' }}>
           {hotel.price}$
           </div>
          </span>


          <Link to={`/hotels/${hotel.id}`}>
            <div className="choose-button">
              <p>CHOOSE</p>
            </div>
          </Link>
        </div>
      </div>
      </div>
  );
};
