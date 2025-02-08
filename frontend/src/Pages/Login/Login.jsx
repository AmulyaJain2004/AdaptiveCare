import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../Components/LoginForm/LoginForm";

const Login = ({ setAuthenticatedUser }) => {
  const navigate = useNavigate();

  const handleLoginSuccess = (user) => {
    setAuthenticatedUser(user);
    navigate("/AdminDashboard");
  };

  return (
    <div className="login-container">
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default Login;
