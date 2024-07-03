import React from "react";
import hotelsArr from './hotels.json';
import { Link,Outlet  } from 'react-router-dom';
import './HotelStyles2.css';
import { HotelCard } from "./HotelCard2.js";

export const HotelsList = () => (
 
  <section className="hotels">
            <div className="container1">
            <div className="hotels__list">
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

