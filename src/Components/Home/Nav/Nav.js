import React from 'react';
import './NavHome.css';
import { Link,Outlet  } from 'react-router-dom';


export const Nav = () => (

    
  <div className='nav-container'>
    <div className='nav-titleH'>
    <Link to="/easy_booking" className='easybooking'><span className='easy_text'>Easy booking</span><img src="" width="25" className="easy-icon" /></Link>
    <Link to="/secure_payment" className='securepayment'><span className='secure_text'>Secure payment</span><img src="" width="25" className="secure-icon" /></Link>
    <Link to="/relevant_information" className='relevantinformation'><span className='info_text'>Relevant information</span><img src="" width="25" className="info-icon" /></Link>
  </div>
  </div>


);





