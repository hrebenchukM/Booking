import React from "react";
import "./Info.css";

export function Info({ revenue, sales, cost }) {
  return (
    <div className="infoContainer">
      <div className="infoItem">
        <span className="infoTitle">Revenue</span>
        <div className="infoMoneyContainer">
          <span className="infoMoney">${revenue}</span>
        </div>
        <span className="infoSub">Current revenue</span>
      </div>
      <div className="infoItem">
        <span className="infoTitle">Sales</span>
        <div className="infoMoneyContainer">
          <span className="infoMoney">{sales}</span>
        </div>
        <span className="infoSub">Current sales</span>
      </div>
      <div className="infoItem">
        <span className="infoTitle">Cost</span>
        <div className="infoMoneyContainer">
          <span className="infoMoney">${cost}</span>
        </div>
        <span className="infoSub">Current cost</span>
      </div>
    </div>
  );
}
