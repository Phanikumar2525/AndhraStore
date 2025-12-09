import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart, FaHome } from "react-icons/fa";

export default function Navbar() {
  const { items } = useCart();
  const totalQty = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 24px",
      background: "#fef5ef",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      position: "sticky",
      top: 0,
      zIndex: 1000
    }}>
      {/* Brand */}
      <Link to="/" style={{ textDecoration: "none", fontWeight: "bold", fontSize: "28px", color: "#d35400", fontFamily: "'Segoe UI', sans-serif" }}>
        AndhraStore
      </Link>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center", fontSize: "16px" }}>
        {/* Home Link with Icon */}
        <Link 
          to="/" 
          style={{ display: "flex", alignItems: "center", gap: "6px", textDecoration: "none", color: "#333", transition: "color 0.3s" }}
          onMouseEnter={e => e.target.style.color = "#d35400"}
          onMouseLeave={e => e.target.style.color = "#333"}
        >
          <FaHome /> Home
        </Link>

        {/* Cart Link with Icon */}
        <Link 
          to="/cart" 
          style={{ display: "flex", alignItems: "center", gap: "6px", textDecoration: "none", color: "#333", transition: "color 0.3s" }}
          onMouseEnter={e => e.target.style.color = "#d35400"}
          onMouseLeave={e => e.target.style.color = "#333"}
        >
          <FaShoppingCart /> Cart ({totalQty})
        </Link>
      </div>
    </nav>
  );
}
