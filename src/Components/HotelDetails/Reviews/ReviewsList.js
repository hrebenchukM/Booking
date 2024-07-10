import React, { useEffect, useState } from 'react';
import reviewsArr from '../../Home/Reviews/reviews.json';
import './ReviewsList.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReviewCard } from "../../Home/Reviews/ReviewCard";

import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import 'swiper/css';



export const ReviewsList = ({

}) => {
 
    const [showAllRevMob, setShowAllRevMob] = useState(false);
    const [showAllRevDesk, setShowAllRevDesk] = useState(false);



    const showAllMobile = () => {
        setShowAllRevMob(true);
    };

    const showAllDesktop = () => {
        setShowAllRevDesk(true);
    };

    const limitedReviewsMob = showAllRevMob ? reviewsArr.slice(0, 9) : reviewsArr.slice(0, 3);
    const limitedReviewsComp = showAllRevDesk ? reviewsArr : reviewsArr.slice(0, 9);
     return (
        <section className="reviews">
        <div className="container1">
            <h3 className="reviews__title">comments</h3>
            <div  className="reviews__list-details mobile">
            {limitedReviewsMob.map((review, index) => (
                
                <ReviewCard
                    key={index}
                    avatar={review.avatar}
                    reviewerName={review.reviewerName}
                    hotelName={review.hotelName}
                    daysAgoNum={review.daysAgoNum}
                    text={review.text}
                />
            
            ))}
            {!showAllRevMob && (
        <button className="show-more-button-rev" onClick={showAllMobile}>
          Show all reviews
        </button>
          )}
           </div>


           <div className="reviews__list-details reviews__list--desktop">

            {limitedReviewsComp.map((review, index) => (
                
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
           {!showAllRevDesk && (
           <div className="p-container" onClick={showAllDesktop}>
             <div className="p">
                more
                <img src="/HotelDetails/Reviews/more.png" width={24} className="p-icon"></img>
             </div>
           </div>
           )}
        </div>
    </section>



       
    )
} 


