import React from "react";
import reviewsArr from './reviews.json';
import { ReviewCard } from "./ReviewCard";
import './Reviews.css';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import 'swiper/css';



export const Reviews = ({

}) => {
    const limitedReviews = reviewsArr.slice(0, 3);
    return (
        <section className="reviews">
        <div className="container1">
            <h3 className="reviews__title">reviews</h3>
            <div  className="reviews__list swiper-container">

            <Swiper spaceBetween={40} slidesPerView={'auto'}>
            {limitedReviews.map((review, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                <ReviewCard
                    key={index}
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

            {limitedReviews.map((review, index) => (
                
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



       
    )
} 


