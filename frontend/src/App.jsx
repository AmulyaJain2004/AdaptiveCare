import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import Footer from "./Components/Footer/Footer";
import JoinUs from "./Pages/JoinUs/JoinUs";
import HealthCareStaffPortal from "./Pages/HealthCareStaffPortal/HealthCareStaffPortal"

function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login setAuthenticatedUser={setAuthenticatedUser} />}
          />
          <Route
            path="/AdminDashboard"
            element={
              authenticatedUser ? (
                <AdminDashboard user={authenticatedUser} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/JoinUs"
            element={
              authenticatedUser ? (
                <JoinUs user={authenticatedUser} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/HealthCareStaffPortal"
            element={
              authenticatedUser ? (
                <HealthCareStaffPortal user={authenticatedUser} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
