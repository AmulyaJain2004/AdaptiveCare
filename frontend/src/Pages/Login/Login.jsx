import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../Components/LoginForm/LoginForm";


const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    navigate("/AdminDashboard");
  };

  return (
    <div className="login-container">
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default Login;
