import React, { useState } from "react";
import arrow from "../assets/back.png";
import key from "../assets/Key.png";
import { toast } from "react-toastify";

const ForgotPasswordModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.warning("Email is required");
      return;
    }

    // Later you can call your backend API here
    toast.success(`Password reset link sent to ${email}`);
    setEmail("");
    onClose();
  };

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

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            fontFamily: 'Roboto'
          }}
        >
          <img src={key} alt="" />
          <h2 style={{ textAlign: "center", fontWeight: "400"}}>
            Forgot Password
          </h2>
        </div>
        <p style={{ textAlign: "center", width: "300px", marginLeft: '80px', fontWeight: '400', fontSize: '16px', lineHeight: '150%' }}>
          Enter your registered email address, and we’ll send you a Code to
          reset your password
        </p>

        <form className="signup-form1" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <button type="submit">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
