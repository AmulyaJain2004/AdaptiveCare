import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">AdaptiveCare</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/AdminDashboard">Admin Dashboard</Link>
        </li>
        <li>
          <Link to="/HealthcareStaffPortal">Healthcare Staff Portal</Link>
        </li>
        <li>
          <Link to="/SupplierDashboard">Supplier Dashboard</Link>
        </li>
        <li>
          <button className="join-button">Join us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
