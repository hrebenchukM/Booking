import React, { useState } from 'react';
import './Hotel.css';
import reviewsArr from '../../Home/Reviews/reviews.json';
import { ReviewsList } from './ReviewsList/ReviewsList';
export function Hotel  ({
    imagesArr,
    adress,
    adressLink,
    cityName,
    nightCost,
    description,
    features
}){
    const [slideIndex, setSlideIndex] = useState(0);

    const handleSlide = (direction) => {
        let newSlideIndex;

        if (direction === 'left') {
            newSlideIndex = slideIndex === 0 ? imagesArr.length - 1 : slideIndex - 1;
        } else if (direction === 'right') {
            newSlideIndex = slideIndex === imagesArr.length - 1 ? 0 : slideIndex + 1;
        }

        setSlideIndex(newSlideIndex);
    };

    return (
        <section className="details-hotelA">
             <span className="hotel-title">
             Tourist Hotel
            </span>
            <span className="hotel-text-number">
            (380) 555-0103
            </span>


            <div className="details-container details-hotel__container">
                <div className="details-hotel__images">
                    <div className="details-hotel__slider-controls">
                        <button className="details-hotel__slider--arrow--left" onClick={() => handleSlide('left')}>
                            &#10094;
                        </button>
                        <button className="details-hotel__slider--arrow--right" onClick={() => handleSlide('right')}>
                            &#10095;
                        </button>
                    </div>
                    <div className="details-hotel__box">
                        <img
                            src={"/HotelDetails/Hotel/"+imagesArr[slideIndex]}
                            alt=""
                            className="details-hotel__image--main"
                        />
                        {imagesArr.map((image, index) => (
                            index !== slideIndex && (
                                <img
                                    key={index}
                                    src={"/HotelDetails/Hotel/" + image}
                                    alt=""
                                    className="details-hotel__image"
                                />
                            )
                        ))}
                    </div>
                </div>
                <div className="details-hotel__info">
                    <div className="details-hotel__info-top">
                        <div className="details-hotel__info-box">
                            <h4 className="details-hotel__cost">{nightCost}$ <span className="details-hotel__cost-thin details-hotel__cost--gray">per night</span></h4>
                            <a href={`${adressLink}`} className="details-hotel__location">{`${adress} | ${cityName}`}</a>
                        </div>
                        <button className='details-hotel__button' type="button">Book</button>
                    </div>
                    <p className="details-hotel__description">{description}</p>
                    <div className="details-hotel__features">
                        {features.map((feature, index) => (
                            <div key={index} className="details-hotel__feature">
                                <img src={"/HotelDetails/Hotel/"+feature.icon} alt="" className="details-hotel__feature-img" />
                                <p className="details-hotel__feature-text">{feature.text}</p>
                            </div>
                        ))}
                    </div>
                    <hr className="details-hotel__info-line" />
                    <div className="details-hotel__reviews">
                    <ReviewsList reviewsArr={reviewsArr} />
                    </div>
                </div>
            </div>
        </section>
    );
};
