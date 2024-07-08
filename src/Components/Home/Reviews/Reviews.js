import React from "react";
import reviewsArr from './reviews.json';
import { ReviewCard } from "./ReviewCard";
import './ReviewsStyles2.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export const Reviews = () => {
    return (
        <section className="reviews">
            <div className="container1">
                <h3 className="reviews__title">Reviews</h3>


                <div className="reviews__list swiper-container">
                    <Swiper spaceBetween={20}  >
                        {reviewsArr.map((review, index) => (
                            <SwiperSlide key={index} className="swiper-slide">
                                <ReviewCard
                                    avatar={review.avatar}
                                    reviewerName={review.reviewerName}
                                    hotelName={review.hotelName}
                                    daysAgoNum={review.daysAgoNum}
                                    text={review.text}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="reviews__list reviews__list--desktop">
                    {reviewsArr.map((review, index) => (
                        <ReviewCard
                            key={index}
                            avatar={review.avatar}
                            reviewerName={review.reviewerName}
                            hotelName={review.hotelName}
                            daysAgoNum={review.daysAgoNum}
                            text={review.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
