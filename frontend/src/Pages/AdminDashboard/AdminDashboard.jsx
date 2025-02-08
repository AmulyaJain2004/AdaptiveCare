import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./AdminDashboard.css";

const AdminDashboard = ({ user }) => {
  const [activeSection, setActiveSection] = useState("Schedules");

  const renderContent = () => {
    switch (activeSection) {
      case "Schedules":
        return (
          <div>
            <h3>Schedules:</h3>
            <ul>
              {user.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        );
      case "Inventory":
        return (
          <div>
            <h3>Inventory:</h3>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        );
      case "Budget":
        return (
          <div>
            <h3>Budget Breakdown:</h3>
            <p>Marketing: $10,000</p>
            <p>Development: $15,000</p>
            <p>Operations: $8,000</p>
          </div>
        );
      default:
        return <p>Please select a section from the sidebar.</p>;
    }
  };

  return (
    <div className="admin-dashboard">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="dashboard-content">
        <h1>Welcome, {user.name}</h1>
        <h2>Role: {user.role}</h2>
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
