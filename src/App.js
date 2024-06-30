import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Footer } from './Footer/Footer.js';

//import { RegBtn } from './Home/button/regBtn';
//import { Info } from './Home/Info/info';
//import { About } from './Home/About/About';

import { Header } from './Header/Header.js';
//import { Nav } from './Home/Nav/Nav';

import HotelCards from './SearchPage/HotelCards.js';
import HotelList2 from './SearchPage/HotelList2';

// branch hotels and reviews
//import { ReviewsList } from './Searcher/Searcher.js';
//import { HotelPages } from './Home/Hotels/HotelsList.js';
//import hotelsArr from './Home/Hotels/hotels.json';
//import reviewsArr from './Home/Reviews/reviews.json';


// -----------------------

function App() {
  
  return (
    <div className="App">
      <header className="App-header">

      <Header></Header>

      </header>
     


      <main>
      {/* <Nav></Nav>
      
      <section className="hotels">
        <div className="container1">
          <HotelPages cardsArr={hotelsArr} />
        </div>
      </section>


      
      <section className="reviews">
        <div className="container1">
          <h3 className="reviews__title">reviews</h3>
          <ReviewsList reviewsArr={reviewsArr} />
        </div>
      </section>

      <About/>
      <Info />
      <RegBtn  />  */}
      <HotelList2 hotels={hotels} />
  
      </main>
    
      

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}


export default App;
