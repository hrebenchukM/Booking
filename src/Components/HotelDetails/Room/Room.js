import './Room.css';

import React from "react";

export const Room = ({
    image,
    title,
    bedsDiscription,
    maxGuestsCount,
    nightCost,
    features,
    isCancellationFree
}) => {
    return (
        <div className="room">
            <div className="container room__container">
                <img src={image} alt="" className='room__image' />
                <div className="room__info">
                    <h3 className="room__title">{title}</h3>
                    <p className="room__text room__text--gray room__text--with-icon room__text--with-icon-bed">Bed: <span className='room__text--ml-34'>{bedsDiscription}</span></p>
                    <p className="room__text room__text--gray room__text--with-icon room__text--with-icon-guests">Guest: <span className="room__text--ml-13">maximum {maxGuestsCount}</span></p>
                    <div className="room__features">
                        {features.map((feature) => (
                            <div className="room__feature">
                                <img src={feature.icon} alt="" className="room__feature-img" />
                                <p className="room__text room__text--gray">{feature.text}</p>
                            </div>
                        ))}
                    </div>
                    {isCancellationFree && (
                        <p className="room__text room__text--with-icon room__text--with-icon-mark room__text--purple"><span className="room__text--uppercase">free</span> cancellation</p>
                    )}
                </div>
                <div className="room__box">
                    <h4 className="room__cost">{nightCost}$</h4>
                    <div className="room__button-box">
                        <button className="room__button room__button--purple">choose</button>
                        <button className="room__button room__button--white">+info</button>
                    </div>
                </div>
            </div>
        </div>
    )
}