// src/RegisterButton.js
import React from 'react';
import './regBtn.css'; // Подключение стилей

const RegisterButton = () => {
    const handleRegisterClick = () => {
        // Здесь можно добавить логику для обработки регистрации
        console.log('Регистрация аккаунта');
    };

    return (
        <div className="register-container">
            <button className="register-button" onClick={handleRegisterClick}>
                Register an account
            </button>
        </div>
    );
};

export default RegisterButton;