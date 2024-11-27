import { useState } from "react";
import "./Add.css"; 

export default function AddUModal({ setOpen,refreshData }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthday: "",
    country: "",
    city: "",
    currency: "",
    active: true,
    password: "", 
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

    const { name, email, phone, birthday, country, city, currency, active, password } = formData;
  
    fetch('http://localhost:8081/admin/users/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        birthday,
        country,
        city,
        currency,
        active,
        password,  
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
        alert('Error creating user: ' + err.message);
      });
  };

  return (
    <div className="addModalOverlay" onClick={() => setOpen(false)}>
      <div className="addModalContainer" onClick={(e) => e.stopPropagation()}>
        <div className="addModalCloseIcon" onClick={() => setOpen(false)}>
          <img src="/Modal/close.png" width={20} alt="close" />
        </div>
        <span className="addModalTitle">Add New User</span>
        <form className="addModalForm" onSubmit={handleSubmit}>
          <div className="addModalItem">
           <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
               placeholder="Full Name"
            />
          </div>

          <div className="addModalItem">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
            />
          </div>

          <div className="addModalItem">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone"
            />
          </div>

          <div className="addModalItem">
            <input
              type="date"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
              placeholder="Birthday"
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
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              required
              placeholder="Currency"
            />
          </div>

          <div className="addModalItem">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
            />
          </div>

          <div className="addModalItem">
            <label>Active</label>
            <input
              type="checkbox"
              name="active"
              checked={formData.active}
              onChange={handleChange}
            />
          </div>

          <button className="addModalButton" type="submit">
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}
