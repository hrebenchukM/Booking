import { Footer } from "../../Components/Common/Footer/Footer";
import React, { useState } from "react";
import { HeadImage } from "../../Components/Home/HeadImg/HeadImg";
import { HeadImage2 } from "../../Components/SearchResult/HeadImg2/HeadImg";
import { Header } from "../../Components/Common/Header/Header";
import { NavS } from "../../Components/SearchResult/Nav2/Nav2";
import { SearchBar } from "../../Components/Common/Searcher/Searcher";
import { HotelList2 } from "../../Components/SearchResult/SearchCard/HotelList2";

import SearchForm from "../../Components/SearchResult/SearchForm/Filter";
import { useLocation } from "react-router-dom";
// import { Map } from "../../Components/SearchResult/Map/Map";

import "./SearchResult.css";



export  function SearchResultPage() {
  const location = useLocation();

    return (
      <div >
         <Header />
          <HeadImage2></HeadImage2>
          <SearchBar></SearchBar>
          <NavS></NavS>
    
        <div className="result-page">
    
    
        <SearchForm/>
          <div className="result-page-search-item">
          <HotelList2></HotelList2>
        
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
  