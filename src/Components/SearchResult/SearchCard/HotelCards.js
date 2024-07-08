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
    
      <img src={`/SearchResult/HotelList2/${hotel.image}`} alt="" className="hotel-image" />


      <div>
        <div className="hotel-description">
          <h1 className="hotel-name">{hotel.name}</h1>
          <div className='hotel-distance'>
          <div className="hotel__stars_search">
                {starsArr.map((_, index) => (<div key={index} className="hotel__stars_search-star"></div>))}
          </div>
          
          </div>
        
          <div className="hotel-distance">
            
         <div className='pimg'>
          <img src={`/SearchResult/HotelList2/popular.png`} width="24px" alt="Popular" />

          <p  style={{color:'rgba(113, 113, 113, 1)'}}>popular</p>
          </div>

          <div className='pimg'>
          <img src={`/SearchResult/HotelList2/center.png`} width="24px" alt="Popular" />

          <p  style={{color:'rgba(113, 113, 113, 1)'}}>city center</p>
          </div>

          <div className='pimg'>
          <img src={`/SearchResult/HotelList2/comfortable.png`} width="24px" alt="Popular" />

          <p  style={{color:'rgba(113, 113, 113, 1)'}}>comfortable</p>
          </div>

          </div>
        </div>
        <div className="hotel-details-container">
         <span className="hotel-things">
          airport {hotel.airportDistance} km ,
       
          railway station {hotel.stationDistance} km
          </span>
          <span className="hotel-things">
          see on map 
         
          <img src={`/SearchResult/HotelList2/strelka.png`} className='vector' />

          </span>
          <p className="hotel-details" style={{color:'rgba(113, 113, 113, 1)'}}>{hotel.description}</p>

        
       
  
           <span className="hotel-rating">
           <p>
            {hotel.rating}
          </p>
           <div>
            reviews 
            <span style={{display:'block'}}> {hotel.reviews}</span>
          </div>
          </span>



        
           <span className="hotel-price">
           <div className="price-label">
           prices from
           </div>
            <div className="price-value">
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
