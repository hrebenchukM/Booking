import React from "react";
import { ReviewCard } from "./ReviewCard";


export const ReviewsList = ({
    reviewsArr
}) => {
    return (
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
    )
}