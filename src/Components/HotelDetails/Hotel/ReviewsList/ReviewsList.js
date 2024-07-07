import React, { useState } from "react";
import './ReviewsList.css';
import { ReviewCard } from "../../../Home/Reviews/ReviewCard";
export const ReviewsList = ({
    reviewsArr
}) => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleSlide = (direction) => {
        let newSlideIndex;

        if (direction === 'left') {
            newSlideIndex = slideIndex === 0 ? reviewsArr.length - 1 : slideIndex - 1;
        } else if (direction === 'right') {
            newSlideIndex = slideIndex === reviewsArr.length - 1 ? 0 : slideIndex + 1;
        }

        setSlideIndex(newSlideIndex);
    };

    return (
        <div className="reviews__list">
            <div className="reviews__slider">
           
                <div className="reviews__slider-content">
                    <div className="reviews__slide reviews__slide--active">
                        <ReviewCard
                            avatar={reviewsArr[slideIndex].avatar}
                            reviewerName={reviewsArr[slideIndex].reviewerName}
                            hotelName={reviewsArr[slideIndex].hotelName}
                            daysAgoNum={reviewsArr[slideIndex].daysAgoNum}
                            text={reviewsArr[slideIndex].text}
                        />
                    </div>
                </div>
            
                <button className="reviews__slider-btn reviews__slider-btn--prev" onClick={() => handleSlide('left')}>&#10094;</button>
                <button className="reviews__slider-btn reviews__slider-btn--next" onClick={() => handleSlide('right')}>&#10095;</button>
            </div>
        </div>
    );
};
