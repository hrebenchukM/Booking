import React from "react";
import hotelsArr from './hotels.json';
import { useParams } from "react-router-dom";
import { Link,Outlet  } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './HotelStyles2.css';
import { HotelCard } from "./HotelCard2.js";

import { Reviews } from "../Reviews/Reviews.js";
import reviewsArr from '../Reviews/reviews.json';

import{RegBtn} from '../button/regBtn.js'
import{Info} from '../Info/info.js'
import{About} from '../About/About.js'

export const HotelsList = () => (
 
  <section className="hotels">
            <div className="container1">
            <div className="hotels__list">
                {hotelsArr.map((hotel, index) => (
                    <Link key={index} to={`/hotels/${hotel.id}`}   style={{ textDecoration: 'none', color: '#007bff' }}>
                       <HotelCard
                                        imagesArr={hotel.imagesArr}
                                        starsNum={hotel.starsNum}
                                        hotelName={hotel.hotelName}
                                        cityName={hotel.cityName}
                                        countryName={hotel.countryName}
                                        distanceFromCenter={hotel.distanceFromCenter}
                                        nightCost={hotel.nightCost}
                                    />
                    </Link>
                ))}
            </div>
            </div>
        </section>

);

