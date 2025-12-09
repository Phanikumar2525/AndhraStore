import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // Add a product to cart
  const addToCart = (product) => {
    setItems((prev) => {
      const exist = prev.find((i) => i.id === product.id);
      if (exist) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  // Increase quantity
  const increase = (id) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
    );
  };

  // Decrease quantity
  const decrease = (id) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0) // remove item if qty becomes 0
    );
  };

  // Remove a product completely
  const removeFromCart = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  // Clear the cart
  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider
      value={{ items, addToCart, increase, decrease, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
