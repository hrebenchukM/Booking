import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Footer } from './Home/Footer/Footer.js';

import { RegBtn } from './Home/button/regBtn.js';
import { Info } from './Home/Info/info.js';
import { About } from './Home/About/About.js';

import { Header } from './Home/Header/Header.js';
import { Nav } from './Home/Nav/Nav.js';



// branch hotels and reviews
import { Reviews } from './Components/Reviews.js';
import { Hotels } from './Components/Hotels.js';
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



      <main>
        <Nav></Nav>

        <Hotels />

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
