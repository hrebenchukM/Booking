import React  from "react";
import './Header.css';
import { Link } from 'react-router-dom';


export const HeaderAdmin = () => {


  return (
    <div className="navbar">
      <Link
        to="/admin"
        style={{ textDecoration: "inherit", color: "inherit" }}
      >
        <div className="logo"> Admin <span style={{ color: 'blueviolet', marginLeft: '5px' }}> panel. </span>
        </div>
      </Link>
      <div className="other-container">
        <img src="/Common/Header/language.png" alt="Language" className='language' />
      </div>
    </div>
  );
};
