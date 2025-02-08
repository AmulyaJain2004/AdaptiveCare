import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Employee Name</h2>
      <ul className="sidebar-menu">
        <li>Schedules</li>
        <li>Inventory</li>
        <li>Budget</li>
      </ul>
    </div>
  );
};

export default Sidebar;
