// EditModal.js
import React, { useState, useEffect } from "react";
import { Publish } from "@mui/icons-material";
import "./Edit.css";
import { format } from "date-fns";

export default function EditUModal({ setOpen, userId, refreshData }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const url = 'http://localhost:8081/admin/users/edit/' + userId;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, [userId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      birthday: e.target.birthday.value,
      country: e.target.country.value,
      city: e.target.city.value,
      currency: e.target.currency.value,
      active: e.target.active.checked,
    };

    const url = 'http://localhost:8081/admin/users/edit/' + userId;

    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => {
        if (res.ok) {
          alert("Данные пользователя обновлены");
          refreshData();
          setOpen(false); 
        } else {
          alert("Ошибка при обновлении данных");
        }
      })
      .catch((err) => console.log("Ошибка при обновлении", err));
  };

  if (!user) {
    return <div>Загрузка...</div>;
  }


  return (
    <div className="editModalOverlay" onClick={() => setOpen(false)}>
    <div className="editModalContainer" onClick={(e) => e.stopPropagation()}>
      <div className="editModalCloseIcon" onClick={() => setOpen(false)}>
        <img src="/Modal/close.png" width={20} alt="close" />
      </div>
      <h2 className="editModalTitle">Edit User</h2>
      <form className="editModalForm" onSubmit={handleSubmit}>
        <div className="editModalItem">
          <label>Full Name</label>
          <input type="text" name="name" defaultValue={user.name} required />
        </div>
        <div className="editModalItem">
          <label>Email</label>
          <input type="email" name="email" defaultValue={user.email} required />
        </div>
        <div className="editModalItem">
          <label>Phone</label>
          <input type="text" name="phone" defaultValue={user.phone} required />
        </div>
        <div className="editModalItem">
          <label>Birthday</label>
          <input type="date" name="birthday" defaultValue={format(new Date(user.birthday), 'yyyy-MM-dd')} required />
        </div>
        <div className="editModalItem">
          <label>Country</label>
          <input type="text" name="country" defaultValue={user.country} required />
        </div>
        <div className="editModalItem">
          <label>City</label>
          <input type="text" name="city" defaultValue={user.city} required />
        </div>
        <div className="editModalItem">
          <label>Currency</label>
          <input type="text" name="currency" defaultValue={user.currency} required />
        </div>
        <div className="editModalItem">
          <label>Active</label>
          <input type="checkbox" name="active" defaultChecked={user.active} />
        </div>
        <button type="submit" className="editModalButton">Update</button>
      </form>
    </div>
  </div>
  
  );
}
