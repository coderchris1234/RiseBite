import React, { createContext, useState } from "react";

export const Addtocart = createContext();

export const AddtocartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.food === item.food);

      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.food === item.food
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemFood) => {
    setCartItems((prev) => prev.filter((item) => item.food !== itemFood));
  };

  const updateQuantity = (itemFood, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemFood);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) =>
        item.food === itemFood ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => {
        const price = parseFloat(
          typeof item.price === "string"
            ? item.price.replace("$", "")
            : item.price
        );
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <Addtocart.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </Addtocart.Provider>
  );
};
