
import { Info } from "../../сomponents/Home/Info/Info";
import Latest from "../../сomponents/Home/Latest/Latest";
import Members from "../../сomponents/Home/Members/Members";
import Recharts from "../../сomponents/Home/Recharts/Recharts";
import "./Home.css";
import React, { useEffect, useState } from 'react';

export function Home() {
  const [userData, setUserData] = useState([]);
  const [adminData, setAdminData] = useState([]);
  const [paymentData, setPaymentData] = useState([]);



  const [revenue, setRevenue] = useState(0);  
  const [sales, setSales] = useState(0);     
  const [cost, setCost] = useState(0);     


  useEffect(() => {
    fetch('http://localhost:8081/admin/users')
      .then(res => res.json())
      .then(data => {
        setUserData(transformDataForRechart(data));  
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    fetch('http://localhost:8081/admin/admins')
      .then(res => res.json())
      .then(data => {
        setAdminData(data); 
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    fetch('http://localhost:8081/admin/payments')
      .then(res => res.json())
      .then(data => {
        setPaymentData(transformDataForPayment(data)); 
      })
      .catch(err => console.log(err));
  }, []);





  useEffect(() => {
    fetch('http://localhost:8081/admin/revenue')  
      .then(response => response.json())
      .then(data => {
        setRevenue(data[0]?.revenue || 0); 
      })
      .catch(err => console.log("Error fetching revenue:", err));

      fetch('http://localhost:8081/admin/sales')
      .then(response => response.json())
      .then(data => {
        setSales(data[0]?.sales || 0);
      })
      .catch(err => console.log("Error fetching sales:", err));

      fetch('http://localhost:8081/admin/cost')
      .then(response => response.json())
      .then(data => {
        setCost(data[0]?.cost || 0);
      })
      .catch(err => console.log("Error fetching cost:", err));
  }, []); 





  const transformDataForRechart = (users) => {
    const groupedData = users.reduce((acc, user) => {
      const monthAbbr = new Date(user.created).toLocaleString('en-US', { month: 'short', year: 'numeric' });
      const existingMonth = acc.find(data => data.created === monthAbbr);
  
      if (existingMonth) {
        existingMonth["Active User"] += user.active ? 1 : 0;
      } else {
        acc.push({
          created: monthAbbr,
          "Active User": user.active ? 1 : 0
        });
      }
  
      return acc;
    }, []);
  
    return groupedData.sort((a, b) => new Date(a.created) - new Date(b.created));
  };
  
  
  const transformDataForPayment = (payments) => {
    return payments.map(payment => {
     const createdDate = new Date(payment.payment_date);
  
      const formattedDate = createdDate.toLocaleDateString('en-GB', {
        day: '2-digit', 
        month: 'short',   
        year: 'numeric'  
      });
  
       return {
        ...payment,  
        payment_date: formattedDate, 
      };
    });
  };
  
  
  

  
  return (
    <div className="home">
      <Info 
        revenue={revenue} 
        sales={sales} 
        cost={cost}
      />
     <Recharts data={userData} title="User Analytics" grid dataKey="Active User"/>
     <div className="homeWidgets">
     <Members admins={adminData} />
     <Latest payments={paymentData} />
     </div>
    </div>
  );
}
