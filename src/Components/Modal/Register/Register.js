import React, { useState } from "react";
import "./Register.css";
import { Authentication } from "../Authentication/Authentication";
import { ModalManager } from "../ModalManager";

export function Register  ({ handleClose }) {



  return (
    <div className="registerM">
      <div className="registerM-container">
          <div className="registerM-close-icon"onClick={() => handleClose(false)}>
          <img src="./Modal/close.png" width={20} ></img>
          </div>
        <span className="registerM-main-text">Register</span>
        <div className="registerM-info-container" >
            <div className="registerM">
              <input 
              className="registerM-check"
              placeholder="Email"
              ></input>
            </div>
          </div>
          <div className="titleReg">*We will send you an email to confirm your 
          email address
          </div>
    
          <div className="registerM-info-container"style={{marginTop:'-5px'}}  >
            <div className="registerM">
            <input 
              className="registerM-check"
              placeholder="Password"
              ></input>
            </div>
          </div>
          <div className="registerM-info-container" >
            <div className="registerM">
            <input 
              className="registerM-check"
              placeholder="Repeat password"
              ></input>
            </div>
          </div>
          <div className="titleReg">*Get acquainted with our 
            <span style={{ color: 'rgba(88, 26, 219, 1)'}}>Privacy policy</span>
        </div>
        <button onClick={handleClose} className="registerM-button">
          <span className="cont-textReg">Continue</span>
        </button>
      

        <button  className="registerM-button2">
        <img src="./Modal/google.png" width={24}></img>
          <span className="textReg">
                Sign In with Google</span>
        </button>



        <button  className="registerM-button2">
        <img src="./Modal/facebook.png" width={24}></img>
          <span className="textReg">Sign In with Facebook</span>
        </button>

        <button  className="registerM-button2">
        <img src="./Modal/apple.png" width={24}></img>
          <span className="textReg">Sign In with Apple</span>
        </button>


    
      </div>
     
      <ModalManager></ModalManager>
    </div>
  );
};
