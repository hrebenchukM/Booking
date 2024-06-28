import React from 'react';

import './Searcher.css'
import { useState } from 'react';


import { Link,Outlet  } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




export function SearchBar  (){
   
        const [showLocation, setShowLocation] = useState(false);
        const [showCalendar, setShowCalendar] = useState(false);
        const [showGuests, setShowGuests] = useState(false);
      
        const handleLocation = () => {
            setShowLocation(!showLocation);
        };
      
        const handleCalendar = () => {
            setShowCalendar(!showCalendar);
        };
      
        const handleGuests = () => {
            setShowGuests(!showGuests);
        };
      




        const [location, setLocation] = useState('');
        const [adults, setAdults] = useState(2);
        const [children, setChildren] = useState(0);
        const [rooms, setRooms] = useState(1);
        const [checkInDate, setCheckInDate] = useState('');
        const [checkOutDate, setCheckOutDate] = useState('');



        const handleLocationSelect = (city) => {
            setLocation(city);
            setShowLocation(false);
          };

          const handleDateSelect = (type, date) => {
            if (type === 'check-in') {
              setCheckInDate(date);
            } else {
              setCheckOutDate(date);
            }
            setShowCalendar(false);
          };

        const handleIncrAdults = () => {
            setAdults(adults + 1);
          };
        
          const handleDecrAdults = () => {
            if (adults > 0) {
              setAdults(adults - 1);
            }
          };
        
          const handleIncrChildren = () => {
            setChildren(children + 1);
          };
        
          const handleDecrChildren = () => {
            if (children > 0) {
              setChildren(children - 1);
            }
          };
        
          const handleIncrRooms = () => {
            setRooms(rooms + 1);
          };
        
          const handleDecrRooms = () => {
            if (rooms > 0) {
              setRooms(rooms - 1);
            }
          };


          const handleDone = () => {
            setShowGuests(false);
          
          };
        
  const cities = ["Paris", "Rome", "Budapest", "Bucharest", "Sofia","Warsaw"];



  const renderCalendar = (choice) => {
  const currentDate = new Date();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthName = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const lastDayOfMonth = new Date(year, currentDate.getMonth()+1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  
  const currentDay = currentDate.getDate();
  const daysToRender = [];
  for (let day = currentDay; day <= daysInMonth; day++) {
    daysToRender.push(
      <div
        key={day}
        className="calendar-day"
        onClick={() => handleDateSelect(choice, `${day}/${currentDate.getMonth()+1 }/${year}`)}
      >
        {day}
      </div>
    );
  }
  return (
    <div className="calendar">
      <div className="calendar-header">
        {monthName} {year}
      </div>
      <div className="calendar-grid">
        {daysToRender}
      </div>
    </div>
  );
};

  
const formattedCheckInOut = checkInDate || checkOutDate ? `${checkInDate} - ${checkOutDate}` : '';

        return (
          <div className="search-bar">
             <img src='airplane.png' className='air' width={24}></img>
            <div className="search-input1">
              
            <input 
          type="text"
          placeholder="Where are you going?"
          value={location}
          onClick={handleLocation}
        />
        
              {showLocation && (
                <div className="down1">
                {cities.map((city, index) => (
              <p key={index} onClick={() => handleLocationSelect(city)}>{city}<img src='logo.png' width={15} className='logo'></img></p>
            ))}
               </div>
              )}
              
            </div>
            <span className='vector1'></span>
            <img src='cal.png' className='cal' width={24}></img><span className='vector'></span>
            <div className="search-input2">
     
                   <input 
          type="text"
       placeholder="Check in-Check out"
          value={formattedCheckInOut}
             onClick={handleCalendar}
        />
              {showCalendar && (
                <div className="down2">
             {renderCalendar('check-in')}
             {renderCalendar('check-out')}
                </div>
                
              )}
              
            </div>
            <span className='vector2'></span>
            <img src='adul.png' className='adul' width={24}></img>
            <div className="search-input3">
            
              <input className='end'
                type="text"
                placeholder={`${adults} adults · ${children} children · ${rooms} room${rooms > 1 ? 's' : ''}`}
                onClick={handleGuests}
              /><span className='vector'></span>
              <img src='strel.png' className='strel'></img>
              {showGuests && (
                <div className="down3">
                 <div className="down-section">
              <p>Adults</p>
              <button onClick={handleDecrAdults}>-</button>
              <span>{adults}</span>
              <button onClick={handleIncrAdults}>+</button>
            </div>
            <div className="down-section">
              <p>Children</p>
              <button onClick={handleDecrChildren}>-</button>
              <span>{children}</span>
              <button onClick={handleIncrChildren}>+</button>
            </div>
            <div className="down-section">
              <p>Rooms</p>
              <button onClick={handleDecrRooms}>-</button>
              <span>{rooms}</span>
              <button onClick={handleIncrRooms}>+</button>
            </div>
            <button className="done-button" onClick={handleDone}>Готово</button>
            
          </div>
       
              )}  
          <Searcher></Searcher>
            </div>

          </div>

    );
}



export const MainPageSearching = () => (
    <>
  <nav  >

    <div >
    <Link to="/" className='hotelforyou'>
    </Link>
    <Link to="/search_results" > <img src='search.png'  className='search-icon'></img> </Link>
     </div>
   
  </nav>

  </>

);



export  function Search(){
    return(
        <div>
        </div>
    
) ;
}



export function NotFound(){
    return(
        <div></div>
) ;
}


export function Searcher (props)
 {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<MainPageSearching/> } >
  <Route index element={<NotFound />} />
   <Route path="search_results" element={<Search/> } />
  <Route path="*" element= {<NotFound />} />  

  </Route>
</Routes>
</BrowserRouter>


  );
}
