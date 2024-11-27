import { useState } from "react";
import "./Add.css";

export default function AddHmodal({ setOpen, refreshData }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    country: "",
    description: "",
    rating: 1,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, address, city, country, description, rating } = formData;

    fetch('http://localhost:8081/admin/hotels/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        address,
        city,
        country,
        description,
        rating,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOpen(false);
        refreshData();
      })
      .catch((err) => {
        console.error('Error:', err);
        alert('Error creating hotel: ' + err.message);
      });
  };

  return (
    <div className="addModalOverlay" onClick={() => setOpen(false)}>
      <div className="addModalContainer" onClick={(e) => e.stopPropagation()}>
        <div className="addModalCloseIcon" onClick={() => setOpen(false)}>
          <img src="/Modal/close.png" width={20} alt="close" />
        </div>
        <span className="addModalTitle">Add New Hotel</span>
        <form className="addModalForm" onSubmit={handleSubmit}>
          <div className="addModalItem">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Hotel Name"
            />
          </div>
          <div className="addModalItem">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Address"
            />
          </div>

          <div className="addModalItem">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder="City"
            />
          </div>

     
          <div className="addModalItem">
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              placeholder="Country"
            />
          </div>

          <div className="addModalItem">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Description"
            />
          </div>

         
          <div className="addModalItem">
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="1"
              max="5"
              required
              placeholder="Rating (1-5)"
            />
          </div>

          <button className="addModalButton" type="submit">
            Create Hotel
          </button>
        </form>
      </div>
    </div>
  );
}
