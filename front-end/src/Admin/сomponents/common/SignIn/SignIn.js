import React, { useState } from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";

export function SignIn({ setIsAdminLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleLogin = () => {
    fetch("http://localhost:8081/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.role === "admin") {
          setIsAdminLoggedIn(true);
          navigate("/admin/home");
        } else {
          setErrorMessage("You are not an administrator");
        }
      })
      .catch(() => {
        setErrorMessage("Login error. Try again.");
      });
  };

  if (!isModalOpen) {
    return null; 
  }



  return (
    <div className="signin">
      <div className="signin-container">
        <div
          className="signin-close-icon"
          onClick={() => setIsModalOpen(false)}
        >
          <img src="./Modal/close.png" width={20} alt="Close" />
        </div>
        <span className="signin-main-text">Sign In</span>
        <div className="signin-info-container">
          <input
            className="signin-check"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="signin-info-container">
          <input
            className="signin-check"
            placeholder="Password"
            type="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin} className="signin-button">
          <span className="cont-text">Continue</span>
        </button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
}
