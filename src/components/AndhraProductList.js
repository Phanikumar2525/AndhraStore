import React, { useState } from "react";
import andhraProducts from "../data/andhraProducts";
import ProductCard from "./ProductCard";

export default function AndhraProductList() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const categories = ["All", ...new Set(andhraProducts.map((p) => p.category))];

  // ✅ Filter by category
  const filteredProducts =
    selectedCategory && selectedCategory !== "All"
      ? andhraProducts.filter((p) => p.category === selectedCategory)
      : andhraProducts;

  // ✅ Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* 🧂 Category Filter */}
      <div style={{ marginBottom: "30px" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentPage(1);
              setSelectedProduct(null);
            }}
            style={{
              margin: "8px",
              padding: "10px 18px",
              backgroundColor: selectedCategory === cat ? "#d35400" : "#fff",
              color: selectedCategory === cat ? "#fff" : "#d35400",
              border: "2px solid #d35400",
              borderRadius: "30px",
              cursor: "pointer",
              fontWeight: "600",
              transition: "all 0.3s ease",
            }}
          >
            {cat}
          </button>
        ))}
        {selectedCategory && selectedCategory !== "All" && (
          <button
            onClick={() => {
              setSelectedCategory("");
              setSelectedProduct(null);
              setCurrentPage(1);
            }}
            style={{
              margin: "8px",
              padding: "10px 18px",
              backgroundColor: "#f1c40f",
              color: "#fff",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Clear Filter ✖
          </button>
        )}
      </div>

      {/* 🛍️ Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            currentProducts.length <= 2
              ? "repeat(auto-fit, minmax(280px, 400px))"
              : "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {currentProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            style={{
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* 📄 Pagination */}
      {totalPages > 1 && (
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            style={{
              padding: "8px 14px",
              borderRadius: "50px",
              border: "1px solid #ccc",
              background: currentPage === 1 ? "#f1f1f1" : "#fff",
              color: currentPage === 1 ? "#aaa" : "#333",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
            }}
          >
            ⬅ Prev
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              style={{
                padding: "8px 14px",
                borderRadius: "50%",
                border: "1px solid #ccc",
                background: num === currentPage ? "#d35400" : "#fff",
                color: num === currentPage ? "#fff" : "#333",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow:
                  num === currentPage ? "0 4px 10px rgba(0,0,0,0.15)" : "none",
              }}
            >
              {num}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            style={{
              padding: "8px 14px",
              borderRadius: "50px",
              border: "1px solid #ccc",
              background: currentPage === totalPages ? "#f1f1f1" : "#fff",
              color: currentPage === totalPages ? "#aaa" : "#333",
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Next ➡
          </button>
        </div>
      )}

      {/* 🪄 Product Modal */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              width: "90%",
              maxWidth: "500px",
              textAlign: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            />
            <h2 style={{ color: "#d35400" }}>{selectedProduct.name}</h2>
            <p style={{ fontSize: "18px", color: "#555" }}>
              ₹{selectedProduct.price}
            </p>
            <p style={{ color: "#777", fontSize: "16px", margin: "10px 0" }}>
              {selectedProduct.description}
            </p>
            <button
              onClick={() => setSelectedProduct(null)}
              style={{
                marginTop: "15px",
                padding: "10px 18px",
                background: "#d35400",
                color: "#fff",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
