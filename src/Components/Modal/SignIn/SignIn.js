import React, { useState } from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { Register } from "../Register/Register";

export function SignIn  ({ setOpen }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };


  const [openModal1, setOpenModal1] = useState(false);
  const handleClick1 = () => {
    setOpenModal1(true);
  };

  return (
    <div className="signin">
      <div className="signin-container">
          <div className="signin-close-icon"onClick={() => setOpen(false)}>
             &#10095;
          </div>
        <span className="signin-main-text">Sign In</span>
        <div className="signin-info-container" >
            <div className="signin">
              <input 
              className="signin-check"
              placeholder="Email"
              ></input>
            </div>
          </div>
    
          <div className="signin-info-container" >
            <div className="signin">
            <input 
              className="signin-check"
              placeholder="Password"
              ></input>
            </div>
          </div>
    
        <button onClick={handleClick} className="signin-button">
          <span className="cont-text">Continue</span>
        </button>
        <div className="title">Don't have an account?
            
        <span onClick={handleClick1}  className="regopen">Register
            </span>
        </div>

        <button  className="signin-button2">
        <img src="./Modal/google.png" width={24}></img>
          <span className="text">
                Sign In with Google</span>
        </button>



        <button  className="signin-button2">
        <img src="./Modal/facebook.png" width={24}></img>
          <span className="text">Sign In with Facebook</span>
        </button>

        <button  className="signin-button2">
        <img src="./Modal/apple.png" width={24}></img>
          <span className="text">Sign In with Apple</span>
        </button>


    
      </div>
      {openModal1 && <Register setOpen={setOpenModal1} />}
    </div>
  );
};
