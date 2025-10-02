import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
// import { toast } from "react-toastify";
import arrow from "../assets/back.png";
import { toast } from "react-toastify";

const SignupModal = ({ isOpen, onClose }) => {
  const nav = useNavigate()
  const {signup, loading, error} = useAuth()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
  

    const { firstName, lastName, email, password, phone } = formData;

    // Required fields
    if (!firstName || !lastName || !email || !password || !phone) {
      toast.error("All fields are required");
      return;
    }

    // Email must contain @ and end with .com
    if (!email.includes("@") || !email.toLowerCase().endsWith(".com")) {
      toast.error('Email must contain "@" and end with ".com"');
      return;
    }

   const phoneRegex = /^\d{11}$/;
if (!phoneRegex.test(phone)) {
  toast.error("Phone number must start with +234 and be followed by 10 digits");
  return;
}


    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must include uppercase, lowercase, number and symbol (min 6 chars)"
      );
      return;
    }

    try {
      const success = await signup(formData)
      if(success){
         toast.success("Account created successfully! Please Verify your email address.");
         onClose();
         nav('/verify')
      }
    
    } catch (error) {
      toast.error("signup failed. Please try again", error)
      
    }

    // If all good
    console.log("formData:", formData);
  };

  // ✅ now this works fine
  if (!isOpen) return null;

  return (
    <div className="modal-overlay1">
      <div className="modal-content1">
        {/* header */}
        <div
          style={{
            backgroundColor: "black",
            height: "60px",
            color: "white",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              borderRadius: "50%",
              border: "1px solid white",
              padding: "10px",
              marginLeft: "10px",
            }}
          >
            <h1>R</h1>
          </div>
          <h1>RiseBite</h1>
        </div>

        <img
          style={{ marginTop: "10px", marginLeft: "30px", cursor: "pointer" }}
          onClick={onClose}
          src={arrow}
          alt="back"
        />

        <h2 style={{ textAlign: "center", fontWeight: "400" }}>
          Create Account
        </h2>

        <form className="signup-form1" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstname">First name</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              type="text"
              placeholder="Enter your first name"
            />
          </div>

          <div>
            <label htmlFor="lastName">Last name</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              type="text"
              placeholder="Enter your last name"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label htmlFor="number">Phone number</label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>


          <button type="submit">{
            loading ? "Creating account..." : "create account"}</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
