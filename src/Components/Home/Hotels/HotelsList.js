import React from "react";
import hotelsArr from './hotels.json';
import { HotelCard } from "./HotelCard2.js";
import './HotelStyles2.css';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import 'swiper/css';



export const HotelsList = () => {

  return (
    <section className="hotels">
      <div className="container1">
        <div  className="hotels__list swiper-container">
        <Swiper spaceBetween={10} slidesPerView={'auto'}>
            {hotelsArr.map((hotel, index) => (
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
            {hotelsArr.map((hotel, index) => (
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
