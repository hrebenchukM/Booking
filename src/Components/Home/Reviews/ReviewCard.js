import React from "react";
import './ReviewCard.css';

export const ReviewCard = ({
    avatar,
    reviewerName,
    hotelName,
    daysAgoNum,
    text
}) => {
    return (
        <div className="review">
            <div className="review__info">
                <img src={"/Home/Reviews/"+avatar} alt="" className="review__avatar" />
                <div className="review__info-text">
                    <h3 className="review__title">
                        {reviewerName}
                    </h3>
                    <p className="review__hotel-name">{hotelName}</p>
                </div>
                <p className="review__date">{daysAgoNum} days ago</p>
            </div>
            <p className="review__text">{text}</p>
        </div>
    )
}