import React from 'react';
import './Nav.css';
import { Link,Outlet  } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



export const MainPageNavS= () => (
    <>
  <nav  >
    
    <div>
      <Link to="/suppliers" className='easybooking'><span className='easy_text'>Suppliers 60+</span><img src="" width="25" className="easy-icon" /></Link>
      <Link to="/match" className='securepayment'><span className='secure_text'>Match 756</span><img src="" width="25" className="secure-icon" /></Link>
      <Link to="/hotels_count" className='relevantinformation'><span className='info_text'>Hotels 1323</span><img src="" width="25" className="info-icon" /></Link>
    </div>
   
  </nav>

  </>

);



export  function Suppliers(){
    return(
        <div></div>
    
) ;
}


export  function Match(){
    return(
        <div></div>
    
) ;
}


export  function HotelsCount(){
    return(
        <div></div>
    
) ;
}



export function NotFound(){
    return(
        <div></div>
) ;
}


export function NavS (props)
 {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<MainPageNavS/> } >
  <Route index element={<NotFound />} />
   <Route path="easy_booking" element={<Suppliers/> } />
  <Route path="secure_payment" element={<Match />} />
  <Route path="relevant_information" element={<HotelsCount />} />
  <Route path="*" element= {<NotFound />} />  

  </Route>
</Routes>
</BrowserRouter>


  );
}