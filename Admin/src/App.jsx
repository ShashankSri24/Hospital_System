import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorsDetails  from "./components/DoctoreDetails";
import DoctorRegister from './components/DoctorRegister';
import Login from "./components/Login";
import AdminRegister from './components/AdminRegister';
import Messages from "./components/Messages";
import AppointmentDetails from "./components/Dashboard"
import { Context } from "./main";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebars from "./components/Sidebars";
import "./App.css";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setAdmin } =
    useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://hospital-management-backend-lmbi.onrender.com/api/v1/adminPanel/admin/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setAdmin(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setAdmin({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  return (
    <Router>
      <Sidebars/>
      <Routes>
        <Route path="/" element={<AppointmentDetails/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctor/register" element={<DoctorRegister />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/doctors" element={<DoctorsDetails />} />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
};

export default App;