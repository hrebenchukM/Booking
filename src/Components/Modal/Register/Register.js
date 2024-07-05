import React, { useState } from "react";
import "./Register.css";
import { Authentication } from "../Authentication/Authentication";

export function Register  ({ setOpen }) {


  const [openModal1, setOpenModal1] = useState(false);
  const handleClick1 = () => {
    setOpenModal1(true);
    
  };


  return (
    <div className="registerM">
      <div className="registerM-container">
          <div className="registerM-close-icon"onClick={() => setOpen(false)}>
             &#10095;
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
          <div className="title">*We will send you an email to confirm your 
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
          <div className="title">*Get acquainted with our 
            <span style={{ color: 'rgba(88, 26, 219, 1)'}}>Privacy policy</span>
        </div>
        <button onClick={handleClick1} className="registerM-button">
          <span className="cont-text">Continue</span>
        </button>
      

        <button  className="registerM-button2">
        <img src="./Modal/google.png" width={24}></img>
          <span className="text">
                Sign In with Google</span>
        </button>



        <button  className="registerM-button2">
        <img src="./Modal/facebook.png" width={24}></img>
          <span className="text">Sign In with Facebook</span>
        </button>

        <button  className="registerM-button2">
        <img src="./Modal/apple.png" width={24}></img>
          <span className="text">Sign In with Apple</span>
        </button>


    
      </div>
      {openModal1 && <Authentication setOpen={setOpenModal1} />}
    </div>
  );
};
