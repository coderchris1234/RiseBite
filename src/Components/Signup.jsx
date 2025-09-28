import React, { useState } from "react";
import "./Signup.css";
// import { toast } from "react-toastify";
import arrow from "../assets/back.png";

const SignupModal = ({ isOpen, onClose }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ always inside handleSubmit

    const { firstName, lastName, email, password, phone } = formData;

    // Required fields
    if (!firstName || !lastName || !email || !password || !phone) {
      alert("All fields are required");
      return;
    }

    // Email must contain @ and end with .com
    if (!email.includes("@") || !email.toLowerCase().endsWith(".com")) {
      alert('Email must contain "@" and end with ".com"');
      return;
    }

    // Phone: digits only, must be exactly 11
    const digitsOnly = String(phone).replace(/\D/g, "");
    if (digitsOnly.length !== 11) {
      alert("Phone number must be exactly 11 digits");
      return;
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must include uppercase, lowercase, number and symbol (min 6 chars)"
      );
      return;
    }

    // If all good
    alert("Account created successfully!");
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
              name="Firstname"
              value={formData.Firstname}
              onChange={handleChange}
              type="text"
              placeholder="Enter your first name"
            />
          </div>

          <div>
            <label htmlFor="lastname">Last name</label>
            <input
              name="Lastname"
              value={formData.Lastname}
              onChange={handleChange}
              type="text"
              placeholder="Enter your last name"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              name="Email"
              type="email"
              value={formData.Email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              name="Password"
              type="password"
              value={formData.Password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label htmlFor="number">Phone number</label>
            <input
              name="Phonenumber"
              type="tel"
              value={formData.Phonenumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>


          <button type="submit">Create account</button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
