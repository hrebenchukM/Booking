import React, { useState } from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import { SignIn } from '../../Modal/SignIn/SignIn';
import { Register } from "../../Modal/Register/Register";

export const Header = () => {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  const handleClick1 = () => {
    setOpenModal1(true);
    setOpenModal2(false);
  };

  const handleClick2 = () => {
    setOpenModal2(true);
    setOpenModal1(false);
  };

  const handleAccountClick = () => {
   setOpenModal2(!openModal2);
  };

  return (
    <div className="navbar">
      <Link
        to="/"
        style={{ textDecoration: "inherit", color: "inherit" }}
      >
        <div className="logo"> Hotel for <span style={{ color: 'blueviolet', marginLeft: '5px' }}> you.</span></div>
      </Link>
      <div className="other-container">
        <img src="/Common/Header/language.png" alt="Language" className='language' />
        <>
          <button onClick={handleClick1} className="register-button">Register</button>
          <button onClick={handleClick2} className="navbar-login-button">
            Sign In
            <img src="/Common/Header/signin.png" alt="SignIn" width="40" className='navbar-login-button-icon' />
          </button>
          <button onClick={handleAccountClick} className="account-button">
            Account
            <img src="/Common/Header/signin.png" alt="SignIn" width="40" className='navbar-account-button-icon' />
            </button>
        </>
        {openModal1 && <Register setOpen={setOpenModal1} />}
        {openModal2 && <SignIn setOpen={setOpenModal2} />}
      </div>
    </div>
  );
};
