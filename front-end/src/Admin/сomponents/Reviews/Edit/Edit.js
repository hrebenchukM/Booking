
import React, { useState, useEffect } from "react";
import "./Edit.css";


export default function EditRModal({ setOpen, reviewId, refreshData }) {
  const [review, setReview] = useState(null);

  useEffect(() => {
    const url = 'http://localhost:8081/admin/reviews/edit/' + reviewId;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReview(data))
      .catch((err) => console.log(err));
  }, [reviewId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedReview = {
      avatar: e.target.avatar.value,
      reviewer_name: e.target.reviewer_name.value,
      hotel_name: e.target.hotel_name.value,
      days_ago_num: e.target.days_ago_num.value,
      text: e.target.text.value,
    };

    const url = 'http://localhost:8081/admin/reviews/edit/' + reviewId;

    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => {
        if (res.ok) {
          alert("Отзыв обновлен");
          refreshData();
          setOpen(false); 
        } else {
          alert("Ошибка при обновлении отзыва");
        }
      })
      .catch((err) => console.log("Ошибка при обновлении", err));
  };

  if (!review) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="editModalOverlay" onClick={() => setOpen(false)}>
      <div className="editModalContainer" onClick={(e) => e.stopPropagation()}>
        <div className="editModalCloseIcon" onClick={() => setOpen(false)}>
          <img src="/Modal/close.png" width={20} alt="close" />
        </div>
        <h2 className="editModalTitle">Edit Review</h2>
        <form className="editModalForm" onSubmit={handleSubmit}>
          <div className="editModalItem">
            <label>Avatar</label>
            <input type="text" name="avatar" defaultValue={review.avatar} required />
          </div>
          <div className="editModalItem">
            <label>Reviewer Name</label>
            <input type="text" name="reviewer_name" defaultValue={review.reviewer_name} required />
          </div>
          <div className="editModalItem">
            <label>Hotel Name</label>
            <input type="text" name="hotel_name" defaultValue={review.hotel_name} required />
          </div>
          <div className="editModalItem">
            <label>Days Ago</label>
            <input type="number" name="days_ago_num" defaultValue={review.days_ago_num} required />
          </div>
          <div className="editModalItem">
            <label>Review Text</label>
            <textarea name="text" defaultValue={review.text} required />
          </div>
          <button type="submit" className="editModalButton">Update</button>
        </form>
      </div>
    </div>
  );
}
