import React from 'react';
import './Nav.css';
import { Link,Outlet  } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export const MainPageNav = () => (
    <>
  <nav  >
    
    <div>
      <Link to="/easy_booking" className='easybooking'><span className='easy_text'>Easy booking</span><img src="" width="25" className="easy-icon" /></Link>
      <Link to="/secure_payment" className='securepayment'><span className='secure_text'>Secure payment</span><img src="" width="25" className="secure-icon" /></Link>
      <Link to="/relevant_information" className='relevantinformation'><span className='info_text'>Relevant information</span><img src="" width="25" className="info-icon" /></Link>
    </div>
   
  </nav>

     {/* <hr/>  */}
<Outlet/>
{/* <hr/>  */}
  </>

);



export  function EasyBooking(){
    return(
        <div></div>
    
) ;
}


export  function SecurePayment(){
    return(
        <div></div>
    
) ;
}


export  function RelevantInformation(){
    return(
        <div></div>
    
) ;
}



export function NotFound(){
    return(
        <div></div>
) ;
}


export function Nav (props)
 {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<MainPageNav/> } >
  <Route index element={<NotFound />} />
   <Route path="easy_booking" element={<EasyBooking/> } />
  <Route path="secure_payment" element={<SecurePayment />} />
  <Route path="relevant_information" element={<RelevantInformation />} />
  <Route path="*" element= {<NotFound />} />  

  </Route>
</Routes>
</BrowserRouter>


  );
}