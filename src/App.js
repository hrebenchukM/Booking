import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Footer } from './Home/Footer/Footer';

import { RegBtn } from './Home/button/regBtn';
import { Info } from './Home/Info/info';
import { About } from './Home/About/About';

import { Header } from './Home/Header/Header';
import { Nav } from './Home/Nav/Nav';

// branch hotels and reviews
import { ReviewsList } from './Components/ReviewsList.js';
import { HotelsList } from './Components/HotelsList.js';
import hotelsArr from './api/hotels.json';
import reviewsArr from './api/reviews.json';
import './Components/styles.css';

// -----------------------
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">

      <header className="App-header">

      <Header></Header>

      </header>
     


      <main className="App-main">
      <Nav></Nav>

      <section className="hotels">
        <div className="container1">
          <HotelsList cardsArr={hotelsArr} />
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
      <RegBtn onRegisterClick={handleRegisterClick} /> 
  
      </main>
    
      

      <footer className="App-footer">
        <Footer></Footer>
      </footer>
      
   

      


    </div>
  );
}


export default App;
