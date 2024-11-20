import React from 'react'; 
import './NavProfile.css'; 
import { Link } from 'react-router-dom';

export const Nav = () => (
  <div className='nav-container'>
    <div className='nav-titleP'>
      <Link to="/" className='mainpage'>
        <img src="/MyProfile/Nav/main.png" width="5" className="iconM"alt="Main Page Icon" />
        <span className='text'>Main page</span>
      </Link>
      <Link to="/account" className='account'>
        <span className='text'>Account</span>
        <img src="/MyProfile/Nav/acc.png" width="20" className="icon" alt="Account Icon" />
      </Link>
      <Link to="/payment_method" className='paymentmethod'>
        <span className='text'>Payment method</span>
        <img src="/MyProfile/Nav/payment.png" width="20" className="icon" alt="Payment Method Icon" />
      </Link>
      <Link to="/travel_information" className='travelinformation'>
        <span className='text'>Travel information</span>
        <img src="/MyProfile/Nav/travel.png" width="20" className="icon" alt="Travel Information Icon" />
      </Link>
      <Link to="/newsletters" className='newsletters'>
        <span className='text'>Newsletters</span>
        <img src="/MyProfile/Nav/news.png" width="20" className="icon" alt="Newsletters Icon" />
      </Link>
      <Link to="/security" className='security'>
        <span className='text'>Security</span>
        <img src="/MyProfile/Nav/secur.png" width="20" className="icon" alt="Security Icon" />
      </Link>
    </div>
  </div>
);
