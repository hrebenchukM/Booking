import React from "react";
import hotelsArr from '../api/hotels';
import { HotelsList } from "./HotelsList";


export const Hotels = () => {
    return (

        <section className="hotels">
            <div className="container1">
                <HotelsList cardsArr={hotelsArr} />
            </div>
        </section>
    )
}