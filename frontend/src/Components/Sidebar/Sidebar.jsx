import React from "react";
import "./Sidebar.css";

const Sidebar = ({ setActiveSection }) => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Welcome</h2>
      <ul className="sidebar-menu">
        <li onClick={() => setActiveSection("Schedules")}>Schedules</li>
        <li onClick={() => setActiveSection("Inventory")}>Inventory</li>
        <li onClick={() => setActiveSection("Budget")}>Budget</li>
      </ul>
    </div>
  );
};

export default Sidebar;
