import "./Members.css";

export default function Members({ admins }) {
  return (
    <div className="members">
      <span className="membersTitle">New Join Members</span>
      <ul className="adminList">
        {admins.map((admin, index) => (
          <li key={index} className="adminItem">
             <img
              src="/Common/Header/signin.png"
              alt={admin.name}
              className="adminImg"
            />
            <div className="adminInfo">
              <span className="adminName">{admin.name}</span>
              <span className="adminRole">{admin.profession}</span>
            </div>
            <button className="viewBtn">
              <span className="viewIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
