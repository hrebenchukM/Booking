import React, { useEffect, useState } from 'react';
import './App.css';
import { HomePage } from './Pages/Home/Home';
import { SearchResultPage } from './Pages/SearchResult/SearchResults';
import { HotelDetailsPage } from './Pages/HotelDetails/HotelDetails';
import { BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom';
import { ErrorPage } from './Pages/Error/Error';
import { MyProfile } from './Pages/MyProfile/MyProfile';
import { Admin } from './Admin/Admin';
import { SignIn } from './Admin/сomponents/common/SignIn/SignIn';

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);


  return (
    <div className="App">
     
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route index element={<HomePage />} />
        <Route path="/hotels" element={<SearchResultPage />} />
        <Route path="/hotels/:id" element={<HotelDetailsPage />} />
         <Route path="my_profile" element={<MyProfile/> } />
         <Route path="/admin" element={isAdminLoggedIn ? (<Navigate to="/admin/home" />) : (<SignIn setIsAdminLoggedIn={setIsAdminLoggedIn} />)}/>
         <Route path="/admin/*" element={isAdminLoggedIn ? (<Admin/>):(<SignIn setIsAdminLoggedIn={setIsAdminLoggedIn} />) } />
         <Route path="*" element= {<ErrorPage />} />  
      </Routes>
    </BrowserRouter>
</div>
  );
}


export default App;
