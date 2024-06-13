import React from "react";
import { HotelCard } from "./HotelCard";
// import HotelCard from './HotelCard.js';

export const HotelsList = ({
    cardsArr
}) => {
    return (
        <div className="hotels__list">
            {cardsArr.map((cardId, index) => (
                <HotelCard
                    key={index}
                    imagesArr={cardId.imagesArr}
                    starsNum={cardId.starsNum}
                    hotelName={cardId.hotelName}
                    cityName={cardId.cityName}
                    countryName={cardId.countryName}
                    distanceFromCenter={cardId.distanceFromCenter}
                    nightCost={cardId.nightCost}
                />)
            )}
        </div>
    )
}