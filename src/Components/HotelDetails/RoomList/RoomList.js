import React from "react";

import './RoomsList.css'
import { Room } from "../Room";


export const RoomsList = ({
    roomsArr
}) => {
    return (
        <div className="rooms__list">
            <h5 className="rooms__list-title">book</h5>
            {roomsArr.map((room, index) => (
                <Room
                    key={index}
                    image={room.image}
                    title={room.title}
                    bedsDiscription={room.bedsDiscription}
                    maxGuestsCount={room.maxGuestsCount}
                    nightCost={room.nightCost}
                    features={room.features}
                    isCancellationFree={room.isCancellationFree}
                />
            )
            )}
        </div>
    )
}