import React, { useState } from "react";
import "./Account.css";

export const Account = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [currency, setCurrency] = useState("");

  return (
    <div className="account-page">
      <h1 className="account-title">Your Account</h1>

     <div className="top-section">
        <div className="profile-wrapper account-section" style={{ padding: '0px' }}>
        <span  className="profile-image" />
         
          <div className="profile-details">
          <div className="input-wrapper">
  <input
    type="text"
    className="name-input"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Your Name"
  />
  <img
    src="/MyProfile/Account/yi.png"
    width="20"
    className="icon-input"
    alt="Your Name Icon"
  />
</div>

            <button className="change-photo-btn">
              
                <span className='text'>  Change the photo</span>
                <img src="/MyProfile/Account/change.png" width="20" className="icon" alt="Change the photo Icon" />
                </button>
          </div>
        </div>

        <div className="description-wrapper account-section">
          <p className="note">
            Your name will be the only visible information to other users. All
            other details will remain private and will be utilized to suggest
            the best offers for you and simplify the booking process.
          </p>
        </div>
      </div>

    
      <div className="form-wrapper account-section">
        <div className="form-group">
          <input
            type="text"
            className="input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your phone number"
          />
          <span className="note">*Has to be confirmed</span>
        </div>
    
        <div className="form-group">
          <select
            className="input"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Country</option>
            <option value="Russia">Russia</option>
            <option value="USA">USA</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
          />
          <span className="note">*Has to be confirmed</span>
        </div>
       
       

        <div className="form-group">
          <input
            type="text"
            className="input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
          />
        </div>


        <div className="form-group">
          <input
            type="date"
            className="input"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <span className="note">
            You will not be able to change your birthday date after confirmation
          </span>
        </div>
        
        
        <div className="form-group">
          <select
            className="input"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="">Preferred currency</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div>
    </div>
  );
};
