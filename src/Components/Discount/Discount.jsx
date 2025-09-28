import { useState } from "react";
import "./Discount.css";
import { MdOutlineDiscount } from "react-icons/md";
import SubscribeModal from "./Pop";
import discount from '../../assets/discount.png'
const Discount = () => {
  const [open, setOpen] = useState(false);
  const handleSubscribe = () => {
    setOpen(true);
  };
  return (
    <div className="discount-container">
      <div className="discount-content">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest offers</p>
        <button onClick={handleSubscribe}>Subscribe</button>
        <SubscribeModal isOpen={open} onClose={() => setOpen(false)} />
      </div>
      <div className="see">
        <img src={discount} alt="" />
      </div>
    </div>
  );
};

export default Discount;
