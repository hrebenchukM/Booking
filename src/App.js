import React, { useState } from 'react';
import './App.css';
import { HomePage } from './Pages/Home/Home';
import { SearchResultPage } from './Pages/SearchResult/SearchResults';
import { HotelDetailsPage } from './Pages/HotelDetails/HotelDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorPage } from './Pages/Error/Error';
import { MyProfile } from './Pages/MyProfile/MyProfile';

function App() {


  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route index element={<HomePage />} />
        <Route path="/hotels" element={<SearchResultPage />} />
        <Route path="/hotels/:id" element={<HotelDetailsPage />} />
         <Route path="my_profile" element={<MyProfile/> } />
         <Route path="*" element= {<ErrorPage />} />  
      </Routes>
     
    </BrowserRouter>
  </div>
  );
}


export default App;
