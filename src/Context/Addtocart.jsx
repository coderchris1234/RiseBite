import React, { createContext, useState } from "react";

export const Addtocart = createContext();

export const AddtocartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item
  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  // Remove item
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Addtocart.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </Addtocart.Provider>
  );
};
