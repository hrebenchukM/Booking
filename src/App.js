import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Footer } from './Home/Footer';

import { RegBtn } from './Home/button/regBtn';
import { Info } from './Home/info';
import { About } from './Home/About';

import { Header } from './Home/Header';
import { Nav } from './Home/Nav';

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

      <About/>
      <Info />
        <RegBtn onRegisterClick={handleRegisterClick} /> 



      <Nav></Nav>

      </main>
    
      

      <footer className="App-footer">
        {/* <Footer></Footer> */}
      </footer>
    </div>
  );
}


export default App;
