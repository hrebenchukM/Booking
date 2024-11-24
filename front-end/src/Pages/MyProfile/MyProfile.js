
import { Header } from "../../Components/Common/Header/Header";
import "./MyProfile.css";
import { Nav } from "../../Components/MyProfile/Nav/Nav";
import { Account } from "../../Components/MyProfile/Account/Account";

export  function MyProfile() {
  return (
    <div className="profile">
      <div className="profile-container">
        <Header/>
        <Nav/>
         <Account/>
      </div>
    </div>
  );
}
