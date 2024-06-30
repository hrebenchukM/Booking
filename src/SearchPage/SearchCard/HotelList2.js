import React from 'react';
import HotelCards from './HotelCards';

const HotelList2 = ({ hotels }) => {
  return (
    <div className="hotel-list">
      {hotels.map(hotel => (
        <HotelCards key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList2;
