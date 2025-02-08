import React from "react";
import "./Landing.css";
import doctorImage from "../../assets/doctor.jpeg"; // Ensure this path is correct

const Landing = () => {
  return (
    <div className="landing">
      <div className="content">
        <h1>
          Operational <span>Adaptability</span> in Healthcare Services
        </h1>
        <p>
          Enhancing adaptability in healthcare through optimized resource
          allocation, workforce management, and streamlined operations.
        </p>
        <div className="buttons">
          <button className="primary-button">Learn More</button>
          <button className="secondary-button">Contact Us</button>
        </div>
        <div className="stats">
          <p>Empowering healthcare providers worldwide</p>
          <p>Interested in joining us?</p>
        </div>
      </div>
      <div className="image">
        <img src={doctorImage} alt="Doctor" />
      </div>
    </div>
  );
};

export default Landing;
