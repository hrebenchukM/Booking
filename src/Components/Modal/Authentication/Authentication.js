import React, { useState } from "react";
import "./Authentication.css";
import { Information } from "../Information/Information";
import { ModalManager } from "../ModalManager";

export function Authentication  ({ handleClose }) {
  


  return (
    <div className="authentication">
      <div className="authentication-container">
          <div className="authentication-close-icon"onClick={() => handleClose(false)}>
          <img src="./Modal/close.png" width={20} ></img>
          </div>
        <span className="authentication-main-text">Authentication </span>
        <div className="authentication-info-container" >
            <div className="authentication">
              <input 
              className="authentication-check"
              placeholder="Code"
              ></input>
            </div>
          </div>
          <div className="titleA">We have sent you an email with the code. 
            Check your mail and enter the code for the authentication 
          </div>
        
    
        <button onClick={handleClose} className="authentication-button">
          <span className="cont-textA">Continue</span>
        </button>
    

      


    
      </div>
    <ModalManager></ModalManager>
    </div>
  );
};
