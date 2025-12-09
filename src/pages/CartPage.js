import React from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  // Hooks MUST be called inside the component
  const { items, increase, decrease, removeFromCart, clearCart } = useCart();

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  if (items.length === 0)
    return (
      <div style={{ textAlign: "center", padding: "60px 20px", fontSize: "18px", color: "#555" }}>
        🛒 <b>Your cart is empty!</b>
        <p style={{ marginTop: "8px" }}>Start adding your favorite Andhra products!</p>
      </div>
    );

  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "auto" }}>
      <h2 style={{ color: "#d35400", textAlign: "center", marginBottom: "25px" }}>🛍️ Your Shopping Cart</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          background: "#fff7f1",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        {items.map((it) => (
          <div
            key={it.id}
            style={{ display: "flex", alignItems: "center", gap: "20px", padding: "12px 0", borderBottom: "1px solid #eee" }}
          >
            <img
              src={it.image}
              alt={it.name}
              width={90}
              height={90}
              style={{ objectFit: "cover", borderRadius: "10px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}
            />

            <div style={{ flex: 1 }}>
              <h4 style={{ margin: "0 0 6px", color: "#333" }}>{it.name}</h4>
              <p style={{ margin: "0 0 10px", color: "#777" }}>₹{it.price}</p>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button
                  onClick={() => decrease(it.id)}
                  style={{
                    background: "#f39c12",
                    color: "#fff",
                    border: "none",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  -
                </button>
                <span style={{ fontWeight: "600" }}>{it.qty}</span>
                <button
                  onClick={() => increase(it.id)}
                  style={{
                    background: "#27ae60",
                    color: "#fff",
                    border: "none",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  +
                </button>
              </div>
            </div>

            <div style={{ textAlign: "right" }}>
              <p style={{ margin: "0 0 8px", fontWeight: "600" }}>₹{it.price * it.qty}</p>
              <button
                onClick={() => removeFromCart(it.id)}
                style={{
                  background: "#e74c3c",
                  color: "#fff",
                  border: "none",
                  padding: "6px 10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "25px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          background: "#fff3e6",
          padding: "15px 20px",
          borderRadius: "12px",
          boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
        }}
      >
        <h3 style={{ margin: 0 }}>Subtotal: ₹{subtotal}</h3>
        <button
          onClick={clearCart}
          style={{
            background: "#e74c3c",
            color: "#fff",
            border: "none",
            padding: "8px 16px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
