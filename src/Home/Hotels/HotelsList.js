import React from "react";
import hotelsArr from '../Hotels/hotels.json';
import { useParams } from "react-router-dom";
import { Link,Outlet  } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './HotelStyles2.css';
import { HotelCard } from "./HotelCard2.js";



export const MainPageHotels = () => (
    <>
  <nav  >
  <section className="hotels">
            <div className="container1">
            <div className="hotels__list">
                {hotelsArr.map((hotel, index) => (
                    <Link key={index} to={`/hotel/${hotel.id}`}   style={{ textDecoration: 'none', color: '#007bff' }}>
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
  </nav>
  
  
  </>

);


export function Hotel() {
    const { hotelId } = useParams();
    return (
      <div>
        <h2>Детали отеля {hotelId}</h2>
      </div>
    );
  }

  
export function NotFound(){
    return(
        <div></div>
) ;
}


export function HotelPages (props)
 {
  return (
<BrowserRouter>
<Routes>
      <Route path="/" element={<MainPageHotels />} />
      <Route path="hotel/:hotelId" element={<Hotel />} />
      <Route path="*" element={<NotFound />} />
</Routes>
</BrowserRouter>


  );
}