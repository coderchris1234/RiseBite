import React, { useEffect, useState } from "react";
import "./VerifyEmail.css";
import { useAuth } from "../Context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const VerifyEmail = ({ openLoginModal }) => {
  const [timeLeft, setTimeLeft] = useState(600);
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { user } = useAuth();
  const email = user?.email || (localStorage.getItem("signupEmail") ?? "");
  const nav = useNavigate();

  const BASE_URL = "https://superinsistent-ying-awhirl.ngrok-free.dev";

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}: ${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    if (value && index < code.length - 1) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const verifyCode = async () => {
    const enteredCode = code.join("");
    console.log("Verifying:", { email, otp: enteredCode });
    setLoading(true);
    setMessage("");
    console.log("Code entered:", enteredCode);
    console.log("Verifying for email:", email, "and OTP:", enteredCode);
      if (!email) {
    toast.error("❌ No email found. Please sign up again.");
    return;
  }

    try {
      const res = await axios.post(`${BASE_URL}/api/risebite/verify-otp`, {
        email,
        otp: enteredCode,
      });

      if (res.data) {
        setMessage(res.data);
        toast.success("✅ Response:" + res.data.message);
        localStorage.removeItem("pendingEmail");
         nav("/");
        openLoginModal();
      }
    } catch (error) {
      const errMsg = error.response?.data?.message || "Verification failed";
      setMessage(errMsg);
      toast.error("❌ Verification failed:" + errMsg);
    } finally {
      setLoading(false);
    }

    console.log("Verifying for email:", email);
  };

  const resendCode = async () => {
    setCode(["", "", "", "", "", ""]);
    setTimeLeft(100);
    console.log("Resend code triggered");
    console.log("Resending to email:", email);
      if (!email) {
    toast.error("❌ No email found. Please sign up again.");
    return;
  }

    try {
      const res = await axios.post(`${BASE_URL}/api/risebite/resend-otp`, {
        email,
      });
      toast.success("📩 A new verification code has been sent to your email.");
      console.log("Resend response:", res.data);
    } catch (error) {
      const errMsg = error.response?.data?.message || "Failed to resend code";
      toast.error("❌ " + errMsg);
    }
  };

  const isCodeComplete = code.every((digit) => digit !== "");

  return (
    <div className="VerifyContainer">
      <div className="verifyHeader">
        <h2>R</h2>
        <h3>RISEBITE</h3>
      </div>
      <h1>Verify your email address</h1>
      <p className="sent">
        We have sent a code to your email address, kindly write the code to
        continue
      </p>
      <p>Expires in {formatTime(timeLeft)} mins</p>
      <div className="InputContainer">
        {code.map((digit, i) => (
          <input
            id={`code-${i}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, i)}
          />
        ))}
      </div>
      <button
        style={{
          cursor: isCodeComplete ? "pointer" : "not-allowed",
          backgroundColor: isCodeComplete ? "black" : "grey",
        }}
        disabled={!isCodeComplete}
        onClick={verifyCode}
      >
        {loading ? "Verifying..." : "Verify"}
      </button>
      {message && <p>{message}</p>}
      <p className="did-not">
        Didn't get the code?{" "}
        <span className="span" onClick={resendCode}>
          Resend Code
        </span>
      </p>
    </div>
  );
};

export default VerifyEmail;
