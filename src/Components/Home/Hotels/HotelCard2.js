import React, { useEffect, useState } from "react";
import hotelsArr from './hotels.json';

import { Link } from "react-router-dom";

export const HotelCard = ({
    imagesArr,
    starsNum,
    hotelName,
    cityName,
    countryName,
    distanceFromCenter,
    nightCost,
    id
}) => {
    const starsArr = [];
    for (let i = 1; i <= starsNum; i++) {
        starsArr.push(i);
    }

    const [isHotelFavourite, setIsHotelFavourite] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const lastIndex = imagesArr.length - 1;
        if (currentIndex < 0) {
            setCurrentIndex(lastIndex);
        }
        if (currentIndex > lastIndex) {
            setCurrentIndex(0);
        }
    }, [currentIndex, imagesArr]);

    useEffect(() => {//to automatically switch photos every 5 seconds
        let slider = setInterval(() => setCurrentIndex((prevState) => prevState + 1), 5000);
        return () => {
            clearInterval(slider);
        };
    }, [currentIndex]);

    return (
        <div className="hotel">
            <button 
               className={`hotel__favourite ${isHotelFavourite ? 'hotel__favourite--active' : ''}`}
                onClick={() => setIsHotelFavourite(!isHotelFavourite)}
            >
                {!isHotelFavourite ? (
                    // <img src="./star.svg" alt="" className="hotel__favourite-star" />
                    <img src={'/Home/HotelList/'  + '/star.svg'} alt="" className="hotel__favourite-star" />

                ) : (
                    // <img src="./black-star-icon.svg" alt="" className="hotel__favourite-star" />
                    <img src={'/Home/HotelList/'  + '/black-star-icon.svg'} alt="" className="hotel__favourite-star" />

                )}
            </button>
            <div className="hotel__slider">
                <section className='section'>
                    <div className='section-center'>
                        {imagesArr.map((imageSrc, imageIndex) => {
                            let position = 'nextSlide';
                            if (imageIndex === currentIndex) {
                                position = 'activeSlide';
                            } else if (imageIndex === currentIndex - 1 || (currentIndex === 0 && imageIndex === imagesArr.length - 1)) {
                                position = 'lastSlide';
                            }

                            return (
                                <article className={position} key={imageIndex}>
                                    {/* <img src={imageSrc} alt="Hotel" className='hotel__image' /> */}
                                    <img src={'/Home/HotelList/' + imageSrc} alt="Hotel" className='hotel__image' />

                                </article>
                            );
                        })}

                        <button className='prev' onClick={() => setCurrentIndex((prevState) => prevState - 1)}>
                            &#10094;
                        </button>

                        <button className='next' onClick={() => setCurrentIndex((prevState) => prevState + 1)}>
                            &#10095;
                        </button>
                    </div>
                    <div className="carousel-indicators">
                        {imagesArr.map((_, index) => (
                            <span 
                                key={index} 
                                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            ></span>
                        ))}
                    </div>
                </section>
            </div>
            <h4 className="hotel__title">
            <Link to={`/hotels/${id}`} style={{ textDecoration: 'none', color: '#007bff' }}>
              {hotelName} | {cityName} | {countryName}
            </Link>

        
            </h4>
            <div className="hotel__stars">
                {starsArr.map((_, index) => (<div key={index} className="hotel__stars-star"></div>))}
            </div>
            <p className="hotel__distance">
                the city center : {distanceFromCenter} m
            </p>
            <h3 className="hotel__cost">
                $ {nightCost} night
            </h3>
        </div>
    );
};