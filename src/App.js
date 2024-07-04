import React, { useState } from 'react';
import './App.css';
import { HomePage } from './Pages/Home/Home';
import { SearchResultPage } from './Pages/SearchResult/SearchResults';
import { HotelDetailsPage } from './Pages/HotelDetails/HotelDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorPage } from './Pages/Error/Error';
import { SecurePayment } from './Pages/SecurePayment/SecurePayment';
import { RelevantInfo } from './Pages/RelevantInfo/RelevantInfo';
import { EasyBooking } from './Pages/EasyBooking/EasyBooking';
import { Nearby } from './Components/SearchResult/Nearby';
function App() {


  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route index element={<HomePage />} />
        <Route path="/hotels" element={<SearchResultPage />} />
        <Route path="/hotels/:id" element={<HotelDetailsPage />} />
         <Route path="easy_booking" element={<EasyBooking/> } />
         <Route path="secure_payment" element={<SecurePayment />} />
         <Route path="relevant_information" element={<RelevantInfo/>} />
         <Route path="*" element= {<ErrorPage />} />  
      </Routes>


    </BrowserRouter>
  </div>
  );
}


export default App;
