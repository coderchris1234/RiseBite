import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = ({ totalAmount = 6800, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(288);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isExpired = timeLeft <= 0;

  return (
    <div className="payment_overlay">
      <div className="payment_modal">
        <div className="payment_header">
          <button className="payment_back_btn" onClick={onClose}>
            <IoIosArrowBack size={22} />
          </button>

          <div className="payment_logo">R</div>

          <div className="payment_user_info_right">
            <h2 className="payment_email">Isaiahemmanuel46@gmail.com</h2>
            <p className="payment_pay_text">
              Pay NGN{" "}
              <span className="payment_amount_value">
                {totalAmount.toLocaleString()}
              </span>
            </p>
          </div>
        </div>

        <div className="payment_divider"></div>

        <p className="payment_transfer_text">
          Transfer NGN {totalAmount.toLocaleString()} to Risebites Checkout
        </p>

        <div className="payment_body_box">
          <div className="payment_first_row">
            <span className="payment_info_label">Bank Name</span>
            <span className="payment_expiry_text">
              {isExpired
                ? "Expired"
                : `Expires in ${minutes}:${
                    seconds < 10 ? "0" : ""
                  }${seconds} mins`}
            </span>
          </div>
          <span className="payment_info_value">
            Risebites Technologies Ltd.
          </span>

          <div className="payment_info_row">
            <span className="payment_info_label">Account Number</span>
            <span className="payment_info_value">123356769</span>
          </div>

          <div className="payment_info_row">
            <span className="payment_info_label">Amount</span>
            <span className="payment_info_amount">
              N{totalAmount.toLocaleString()}
            </span>
          </div>
        </div>

        <button
          className={`payment_submit_btn ${
            isExpired ? "payment_disabled" : ""
          }`}
          disabled={isExpired}
          onClick={() => setShowConfirm(true)}
        >
          I've sent the money
        </button>

        <p className="payment_helper_text">
          Click this option to verify if you have made the payment
        </p>
      </div>

      {showConfirm && (
        <div className="confirm_overlay">
          <div className="confirm_modal">
            <h2>✅ WE HAVE CONFIRMED PAYMENT</h2>
            <p>
              You will receive your package in the next <b>15 minutes</b>.
              <br />
              Call our service Number: <b>08116754005</b> to track your order.
            </p>
            <button
              className="confirm_close_btn"
              onClick={() => navigate("/menu")}
              // onClick={() => setShowConfirm(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
