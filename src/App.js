import React, { useState } from 'react';
import './App.css';
import { Footer } from './Footer/Footer.js';

import { Header } from './Header/Header.js';
import { Nav } from './Home/Nav/Nav.js';


// branch hotels and reviews


import { HotelPages } from './Home/Hotels/HotelsList.js';
import hotelsArr from './Home/Hotels/hotels.json';
import { SearchBar } from './Home/Searcher/Searcher.js';


// -----------------------

function App() {


  return (
    <div className="App">
      <header className="App-header">

        <Header></Header>
<SearchBar></SearchBar>
      </header>



      <main>
        <Nav></Nav>

        <HotelPages />
        

    
      </main>



      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}


export default App;
