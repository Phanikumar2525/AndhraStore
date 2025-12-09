import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [showDetails, setShowDetails] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <>
      {/* Product Card */}
      <div
        style={{
          border: "1px solid #ddd",
          padding: "12px",
          borderRadius: "10px",
          textAlign: "center",
          transition: "transform 0.2s, box-shadow 0.2s",
          cursor: "pointer",
          backgroundColor: "#fff",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
          onClick={() => setShowDetails(true)} // ✅ click to open details
        />
        <h4 style={{ margin: "10px 0 6px" }}>{product.name}</h4>
        <p style={{ fontWeight: "600", color: "#d35400" }}>₹{product.price}</p>
        <button
          onClick={handleAddToCart}
          style={{
            padding: "8px 12px",
            background: "#d35400",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Add to Cart
        </button>
      </div>

      {/* Description Modal */}
      {showDetails && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setShowDetails(false)}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              width: "90%",
              maxWidth: "500px",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowDetails(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }}
            />
            <h3>{product.name}</h3>
            <p style={{ color: "#7f8c8d", marginBottom: "10px" }}>{product.description}</p>
            <p style={{ fontWeight: "bold", color: "#d35400" }}>₹{product.price}</p>
            <button
              onClick={handleAddToCart}
              style={{
                padding: "10px 16px",
                background: "#d35400",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}
