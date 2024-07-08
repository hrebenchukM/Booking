
import React, { useState } from "react";
import { Footer } from "../../Components/Common/Footer/Footer";
import { Header } from "../../Components/Common/Header/Header";
import "./HotelDetails.css";
import hotelsArr from '../../Components/HotelDetails/Hotel/hotels.json';
import Rating from "../../Components/HotelDetails/Rating/Rating";
import { Facilities } from "../../Components/HotelDetails/Facilities/Facilities";
import { Hotel } from "../../Components/HotelDetails/Hotel/Hotel";

export  function HotelDetailsPage() {
  const hotel = hotelsArr[0];
  return (
    <div>
     <Header></Header>
     <hr style={{ border: 'none', height: '1px', backgroundColor: '#DDDDDD' }} />
     <Hotel
      imagesArr={hotel.imagesArr}
      adress={hotel.adress}
      adressLink={hotel.adressLink}
      cityName={hotel.cityName}
      nightCost={hotel.nightCost}
      description={hotel.description}
      features={hotel.features}
    />
    <Rating></Rating>
    <Facilities></Facilities>
    <Footer></Footer>
    
    </div>
  );
};