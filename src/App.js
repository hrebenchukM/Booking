import React, { useState } from 'react';
import './App.css';
import { HomePage } from './Pages/Home/Home';
import { SearchResultPage } from './Pages/SearchResult/SearchResults';
import { HotelDetailsPage } from './Pages/HotelDetails/HotelDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route index element={<HomePage />} />
        <Route path="/hotels" element={<SearchResultPage />} />
        <Route path="/hotels/:id" element={<HotelDetailsPage />} />
        {/* <Route path="*" element= {<NotFound />} />   */}
      </Routes>


    </BrowserRouter>
  </div>
  );
}


export default App;
