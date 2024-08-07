import React, { useState } from "react";
import { Footer } from "../../Components/Common/Footer/Footer";
import { Header } from "../../Components/Common/Header/Header";
import "./HotelDetails.css";
import hotelsArr from '../../Components/HotelDetails/Hotel/hotels.json';
import Rating from "../../Components/HotelDetails/Rating/Rating";
import { Facilities } from "../../Components/HotelDetails/Facilities/Facilities";
import { Hotel } from "../../Components/HotelDetails/Hotel/Hotel";
import { NearBy } from "../../Components/HotelDetails/Nearby/Nearby";
import { Important } from "../../Components/HotelDetails/Important/Important";
import { ReviewsList } from "../../Components/HotelDetails/Reviews/ReviewsList";
import FAQ from "../../Components/HotelDetails/Faqs/FAQ";
import { HotelsList3 } from "../../Components/HotelDetails/Hotels/HotelsList";
import { RoomsList } from "../../Components/HotelDetails/RoomList/RoomList";
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
      starsNum={hotel.starsNum}
      />
    <Rating></Rating>
    <Facilities></Facilities>
    <Important></Important>
    <RoomsList></RoomsList>
    <NearBy></NearBy>
    <ReviewsList></ReviewsList>
    <FAQ></FAQ>
    <HotelsList3></HotelsList3>
    <Footer></Footer>
    
    </div>
  );
};