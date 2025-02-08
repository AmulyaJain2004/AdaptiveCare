import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar"; // Import Sidebar
import OrderTable from "../../Components/OrderTable/OrderTable"; // Import OrderTable
import "./AdminDashboard.css"; // Include any styles for AdminDashboard if applicable

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <OrderTable />
    </div>
  );
};

export default AdminDashboard;
