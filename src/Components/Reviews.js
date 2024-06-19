import React from "react";
import { ReviewsList } from "./ReviewsList";
import reviewsArr from '../api/reviews.json';


export const Reviews = () => {
    return (
        <section className="reviews">
            <div className="container1">
                <h3 className="reviews__title">reviews</h3>
                <ReviewsList reviewsArr={reviewsArr} />
            </div>
        </section>
    )
}