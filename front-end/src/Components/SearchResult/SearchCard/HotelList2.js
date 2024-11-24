import React from 'react';

import { SearchHotel } from './HotelCards';
import hotelsArray from './hotelCards.json';

export function HotelList2 ({hotels }) {
  return (
    <div>
      {hotelsArray.map(hotel => (
        <SearchHotel key={hotel.id} hotel={hotel} starsNum={hotel.starsNum} />
      
      ))}
    </div>
  );
};


