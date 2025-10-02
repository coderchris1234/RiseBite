import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
// import { toast } from "react-toastify";
import arrow from "../assets/back.png";
import { toast } from "react-toastify";
import ForgotPasswordModal from "./ForgetPassword";

const LoginModal = ({ isOpen, onClose }) => {
  
  const { signin, loading, error } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [forgotOpen, setForgotOpen] = useState(false);

  useEffect(() => {
  if (!isOpen) {
    setFormData({ email: "", password: "" });
  }
}, [isOpen]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  //   const {email, password} = formData

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.warning("All fields are required to fill");
      return;
    }
    

    try {
      const success = await signin(formData);
      if (success) {
           setFormData({
          email: "",
          password: ""
        })
        onClose();
        navigate("/");
        toast.success('welcome')
      }
      
    } catch (error) {
      toast.error("failed to sign in", error);
    }
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

        <h2 style={{ textAlign: "center", fontWeight: "400" }}>Sign in</h2>
        <p
          style={{
            textAlign: "center",
          }}
        >
          Sign in to continue
        </p>
        <form className="signup-form1" onSubmit={handleSubmit}>
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
           <p style={{ cursor: "pointer", color: "blue" }}
               onClick={() => setForgotOpen(true)}>
              Forgot Password? Click here
            </p>
          <button type="submit">{loading ? "Signing..." : "Sign in"}</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
        <ForgotPasswordModal 
        isOpen={forgotOpen} 
        onClose={() => setForgotOpen(false)} 
      />
    </div>
  );
};

export default LoginModal;
