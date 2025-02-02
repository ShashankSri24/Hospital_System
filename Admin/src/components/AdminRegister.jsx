import React, { useContext, useState } from "react";
import {  useNavigate ,Navigate} from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";
  

const AdminRegister = () => {
   
    const {setIsAuthenticated } = useContext(Context);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState(""); 
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    
    const navigateTo = useNavigate();
    
      
    const handleAdminRegister = async (e) => {
      e.preventDefault();
      try {
       const res =  await axios
          .post(
            "https://hospital-management-backend-lmbi.onrender.com/api/v1/adminPanel/adminRegister",
            { firstName, lastName, email, phone, dob, gender, password },
            {
              withCredentials: true,
              headers: { "Content-Type": "application/json" },
            }
          )
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setDob("");
          setGender("");
          setPassword("");
        }catch(error) {
          toast.error(error.message);
        }
        
      } 
    
    
  return (
    <div>
       <section className="page">
      <section className="container form-component add-admin-form">
        <h1 className="form-title">Register New Admin</h1>
        <form onSubmit={handleAdminRegister}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            
            <input
              type={"date"}
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="other">others</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">ADD NEW ADMIN</button>
          </div>
        </form>
      </section>
    </section>
    </div>
  )
}
export default AdminRegister;
