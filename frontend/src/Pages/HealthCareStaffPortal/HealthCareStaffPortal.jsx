import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar2/Sidebar";
import "./HealthCareStaffPortal.css";

const HealthCareStaffPortal = ({ user }) => {
  const [activeSection, setActiveSection] = useState("Schedules");

  const renderContent = () => {
    switch (activeSection) {
      case "Schedules":
        return (
          <div>
            <h3>View Shift Assignment:</h3>
            <ul>
              {user.tasks.map((Shift, index) => (
                <li key={index}>{Shift}</li>
              ))}
            </ul>
          </div>
        );
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

export default HealthCareStaffPortal;
