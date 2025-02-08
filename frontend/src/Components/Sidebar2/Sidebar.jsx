import React from "react";
import "./Sidebar.css";

const Sidebar = ({ setActiveSection }) => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Welcome</h2>
      <ul className="sidebar-menu">
        <li onClick={() => setActiveSection("Schedules")}>View Shift Assignments</li>
        <li onClick={() => setActiveSection("Inventory")}>Request Changes</li>
        {/* <li onClick={() => setActiveSection("Budget")}>Budget</li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
