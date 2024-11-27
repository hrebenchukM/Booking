import React  from "react";
import './Header.css';
import { Link } from 'react-router-dom';


export const Header = () => {


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
      </div>
    </div>
  );
};
