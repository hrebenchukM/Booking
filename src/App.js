import React, { useState } from 'react';
import './App.css';
import { Footer } from './Components/Footer/Footer.js';

import { Header } from './Header/Header.js';
import { Nav } from './Components/Nav/Nav.js';


import { HotelPages } from './Components/Hotels/HotelsList.js';
import hotelsArr from './Components/Hotels/hotels.json';
import { SearchBar } from './Searcher/Searcher.js';

// import { NavS } from './SearchPage/Nav.js';
// -----------------------

function App() {


  return (
    <div className="App">
      {/* <header className="App-header">
        <Header></Header>
        <SearchBar></SearchBar>
      </header> */}

      {/* <main>
        <Nav></Nav>
        {/* <NavS></NavS>
        <HotelPages />
      </main>  */}
{/* 
      <footer>
      <Footer></Footer>
      </footer> */}
    </div>
  );
}


export default App;
