import React from 'react';
import './Header.css';
import { Link,Outlet  } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SearchBar } from '../Searcher/Searcher';
const HeadImage = () => (
    <img src="head.png" alt="Head" className='head' />
  );
  


export const MainPageHeader = () => (
    <>

  <HeadImage />

  <nav  >

    <div className='container'>
    <Link to="/" className='hotelforyou'>
    Hotel for <span style={{ color: 'blueviolet', marginLeft: '5px' }}> you.</span>
    </Link>
      <img src="language.png"alt="Language" className='language'/>
      <Link to="/register" className='register'>Register</Link>
      <Link to="/sign_in" className='signin'>Sign In<img src="signin.png" width="40" alt="SignIn" className="signin-icon" /></Link>
    </div>
   
  </nav>
   {/* <hr/>  */}
   <Outlet/>
{/* <hr/>  */}

  </>

);



export  function HotelForYou(){//HOME page 
    return(
        <div>
         
        </div>
    
) ;
}


export  function Register(){//ModalDialog Register
    return(
        <div></div>
    
) ;
}


export  function SignIn(){//ModalDialog SignIn
    return(
        <div></div>
    
) ;
}



export function NotFound(){
    return(
        <div></div>
) ;
}


export function Header (props)
 {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<MainPageHeader/> } >
  <Route index element={<HotelForYou />} />
   <Route path="register" element={<Register/> } />
  <Route path="sign_in" element={<SignIn />} />
  <Route path="*" element= {<NotFound />} />  

  </Route>
</Routes>
</BrowserRouter>


  );
}