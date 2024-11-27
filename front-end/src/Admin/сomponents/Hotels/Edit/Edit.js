import React, { useState, useEffect } from "react";
import { Publish } from "@mui/icons-material";
import "./Edit.css";

export default function EditHModal({ setOpen, hotelId, refreshData }) {
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const url = `http://localhost:8081/admin/hotels/edit/${hotelId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setHotel(data))
      .catch((err) => console.log(err));
  }, [hotelId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedHotel = {
      name: e.target.name.value,
      address: e.target.address.value,
      city: e.target.city.value,
      country: e.target.country.value,
      description: e.target.description.value,
      rating: e.target.rating.value,
    };

    const url = `http://localhost:8081/admin/hotels/edit/${hotelId}`;

    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedHotel),
    })
      .then((res) => {
        if (res.ok) {
          alert("Данные отеля обновлены");
          refreshData();
          setOpen(false);
        } else {
          alert("Ошибка при обновлении данных");
        }
      })
      .catch((err) => console.log("Ошибка при обновлении", err));
  };

  if (!hotel) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="editModalOverlay" onClick={() => setOpen(false)}>
      <div className="editModalContainer" onClick={(e) => e.stopPropagation()}>
        <div className="editModalCloseIcon" onClick={() => setOpen(false)}>
          <img src="/Modal/close.png" width={20} alt="close" />
        </div>
        <h2 className="editModalTitle">Edit Hotel</h2>
        <form className="editModalForm" onSubmit={handleSubmit}>
          <div className="editModalItem">
            <label>Hotel Name</label>
            <input type="text" name="name" defaultValue={hotel.name} required />
          </div>
          <div className="editModalItem">
            <label>Address</label>
            <input type="text" name="address" defaultValue={hotel.address} required />
          </div>
          <div className="editModalItem">
            <label>City</label>
            <input type="text" name="city" defaultValue={hotel.city} required />
          </div>
          <div className="editModalItem">
            <label>Country</label>
            <input type="text" name="country" defaultValue={hotel.country} required />
          </div>
          <div className="editModalItem">
            <label>Description</label>
            <textarea name="description" defaultValue={hotel.description} required />
          </div>
          <div className="editModalItem">
            <label>Rating</label>
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              defaultValue={hotel.rating}
              required
            />
          </div>
          <button type="submit" className="editModalButton">
            Update Hotel
          </button>
        </form>
      </div>
    </div>
  );
}
