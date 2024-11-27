import "./Latest.css";

const Button = ({ type }) => {
  return <button className={"statusBtn " + type}>{type}</button>;
};

export default function Latest({ payments }) {
    return (
      <div className="latest">
        <h3 className="latestTitle">Latest Transactions</h3>
        <table className="latestTable">
          <thead >
            <tr className="latestCol">
              <th>Traveler</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index} >
                <td className="userInfo">
                  <img
                    src="/Common/Header/signin.png"  
                    className="userImg"
                  />
                  <span className="userName">{payment.booking_id}</span>
                </td>
                <td className="latestdate">{payment.payment_date}</td>  
                <td className="amount">${payment.amount}</td>
                <td className="status">
                  <Button type={payment.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
