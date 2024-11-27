import { useState } from "react";
import "./Add.css"; 

export default function AddRModal({ setOpen, refreshData }) {
  const [formData, setFormData] = useState({
    avatar: "./avatar-1.png", 
    reviewer_name: "",
    hotel_name: "",
    days_ago_num: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, type, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { avatar, reviewer_name, hotel_name, days_ago_num, text } = formData;
  
    fetch('http://localhost:8081/admin/reviews/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar,
        reviewer_name,
        hotel_name,
        days_ago_num,
        text,
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
        alert('Error creating review: ' + err.message);
      });
  };

  return (
    <div className="addModalOverlay" onClick={() => setOpen(false)}>
      <div className="addModalContainer" onClick={(e) => e.stopPropagation()}>
        <div className="addModalCloseIcon" onClick={() => setOpen(false)}>
          <img src="/Modal/close.png" width={20} alt="close" />
        </div>
        <span className="addModalTitle">Add New Review</span>
        <form className="addModalForm" onSubmit={handleSubmit}>
          <div className="addModalItem">
            <input
              type="text"
              name="reviewer_name"
              value={formData.reviewer_name}
              onChange={handleChange}
              required
              placeholder="Reviewer Name"
            />
          </div>

          <div className="addModalItem">
            <input
              type="text"
              name="hotel_name"
              value={formData.hotel_name}
              onChange={handleChange}
              required
              placeholder="Hotel Name"
            />
          </div>

          <div className="addModalItem">
            <input
              type="number"
              name="days_ago_num"
              value={formData.days_ago_num}
              onChange={handleChange}
              required
              placeholder="Days Ago"
            />
          </div>

          <div className="addModalItem">
            <textarea
              name="text"
              value={formData.text}
              onChange={handleChange}
              required
              placeholder="Review Text"
            />
          </div>

          <div className="addModalItem">
            <input
              type="text"
              name="avatar"
              value={formData.avatar}
              onChange={handleChange}
              placeholder="Avatar (e.g., ./avatar-1.png)"
            />
          </div>

          <button className="addModalButton" type="submit">
            Create Review
          </button>
        </form>
      </div>
    </div>
  );
}
