import React, { useContext, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";
  
 
const DoctorRegister = () => {
   
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState(""); 
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    const [Department, setDepartment] = useState("");
    const [docAvatar, setDocAvatar] = useState("");
    const [docAvatarPreview, setDocAvatarPreview] = useState("");
    
    const navigateTo = useNavigate();
    
    const departmentsArray = [
        "Pediatrics",
        "Orthopedics",
        "Cardiology",
        "Neurology",
        "Oncology",
        "Radiology",
        "Physical Therapy",
        "Dermatology",
        "ENT",
      ];
    
      const handleAvatar = (e) => {
        const file = e.target.files[0];
        if (!file) return; 
      
        const reader = new FileReader();
        
        reader.readAsDataURL(file);
        reader.onload = () => {
          setDocAvatarPreview(reader.result);
          setDocAvatar(file);
        };
        reader.onerror = () => {
          console.error('File reading error');
         
        };
      };
      

      const handleDoctorRegister = async (e) => {
        e.preventDefault();
        try {
          const formData = new FormData();
          formData.append("firstName", firstName);
          formData.append("lastName", lastName);
          formData.append("email", email);
          formData.append("phone", phone);
          formData.append("password", password);
          formData.append("dob", dob);
          formData.append("gender", gender);
          formData.append("doctorDepartment", Department);
          formData.append("docAvatar", docAvatar);
          
          const res = await axios
            .post("http://localhost:3000/api/v1/adminPanel/admin/doctor/addNew", formData, {
              withCredentials: true,
              headers: { "Content-Type": "multipart/form-data" },
              
            },
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
        } catch (error) {
          toast.error(error.response.data.message);
        }
      };
      if (!isAuthenticated) {
        return navigateTo('/login');
      }
  return (
    <div>
       <section className="page">
      <section className="container add-doctor-form">
        
        <h1 className="form-title">REGISTER A NEW DOCTOR</h1>
        <form onSubmit={handleDoctorRegister}>
          <div className="first-wrapper">
            <div>
              <img
                src={
                  docAvatarPreview ? `${docAvatarPreview}` : "/doctor.png"
                }
                alt="Doctor Avatar"
              />
              <input type="file" onChange={handleAvatar} />
            </div>
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
              <input
                type={"date"}
                placeholder="Date of Birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="others">others</option>
              </select>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <select
                value={Department}
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
              >
                <option value="">Select Department</option>
                {departmentsArray.map((depart, index) => {
                  return (
                    <option value={depart} key={index}>
                      {depart}
                    </option>
                  );
                })}
              </select>
              <button type="submit">Register New Doctor</button>
            </div>
          </div>
        </form>
      </section>
    </section>
    </div>
  )
}

export default DoctorRegister
