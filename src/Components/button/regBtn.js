import React from 'react';
import './regBtn.css'; // Подключение стилей
import { useState } from 'react';
export  function  RegBtn (){
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
    return (
        <div className="rect">
            <div className='register-container'>
        <img src="12345.png" width={30} className='icon-flag'></img>
        <button className="register-button" onClick={handleRegisterClick}>
          <p className='txt'>Register an account</p>
        </button>
        <img src="6789.png" width={30} className='icon-flagg'></img>
      </div>
        </div>
    );
};

