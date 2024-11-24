import "./Admin.css";
import React, { useEffect, useState } from 'react';
import { Home } from "./Home/Home";
import { Header } from "../Components/Common/Header/Header";

export function Admin() {
 
  
  return (
    <div className="admin">
     <Header></Header>
     <Home></Home>
       {/* <div className="admin-container">
        <aside className="admin-sidebar">
        <ul>
    <li>Dashboard</li>
    <li>Users</li>
    <li>Bookings</li>
    <li>Properties</li>
    <li>Payments</li>
    <li>Reviews</li>
    <li>Reports</li>
    <li>Notifications</li>
    <li>Coupons</li>
    <li>Settings</li>
    <li>Support</li>
</ul>

        </aside>
        <main className="admin-main">
          <h1>Welcome to Admin Panel</h1>
          <p>Use the sidebar to navigate through the panel.</p>
          <table>
        <thead>
          <th>ID</th>
          <th>Email</th>
          <th>Password</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Birth date</th>
          <th>Country</th>
          <th>City</th>
          <th>Currency</th>
        </thead>
        <tbody>
          {data.map((d,i) =>(
            <tr rey={i}>
              <td>{d.id}</td>
              <td>{d.email}</td>
              <td>{d.password}</td>
              <td>{d.name}</td>
              <td>{d.phone}</td>
              <td>{d.birth_date}</td>
              <td>{d.country}</td>
              <td>{d.city}</td>
              <td>{d.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </main>
      </div> */}
    </div>
  );
}
