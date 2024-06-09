import React from 'react';
import './regBtn.css'; // Подключение стилей
import './Register'

const RegBtn = ({ onRegisterClick }) => {
    return (
        <div className="register-container">
            <button className="register-button" onClick={onRegisterClick}>
                Register account
            </button>
        </div>
    );
};

export default RegBtn;