import React from 'react';
import './regBtn.css'; // Подключение стилей

export  function  RegBtn ({ onRegisterClick }){
    return (
        <div className="rect">
            <div className='register-container'>
        <img src="12345.png" width={30} className='icon-flag'></img>
        <button className="register-button" onClick={onRegisterClick}>
          <p className='txt'>Register an account</p>
        </button>
        <img src="6789.png" width={30} className='icon-flagg'></img>
      </div>
        </div>
    );
};

