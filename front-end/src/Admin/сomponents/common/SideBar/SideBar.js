import "./SideBar.css";
import { Link } from "react-router-dom";
import { Home, Analytics, ShoppingCart, Group, Hotel, Mail, Feedback, Message, ManageAccounts, Insights } from '@mui/icons-material';


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-section">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <Link to="/admin/home" className="link">
              <li className="sidebar-item active"> <Home className="sidebar-icon"/> Home</li>
            </Link>
            <li className="sidebar-item"> <Analytics className="sidebar-icon" /> Analytics</li>
            <li className="sidebar-item"><ShoppingCart className="sidebar-icon" /> Sales</li>
          </ul>
        </div>
        <div className="sidebar-section">
          <h3 className="sidebar-title">Quick Menu</h3>
          <ul className="sidebar-list">
            <Link to="/admin/users" className="link">
              <li className="sidebar-item">  <Group className="sidebar-icon" /> Users</li>
            </Link>
            <Link to="/admin/hotels" className="link">
              <li className="sidebar-item">  <Hotel className="sidebar-icon" /> Hotels</li>
            </Link>
            <li className="sidebar-item"> <ShoppingCart className="sidebar-icon" /> Transactions</li>
            <Link to="/admin/reviews" className="link">
            <li className="sidebar-item">  <Feedback className="sidebar-icon" /> Reviews</li>
            </Link>
          </ul>
        </div>
        <div className="sidebar-section">
          <h3 className="sidebar-title">Notifications</h3>
          <ul className="sidebar-list">
            <li className="sidebar-item">  <Mail className="sidebar-icon" /> Mail</li>
            <li className="sidebar-item">  <Feedback className="sidebar-icon" /> Feedback</li>
            <li className="sidebar-item">  <Message className="sidebar-icon" /> Messages</li>
          </ul>
        </div>
        <div className="sidebar-section">
          <h3 className="sidebar-title">Staff</h3>
          <ul className="sidebar-list">
            <li className="sidebar-item"> <ManageAccounts className="sidebar-icon" /> Manage</li>
            <li className="sidebar-item"><Insights className="sidebar-icon" /> Analytics</li>
            <li className="sidebar-item"><Feedback className="sidebar-icon" /> Reports</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
