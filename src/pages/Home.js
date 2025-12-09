import React from "react";
import AndhraProductList from "../components/AndhraProductList";

export default function Home() {
  // Scroll to products section
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#fce8d5",
          padding: "60px 20px",
          textAlign: "center",
          borderRadius: "12px",
          marginBottom: "30px",
        }}
      >
        <h1 style={{ fontSize: "36px", color: "#d35400", marginBottom: "20px" }}>
          Welcome to Andhra Store
        </h1>
        <p style={{ fontSize: "18px", color: "#7f8c8d", marginBottom: "30px" }}>
          Discover authentic foods, sweets, handicrafts, and textiles from Andhra Pradesh
        </p>
        <button
          onClick={scrollToProducts}
          style={{
            padding: "12px 30px",
            backgroundColor: "#d35400",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "600",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(211,84,0,0.3)",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#e67e22")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#d35400")}
        >
          Explore Products
        </button>
      </section>

      {/* Products Section */}
      <section id="products" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <AndhraProductList />
      </section>
    </div>
  );
}
