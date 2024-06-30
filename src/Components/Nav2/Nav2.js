import React from 'react';
import './Nav2.css';
import { Link,Outlet  } from 'react-router-dom';


export const NavS = () => (

    
  <div className='nav-container'>
    <div className='nav-title'>
    <Link to="/suppliers" className='easybooking'><span className='easy_text'>Suppliers 60+</span><img src="" width="25" className="easy-icon" /></Link>
    <Link to="/match" className='securepayment'><span className='secure_text'>Match 756</span><img src="" width="25" className="secure-icon" /></Link>
    <Link to="/hotels_count" className='relevantinformation'><span className='info_text'>Hotels 1323</span><img src="" width="25" className="info-icon" /></Link>
  </div>
  </div>


);
