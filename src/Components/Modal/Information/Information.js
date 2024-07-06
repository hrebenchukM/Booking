import React, { useState } from "react";
import "./Information.css";
import { AllDone } from "../AllDone/AllDone";
import { ModalManager } from "../ModalManager";

export function Information  ({ handleClose }) {



  const options = ["Yes","No"];

  
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="infor">
      <div className="infor-container">
          <div className="infor-close-icon"onClick={() => handleClose(false)}>
          <img src="./Modal/close.png" width={20} ></img>
          </div>
        <span className="infor-main-text">Information</span>
        <div className="titleInfo">Tell us about yourself so we can better choose options for you :) 
        </div>
        <div className="infor-info-container" >
            <div className="infor">
              <input 
              className="infor-check"
              placeholder="Country"
              ></input>
            </div>
          </div>
    
          <div className="infor-info-container" >
            <div className="information">
            <input 
              className="infor-check"
              placeholder="City"
              ></input>
            </div>
          </div>
          <div className="infor-info-container" >
            <div className="infor">
            <input 
              className="infor-check"
              placeholder="Why do you travel?"
              ></input>
            </div>
          </div>



          <div className="titleInfo"> Travelling with a pet? </div>
          <div className="infor-info-container">
      <div className="infor">
     
        {options.map((answer) => (
          <div key={answer}className="option-option">
            <input
              type="radio"
              value={answer}
              checked={selectedOption === answer}
              onChange={() => setSelectedOption(answer)}
              className="options-input"
            />
            <label>
              {answer}
            </label>
          </div>
        ))}
      </div>
    </div>
    
        <button onClick={handleClose} className="infor-button">
          <span className="cont-textInfo">Continue</span>
        </button>
    

        <button  className="infor-button2">
          <span className="textInfo">
                Later</span>
        </button>


    
      </div>
     <ModalManager></ModalManager>
    </div>
  );
};
