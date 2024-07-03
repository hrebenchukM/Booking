import React from 'react';
import './Header.css';
import { Link,Outlet  } from 'react-router-dom';


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
            
           {/* <img src="language.png"alt="Language" className='language'/> */}
           <img src="/Common/Header/language.png"alt="Language" className='language'/>

            <>
            <Link
              to="/register"
              style={{ textDecoration: "inherit", color: "inherit" }}
            >
            <div className="register-button">Register</div>
            </Link>

            <Link
              to="/login"
              style={{ textDecoration: "inherit", color: "inherit" }}
            >
              <div className="navbar-login-button">Sign In
              {/* <img src="signin.png" width="40" alt="SignIn" className="navbar-login-button-icon" /> */}
              <img src="/Common/Header/signin.png"alt="SignIn" width="40" className='navbar-login-button-icon'/>

         
              </div>
            </Link>
          </>
      </div>
    </div>
  );
};