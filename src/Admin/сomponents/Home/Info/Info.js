import "./Info.css";

export function Info() {
  return (
    <div className="infoContainer">
      <div className="infoItem">
        <span className="infoTitle">Revenue</span>
        <div className="infoMoneyContainer">
          <span className="infoMoney">$2,415</span>
          <span className="infoMoneyRate">
            -11.4
          </span>
        </div>
        <span className="infoSub">Compared to last month</span>
      </div>
      <div className="infoItem">
        <span className="infoTitle">Sales</span>
        <div className="infoMoneyContainer">
          <span className="infoMoney">$4,415</span>
          <span className="infoMoneyRate">
            -1.4
          </span>
        </div>
        <span className="infoSub">Compared to last month</span>
      </div>
      <div className="infoItem">
        <span className="infoTitle">Cost</span>
        <div className="infoMoneyContainer">
          <span className="infoMoney">$2,225</span>
          <span className="infoMoneyRate">
            +2.4
          </span>
        </div>
        <span className="infoSub">Compared to last month</span>
      </div>
    </div>
  );
}
