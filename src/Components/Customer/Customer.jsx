import "./Customer.css";
import list from "../../assets/list.png";
const Customer = () => {
  return (
    <>
      <div className="customer-container">
        <div className="customer">
          <h2>What Our Customers Say</h2>
          <p>Read reviews from our happy customers</p>
        </div>
        <img src={list} alt="" />
      </div>
      <hr />
    </>
  );
};

export default Customer;
