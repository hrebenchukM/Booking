import React, { useEffect, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import './Reviews.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css';

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    // Запрос данных с сервера
    useEffect(() => {
        fetch('http://localhost:8081/admin/reviews') // Здесь путь к вашему API
            .then(response => response.json())
            .then(data => setReviews(data.slice(0, 3))) // Ограничиваем 3 отзывами
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    return (
        <section className="reviews">
            <div className="container1">
                <h3 className="reviews__title">Reviews</h3>
                <div className="reviews__list swiper-container">
                    <Swiper spaceBetween={40} slidesPerView={'auto'}>
                        {reviews.map((review, index) => (
                            <SwiperSlide key={index} className="swiper-slide">
                                <ReviewCard
                                    key={review.id}
                                    avatar={review.avatar}
                                    reviewerName={review.reviewer_name}
                                    hotelName={review.hotel_name}
                                    daysAgoNum={review.days_ago_num}
                                    text={review.text}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="reviews__list reviews__list--desktop">
                    {reviews.map((review, index) => (
                        <ReviewCard
                            key={review.id}
                            avatar={review.avatar}
                            reviewerName={review.reviewer_name}
                            hotelName={review.hotel_name}
                            daysAgoNum={review.days_ago_num}
                            text={review.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
