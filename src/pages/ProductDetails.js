import React from "react";
import { useParams } from "react-router-dom";
import andhraProducts from "../data/andhraProducts";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = andhraProducts.find(p => p.id === Number(id));
  const { addToCart } = useCart();

  if (!product) return <div>Product not found</div>;

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px", flexWrap: "wrap" }}>
      <img src={product.image} alt={product.name} style={{ width: 320, borderRadius: "12px" }} />
      <div style={{ flex: 1 }}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p><strong>Origin:</strong> {product.place}</p>
        <h3>₹{product.price}</h3>
        <button onClick={() => addToCart(product)} style={{ padding: "10px 16px", background: "#d35400", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}>Add to Cart</button>
      </div>
    </div>
  );
}
