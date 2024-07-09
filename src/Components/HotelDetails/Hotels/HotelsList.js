import React from "react";
import hotelsArr from '../../Home/Hotels/hotels.json';
import { HotelCard } from "../../Home/Hotels/HotelCard2";
import '../../Home/Hotels/HotelStyles2.css';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import 'swiper/css';



export const HotelsList3 = () => {
    const limitedHotels = hotelsArr.slice(0, 4);
  return (
    <section className="hotels">
      <div className="container1">
        <div  className="hotels__list swiper-container">
        <Swiper spaceBetween={10} slidesPerView={'auto'}>
            {limitedHotels.map((hotel, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <HotelCard
                  id={hotel.id}
                  imagesArr={hotel.imagesArr}
                  starsNum={hotel.starsNum}
                  hotelName={hotel.hotelName}
                  cityName={hotel.cityName}
                  countryName={hotel.countryName}
                  distanceFromCenter={hotel.distanceFromCenter}
                  nightCost={hotel.nightCost}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
          <div className="hotels__list hotels__list--desktop">
            {limitedHotels.map((hotel, index) => (
              <HotelCard
                key={index}
                id={hotel.id}
                imagesArr={hotel.imagesArr}
                starsNum={hotel.starsNum}
                hotelName={hotel.hotelName}
                cityName={hotel.cityName}
                countryName={hotel.countryName}
                distanceFromCenter={hotel.distanceFromCenter}
                nightCost={hotel.nightCost}
              />
            ))}
          </div>
      </div>
    </section>
  );
};
