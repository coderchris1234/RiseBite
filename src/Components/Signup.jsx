import React from "react";
import "./Signup.css";
import arrow from '../assets/back.png'

const SignupModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay1">
      <div className="modal-content1">
        <div style={{backgroundColor: "black", margin: '0', padding: '0', height: '69px'}}>
            <h1>RiseBite</h1>
        </div>
        <img style={{marginTop: "10px", marginLeft: "30px"}} onClick={onClose} src={arrow} alt="" />
        <h2 style={{textAlign: "center"}}>Create Account</h2>

        <form className="signup-form1">
            <div>
                <label htmlFor="firstname">First name</label>
                <input type="text" placeholder="Enter your first name" required />
            </div>
            <div>
                <label htmlFor="lastname">Last name</label>
                <input type="text" placeholder="Enter your last name" required />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter your email address" required />
            </div>
            <div>
                <label htmlFor="password">Password(at least 6 characters)</label>
                <input type="password" placeholder="Enter your password" required />
            </div>
            <div>
                <label htmlFor="password">Re-enter your password</label>
                <input type="password" placeholder="Enter your password" required />
            </div>
            <button type="submit">Create account</button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
