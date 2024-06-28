import React from "react";
import reviewsArr from './reviews.json';
import { ReviewCard } from "./ReviewCard";
import './ReviewsStyles2.css';

export const Reviews = ({

}) => {
    return (
        <section className="reviews">
        <div className="container1">
            <h3 className="reviews__title">reviews</h3>
            <div className="reviews__list">
            {reviewsArr.map((review, index) => (
                <ReviewCard
                    key={index}
                    avatar={review.avatar}
                    reviewerName={review.reviewerName}
                    hotelName={review.hotelName}
                    daysAgoNum={review.daysAgoNum}
                    text={review.text}
                />)
            )}
        </div>
        </div>
    </section>
       
    )
}