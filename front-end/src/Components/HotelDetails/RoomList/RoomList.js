import React from "react";
import roomsArr from './rooms.json'
import './RoomList.css'
import { Room } from "../Room/Room";
export function RoomsList ({
})  {
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