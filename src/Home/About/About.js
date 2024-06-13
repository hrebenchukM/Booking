import React from 'react';
import './About.css';



export  function About(){
  return(
      <div>
         <h2 className="header1">SAFE WITH US</h2>
        <div className='rectangle'style={{ left: `${155}px` }}>
          <div className='cont'>
             <img src="about1.png" width={30} className='icon1'></img>
             <p className='textAbout'>
             We choose hotels that  meet our standards 
             </p>
          </div>
        </div>

        <div className='rectangle' style={{ left: `${395}px` }}>
          <div className='cont'>
             <img src="about2.png" width={30} className='icon2'></img>
             <p className='textAbout'>
             Secure payment without hidden fees
             </p>
          </div>
        </div>

        <div className='rectangle'style={{ left: `${635}px` }}>
          <div className='cont'>
             <img src="about3.png" width={30} className='icon3'></img>
             <p className='textAbout'>
             Сurrent prices and best deals
             </p>
          </div>
        </div>

        <div className='rectangle'style={{ left: `${875}px` }}>
          <div className='cont'>
             <img src="about4.png" width={30} className='icon4'></img>
             <p className='textAbout'>
             Easy booking which will not take you long
             </p>
          </div>
        </div>


        <div className='rectangle'style={{ left: `${1115}px` }}>
          <div className='cont'>
             <img src="about5.png" width={30} className='icon5'></img>
             <p className='textAbout'>
             We'll promptly email  booking confirmation.
             </p>
          </div>
        </div>
      </div>
) ;
}
