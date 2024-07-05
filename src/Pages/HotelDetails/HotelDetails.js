
import React, { useState } from "react";
import { Footer } from "../../Components/Common/Footer/Footer";
import { Header } from "../../Components/Common/Header/Header";
import "./HotelDetails.css";



export  function HotelDetailsPage() {

  const [slideIndex, setSlideIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const hotelPhotos = [
    "/HotelDetails/Slider/bed1.png",
  "/HotelDetails/Slider/bed2.png",
"/HotelDetails/Slider/bed3.png",
"/HotelDetails/Slider/bed4.png",
  ];

  const onClickHandler = (index) => {
    setSlideIndex(index);
    setOpen(true);
  };

  const handleSlide = (direction) => {
    let newSlideIndex;

    if (direction === "left") {
      newSlideIndex = slideIndex === 0 ? 3 : slideIndex - 1;
    } else if (direction === "right") {
      newSlideIndex = slideIndex === 3 ? 0 : slideIndex + 1;
    }

    setSlideIndex(newSlideIndex);
  };



  return (
    <div>
     <Header></Header>
      <div className="hotel--container">
        {open && (
          <div className="hotel--slider">
            <div onClick={() => setOpen(false)} className="hotel--slider--close">
            &#10095;
            &#10094;
            </div>


            <div className="hotel--slider--arrow--left">
            <button onClick={() => handleSlide("left")}>
              &#10094;
            </button>
            </div>
            <div className="hotel--slider--wrapper">
              <img
                src={hotelPhotos[slideIndex]}
                alt=""
                className="hotel--slider--img"
              />
            </div>
            <div className="hotel--slider--arrow--right">
        
            <button onClick={() => handleSlide("right")}>
              &#10095;
            </button>
            </div>
          </div>
        )}
        <h1 className="hotel--title">
          Tourist Hotel
        </h1>
        <div className="hotel--location--container">
          <p className="hotel--location">(380) 555-0103</p>
        </div>
        <span className="hotel--text--distance">
          Excellent location - 1000m from center!
        </span>
        <div className="hotel--imgs">
          {hotelPhotos.map((photo, index) => (
            <img
              onClick={() => onClickHandler(index)}
              src={[photo]}
              className="hotel--img"
              key={index}
            />
          ))}
        </div>
        <div className="hotel--details">
          <div className="hotel--details--text">
            <p>
            Located in the heart of Kiev, our hotel offers a prime location for exploring the city's rich history and culture.
             With luxurious accommodations and top-notch amenities, we provide a comfortable and relaxing stay for all our guests. 
             Whether you're traveling for business or leisure, our attentive staff is always on hand to assist with any needs you may have. 
            </p>
          </div>
          <div className="hotel--details--price">
        
            <span className="hotel--details--score">
            Located in the heart of Kiev, our hotel offers a prime location for exploring the city's rich history and culture.
             With luxurious accommodations and top-notch amenities, we provide a comfortable and relaxing stay for all our guests. 
             Whether you're traveling for business or leisure, our attentive staff is always on hand to assist with any needs you may have. 
          
            </span>
            <h2>
              <b className="hotel--price">85$ per night</b>
            </h2>
            <button
              className="hotel--btn"
            >BOOK
            </button>
          </div>
        </div>
      
      </div>
    <Footer></Footer>
    
    </div>
  );
};
