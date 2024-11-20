import React from 'react';
import './Nav2.css';
import { Link,Outlet  } from 'react-router-dom';


export const NavS = () => (

    
  <div className='nav-container'>
    <div className='nav-titleS'>
    <Link to="/suppliers" className='suppliers '><span className='sup_text'>Suppliers </span><span className='sup_n'>60+</span><img src="" width="25" className="sup-icon" /></Link>
    <Link to="/match" className='match'><span className='match_text'>Match </span><span className='match_n'>756</span><img src="" width="25" className="match-icon" /></Link>
    <Link to="/hotels_count" className='hotelsnav'><span className='hotelsnav_text'>Hotels </span><span className='hotelsnav_n'>1323</span><img src="" width="25" className="hotelsnav-icon" /></Link>
  </div>
  </div>


);
