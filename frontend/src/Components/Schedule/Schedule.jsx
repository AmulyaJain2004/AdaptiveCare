import React from "react";
import "./Schedule.css";

const Schedule = () => {
  const schedule = [
    { name: "Dr. Smith", role: "Surgeon", shift: "8:00 AM - 4:00 PM" },
    { name: "Nurse Olivia", role: "Nurse", shift: "10:00 AM - 6:00 PM" },
    { name: "Dr. John", role: "Pediatrician", shift: "12:00 PM - 8:00 PM" },
    { name: "Dr. Emily", role: "Cardiologist", shift: "2:00 PM - 10:00 PM" },
  ];

  return (
    <div className="schedule">
      <h2>Employee Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Shift</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.role}</td>
              <td>{employee.shift}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
