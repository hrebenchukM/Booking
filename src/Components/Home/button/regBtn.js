import React from 'react';
import './regBtn.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export  function  RegBtn (){
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  
    return (
        <div>
            <div className='login-container'>
        <img src="12345.png" width={30} className='icon-flag'></img>

            <Link
              to="/register"
              style={{ textDecoration: "inherit", color: "inherit" }}
            > <button className="login-button" onClick={handleRegisterClick}>
            <p className='txt'>Register an account</p>
          </button></Link>
       
        <img src="6789.png" width={30} className='icon-flagg'></img>
      </div>
        </div>
    );
};

