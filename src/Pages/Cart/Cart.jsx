import React, { useContext, useState } from "react";
import { Addtocart } from "../../Context/Addtocart.jsx";
import "./Cart.css";
import { FaXmark } from "react-icons/fa6";
import Payment from "./Payment.jsx";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
  } = useContext(Addtocart);

  const [showPayment, setShowPayment] = useState(false);

  return (
    <div className="cart_container">
      <div className="cart_header">
        <h1>CART</h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty_cart">
          <h2>No items in your cart yet</h2>
          <p>Start adding some delicious items from our menu!</p>
        </div>
      ) : (
        <div className="cart_content">
          <div className="cart_table_section">
            <div className="cart_table">
              <div className="cart_header_row">
                <span>PRODUCT</span>
                <span>PRICE</span>
                <span>QUANTITY</span>
                <span>SUBTOTAL</span>
              </div>

              <div className="cart_body">
                {cartItems.map((item, index) => (
                  <div key={index} className="cart_row">
                    <div className="product_cell">
                      <button
                        onClick={() => removeFromCart(item.food)}
                        className="removebtn"
                      >
                        <FaXmark className="close_icon" />
                      </button>
                      <img
                        src={item.image}
                        alt={item.food}
                        className="product_img"
                      />
                      <span className="product_name">{item.food}</span>
                    </div>

                    <div className="price_cell">
                      {typeof item.price === "string"
                        ? item.price
                        : `NGN ${item.price.toLocaleString()}`}
                    </div>

                    <div className="quantity_cell">
                      <div className="quantity_controls">
                        <button
                          onClick={() =>
                            updateQuantity(item.food, item.quantity - 1)
                          }
                          className="qty_btn"
                        >
                          -
                        </button>
                        <span className="qty_display">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.food, item.quantity + 1)
                          }
                          className="qty_btn"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="subtotal_cell">
                      NGN{" "}
                      {(
                        parseFloat(
                          typeof item.price === "string"
                            ? item.price.replace(/[^\d.]/g, "")
                            : item.price
                        ) * item.quantity
                      ).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="cart_totals_section">
            <div className="cart_totals_box">
              <h2>CART TOTALS</h2>
              <div className="totals_row">
                <span className="totals_label">SUB TOTAL</span>
                <div className="totals_values">
                  {cartItems.map((item, index) => (
                    <div key={index} className="total_value">
                      NGN
                      {(
                        parseFloat(
                          typeof item.price === "string"
                            ? item.price.replace(/[^\d.]/g, "")
                            : item.price
                        ) * item.quantity
                      ).toLocaleString()}
                    </div>
                  ))}
                </div>
              </div>
              <div className="totals_row total_row">
                <span className="totals_label">TOTAL</span>
                <span className="total_amount">
                  NGN{parseFloat(getTotalPrice()).toLocaleString()}
                </span>
              </div>

              <button
                className="place_order_btn"
                onClick={() => setShowPayment(true)}
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      )}

      {showPayment && (
        <Payment
          totalAmount={parseFloat(getTotalPrice())}
          onClose={() => setShowPayment(false)}
        />
      )}
    </div>
  );
};

export default Cart;
