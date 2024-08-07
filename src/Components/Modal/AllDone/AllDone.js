import React, { useState } from "react";
import "./AllDone.css";
import { useNavigate } from "react-router-dom";

export function AllDone  ({ setOpen }) {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/my_profile");
    };
    const handleClick1 = () => {
        navigate("/");
        setOpen(false);
      };
    
  

  

  return (
    <div className="done">
      <div className="done-container">
          <div className="done-close-icon"onClick={() => setOpen(false)}>
          <img src="./Modal/close.png" width={20} ></img>
          </div>
        <span className="done-main-text">All done!</span>

   
      <img src="./Modal/done.png" width={65} style={{ margin: 30 }}></img>
        <button onClick={handleClick} className="done-button">
          <span className="cont-textDone">Check your profile!</span>
        </button>
    

        <button onClick={handleClick1} className="done-button2">
          <span className="textDone">
          Continue Booking</span>
        </button>


    
      </div>
   
    </div>
  );
};