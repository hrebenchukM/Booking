import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Footer } from './Home/Footer';
import RegBtn from './Home/button/regBtn';
import Register from './Home/button/Register';
import Info from './Home/info';
import About from './Home/About';

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


        {/* меню */}

      </header>
     


      <main className="App-main">
        {/* Основной контент */}
        <About />  {/* Вставляем компонент About */}
      </main>
      <div className="App-info">
        <Info imageUrl={process.env.PUBLIC_URL + '/info.jpeg'} />
      </div>
      <div className="App-RegBtn">
        <RegBtn onRegisterClick={handleRegisterClick} />
      </div>
      

      <footer className="App-footer">
        <Footer></Footer>
      </footer>
      <Register isOpen={isModalOpen} onClose={handleCloseModal} />

    </div>
  );
}


export default App;
