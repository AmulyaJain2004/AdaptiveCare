import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./JoinUs.css";

const JoinUs = ({ user }) => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Welcome, {user.name}</h1>
        <h2>Role: {user.role}</h2>
        <h3>Tasks:</h3>
        <ul>
          {user.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JoinUs;
