import React from 'react';
import './Nav.css';
import { Link,Outlet  } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { Reviews } from "../Reviews/Reviews.js";
import reviewsArr from '../Reviews/reviews.json';

import{RegBtn} from '../button/regBtn.js'
import{Info} from '../Info/info.js'
import{About} from '../About/About.js'



export const Nav = () => (

    
  <div className='nav-container'>
    <div className='nav-title'>
    <Link to="/easy_booking" className='easybooking'><span className='easy_text'>Easy booking</span><img src="" width="25" className="easy-icon" /></Link>
    <Link to="/secure_payment" className='securepayment'><span className='secure_text'>Secure payment</span><img src="" width="25" className="secure-icon" /></Link>
    <Link to="/relevant_information" className='relevantinformation'><span className='info_text'>Relevant information</span><img src="" width="25" className="info-icon" /></Link>
  </div>
  </div>


);





