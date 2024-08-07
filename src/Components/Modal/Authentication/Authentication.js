import React, { useState } from "react";
import "./Authentication.css";
import { Information } from "../Information/Information";

export function Authentication  ({ setOpen }) {
  


  const [openModal1, setOpenModal1] = useState(false);
  const handleClick1 = () => {
    setOpenModal1(true);
    
  };
  return (
    <div className="authentication">
      <div className="authentication-container">
          <div className="authentication-close-icon"onClick={() => setOpen(false)}>
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
        
    
        <button onClick={handleClick1} className="authentication-button">
          <span className="cont-textA">Continue</span>
        </button>
    

      


    
      </div>
      {openModal1 && <Information setOpen={setOpenModal1} />}
    </div>
  );
};
