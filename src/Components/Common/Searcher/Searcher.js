import React from 'react';

import './Searcher.css'
import { useState } from 'react';

import { useNavigate } from "react-router-dom";

export const formatDate = (dateString) => {
    if (!dateString) return '';
  
    const dateObj = new Date(dateString);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
  
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  
    return `${formattedDay}.${formattedMonth}.${year}`;
  };
  
export const Dates = ({ onDateChange }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
  
    const handleStartDateChange = (event) => {
      const date = event.target.value;
      setStartDate(date);
      onDateChange(date, endDate);
    };
  
    const handleEndDateChange = (event) => {
      const date = event.target.value;
      setEndDate(date);
      onDateChange(startDate, date);
    };
    var today=new Date();
    return (
      <div className="date-range">
       
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={handleStartDateChange}
          min={`${today.getFullYear()}-${('0' + (today.getMonth() + 1)).slice(-2)}-${('0' + today.getDate()).slice(-2)}`}
          className='date-input'
        />

        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={handleEndDateChange}
          min={startDate} 
          className='date-input'
        />
      </div>
    );
  };
  
  


export function SearchBar  (){
    const [location, setLocation] = useState("");
  const [showLocation, setShowLocation] = useState(false);
  


    const [openDetails, setOpenDetails] = useState(false);
    const [details, setDetails] = useState({
      adult: 1,
      children: 0,
      room: 1,
    });
  
    const handleOption = (name, operation) => {
      setDetails((prev) => ({
        ...prev,
        [name]: operation === "i" ? details[name] + 1 : details[name] - 1,
      }));

      setShowLocation(false);
      setOpenDate(false);
      setOpenDetails(false);
    };
  
    const onChangeHandler = (e) => {
      e.preventDefault();
      setLocation(e.target.value);
      setShowLocation(true);
    setOpenDate(false);
    setOpenDetails(false);
    };
  
    const navigate = useNavigate();
  
    const handleSearch = () => {
      navigate("/hotels", { state: { location, dates, details } });
    };
  


      
    const cities = ["Paris", "Rome", "Budapest", "Bucharest", "Sofia","Warsaw"];

    const handleLocationSelect = (city) => {
        setLocation(city);
        setShowLocation(false); 
      };
    
      




      const [dates, setDates] = useState([
        {
          startDate:  "",
          endDate: ""
        
        },
      ]);
    

      const [openDate, setOpenDate] = useState(false);


      const handleDateChange = (startDate, endDate) => {
        setDates([{ startDate, endDate }]);
       
        setOpenDate(true); 
        setOpenDetails(false);
        setShowLocation(false);
      };


    
    return (
      <div className="search-bar-container-main">
        <div className="search-bar-container">
          <div className="search-bar-input-container">
          <img src='airplane.png' width={24}></img>
            <input
              className="search-bar-input"
              type="text"
              placeholder="Where are you going?"
              onChange={onChangeHandler}
              value={location}
              onClick={() => setShowLocation(!showLocation)}
            />

           {showLocation && (
            <div className='options'>
            {cities.map((city, index) => (
              <p className='option-item' key={index} onClick={() => handleLocationSelect(city)}>
                {city}
                <img src='logo.png' width={15} className='logo' alt="City logo" />
              </p>
            ))}
            </div>
        )}
        <span className='i'></span>
        </div>
        
<div className='search-bar-date-container'>

<div className="search-bar-date">
<img src='cal.png' width={24} alt="Calendar icon" />
          <div
            onClick={() => setOpenDate(!openDate)}
            className="search-bar-stay-time"
          >
             {dates[0].startDate ? formatDate(dates[0].startDate) : " Check in "}
              - 
              {dates[0].endDate ? formatDate(dates[0].endDate) : " Check out"} 
            
          </div>
          {openDate && (
            <div className='options'>
            <Dates onDateChange={handleDateChange} />
            </div>
          )}
        </div>
        <span className='i' ></span>
        </div>

      

          <div className="search-bar-details-container">
          <img src='adul.png'  width={24}></img>
            <div
              onClick={() => setOpenDetails(!openDetails)}
              className="search-bar-details"
            >
                {`${details.adult} adult, ${details.children} children, ${details.room} room`}</div>
            {openDetails && (
              <div className="options">
                <div className="option-item">
                  <span className="option-text">Adult</span>
                  <div className="option">
                    <button
                      disabled={details.adult <= 1}
                      className="option-btn"
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span className="option-number">{details.adult}</span>
                    <button
                      className="option-btn"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>





                <div className="option-item">
                  <span className="option-text">Children</span>
                  <div className="option">
                    <button
                      disabled={details.children <= 0}
                      className="option-btn"
                      onClick={() => handleOption("children", "d")}
                    >
                      -
                    </button>
                    <span className="option-number">{details.children}</span>
                    <button
                      className="option-btn"
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>





                <div className="option-item">
                  <span className="option-text">Room</span>
                  <div className="option">
                    <button
                      disabled={details.room <= 1}
                      className="option-btn"
                      onClick={() => handleOption("room", "d")}
                    >
                      -
                    </button>
                    <span className="option-number">{details.room}</span>
                    <button
                      className="option-btn"
                      onClick={() => handleOption("room", "i")}
                    >
                      +
                    </button>
                  </div>
                  
                </div>
                


           
              </div>
              
            )}
            <img src='strel.png'  width={24}></img>
          </div>
         
          <div onClick={handleSearch} className="search-bar-search-btn">
          <img src='search.png' ></img>
          </div>
        </div>
      </div>
    );
  };
  