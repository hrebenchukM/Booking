import React from 'react';
import './HotelCards.css';

const HotelCards = ({ hotel }) => {
  if (!hotel) return null; 

  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={hotel.name} className="hotel-image" />
      <div className="hotel-info">
        <h2 className="hotel-name">{hotel.name}</h2>
        <div className="hotel-rating">Rating: {hotel.rating}</div>
        <div className="hotel-reviews">{hotel.reviews} reviews</div>
        <div className="hotel-price">Prices from ${hotel.price}</div>
        <div className="hotel-distance">Airport: {hotel.airportDistance}, Station: {hotel.stationDistance}</div>
        <button className="choose-button">Choose</button>
      </div>
    </div>
  );
};

export default HotelCards;
