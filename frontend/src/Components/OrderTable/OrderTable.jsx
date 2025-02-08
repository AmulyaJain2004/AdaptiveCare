import React from "react";
import "./OrderTable.css";
const OrderTable = () => {
  const orders = [
    {
      id: "#1231",
      name: "John McCormick",
      address: "1084 Wiseman Street, CAMARILLO, CA",
      date: "06 Aug 2020",
      Time: "12:00-15:00",
      status: "Not Active",
    },
    {
      id: "#1232",
      name: "Sandra Pugh",
      address: "1840 Thom Street, SALT CITY, CA",
      date: "02 Aug 2020",
      Time: "14:00-16:00",
      status: "Active",
    },
    // Add more rows as needed
  ];

  return (
    <div className="order-table-container">
      <h2 className="order-title">Schedule</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.id}</td>
              <td>{order.name}</td>
              <td>{order.address}</td>
              <td>{order.date}</td>
              <td>{order.Time}</td>
              <td
                className={`status ${
                  order.status === "Dispatched"
                    ? "status-dispatched"
                    : "status-completed"
                }`}
              >
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
