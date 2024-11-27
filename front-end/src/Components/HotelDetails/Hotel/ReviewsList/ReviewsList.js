import React, { useEffect,useState } from "react";

import './ReviewsList.css';
import { ReviewCard } from "../../../Home/Reviews/ReviewCard";

export const ReviewsList = ({ reviewsArr }) => {

    const [slideIndex, setSlideIndex] = useState(0);

    if (!reviewsArr || reviewsArr.length === 0) {
        return <div>No reviews available</div>;
    }

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
        <div className="reviews__listhotel">
            <div className="reviews__sliderhotel">
                <div className="reviews__slider-contenthotel">
                    <div className="reviews__slidehotel reviews__slide--activehotel">
                        <ReviewCard
                            avatar={reviewsArr[slideIndex].avatar}
                            reviewerName={reviewsArr[slideIndex].reviewerName}
                            hotelName={reviewsArr[slideIndex].hotelName}
                            daysAgoNum={reviewsArr[slideIndex].daysAgoNum}
                            text={reviewsArr[slideIndex].text}
                        />
                    </div>
                </div>
                <button className="reviews__slider-btnhotel reviews__slider-btn--prevhotel" onClick={() => handleSlide('left')}>&#10094;</button>
                <button className="reviews__slider-btnhotel reviews__slider-btn--nexthotel" onClick={() => handleSlide('right')}>&#10095;</button>
            </div>
        </div>
    );
};
