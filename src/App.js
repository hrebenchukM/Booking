import React, { useState } from 'react';
import './App.css';
import { Footer } from './Footer/Footer.js';

import { RegBtn } from './Home/button/regBtn.js';
import { Info } from './Home/Info/info.js';
import { About } from './Home/About/About.js';

import { Header } from './Header/Header.js';
import { Nav } from './Home/Nav/Nav.js';


// branch hotels and reviews
import { Reviews } from './Home/Reviews/Reviews.js';

import { HotelPages } from './Home/Hotels/HotelsList.js';
import hotelsArr from './Home/Hotels/hotels.json';
import reviewsArr from './Home/Reviews/reviews.json';

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



      <main>
        <Nav></Nav>

        <HotelPages />
        <Reviews />

        <About />
        <Info />
        <RegBtn onRegisterClick={handleRegisterClick} />

      </main>



      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}


export default App;
