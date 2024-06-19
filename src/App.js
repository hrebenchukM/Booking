import React, { useState } from 'react';
import './App.css';
import { Footer } from './Footer/Footer.js';

import { Header } from './Header/Header.js';
import { Nav } from './Home/Nav/Nav.js';


// branch hotels and reviews


import { HotelPages } from './Home/Hotels/HotelsList.js';
import hotelsArr from './Home/Hotels/hotels.json';


// -----------------------

function App() {


  return (
    <div className="App">
      <header className="App-header">

        <Header></Header>

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
