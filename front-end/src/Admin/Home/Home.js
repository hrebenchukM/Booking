import { Info } from "../Components/Home/Info/Info";
import "./Home.css";
import React, { useEffect, useState } from 'react';
import Recharts from "../Components/Home/Recharts/Recharts";

export function Home() {
  const [data,setData]=useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8081/admin/users')
    .then(res => res.json())
    .then(data =>{
      setData(data); transformDataForChart(data);
    } )
    .catch(err => console.log(err));
  },[])

  const transformDataForChart = (users) => {
    const chartData = users.map(user => {
      const createdDate = new Date(user.created); 
      const monthAbbr = createdDate.toLocaleString('en-US', { month: 'short' });  // Преобразуем дату в формат "Jan"
      
      return {
        created: monthAbbr,  
        "Active User": user.active ? 1 : 0, 
      };
    });
  
    setUserData(chartData);
  };
  

  
  return (
    <div className="home">
      <Info></Info>
      <Recharts data={userData} title="User Analytics" grid dataKey="Active User"/>
      
    </div>
  );
}
