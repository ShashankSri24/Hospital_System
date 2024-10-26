import React, { useContext, useState } from 'react';
import { Context } from '../main';
import axios from 'axios';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import { toast } from "react-toastify";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://hospital-management-backend-lmbi.onrender.com/api/v1/adminPanel/admin/login",
        { email, password, role: "Admin" },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );
        if(res.data.success){
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
        }
      }
     catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container form-component">
      <h1 className='form-title'>Welcome to MediCare</h1>
      <p>Only Admin are allowed</p>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p style={{ marginBottom: 0 }}>Not Registered?</p>
        <Link to='/admin/register' style={{ textDecoration: "none", color: "#271776ca" }}>
          Register Now
        </Link>
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
