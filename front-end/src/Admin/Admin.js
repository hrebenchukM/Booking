import "./Admin.css";
import React from 'react';
import { Home } from "./Pages/Home/Home";
import { HeaderAdmin } from "./сomponents/common/Header/Header";
import { Routes, Route } from 'react-router-dom';
import Sidebar from "./сomponents/common/SideBar/SideBar";
import Users from "./Pages/Users/Users";
import Hotels from "./Pages/Hotels/Hotels";
import Reviews from "./Pages/Reviews/Reviews";

export function Admin() {

  return (
    <div className="admin">
      <HeaderAdmin />
      <div className="admin-container">
        <Sidebar></Sidebar>
        <main className="admin-main">
          <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="reviews" element={<Reviews />} />
         </Routes>
        </main>
      </div>
    </div>
  );
}