import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{
      background: "linear-gradient(135deg, #fef5ef 0%, #ffe6d1 100%)",
      padding: "50px 20px",
      fontFamily: "'Segoe UI', sans-serif"
    }}>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        maxWidth: "1200px",
        margin: "0 auto",
        gap: "30px"
      }}>
        
        {/* About Us */}
        <div style={{ flex: "1 1 300px" }}>
          <h3 style={{ marginBottom: "12px", color: "#d35400" }}>About AndhraStore</h3>
          <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#444" }}>
            Bringing the authentic flavors, handicrafts, textiles, and agricultural products of Andhra Pradesh to your doorstep. Explore, shop, and enjoy the rich heritage of Andhra!
          </p>
        </div>

        {/* Contact Info */}
        <div style={{ flex: "1 1 250px" }}>
          <h3 style={{ marginBottom: "12px", color: "#d35400" }}>Contact Us</h3>
          <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#444" }}>
            AndhraStore Pvt Ltd<br/>
            Vijayawada, Andhra Pradesh<br/>
            Email: <a href="mailto:support@andhrastore.com" style={{ color: "#d35400", textDecoration: "none" }}>support@andhrastore.com</a><br/>
            Phone: +91 98765 43210
          </p>
        </div>

        {/* Social Media */}
        <div style={{ flex: "1 1 200px" }}>
          <h3 style={{ marginBottom: "12px", color: "#d35400" }}>Follow Us</h3>
          <div style={{ display: "flex", gap: "15px" }}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{
              color: "#fff",
              background: "#C13584",
              padding: "10px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.3s"
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.2)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{
              color: "#fff",
              background: "#1877F2",
              padding: "10px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.3s"
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.2)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div style={{ textAlign: "center", marginTop: "40px", fontSize: "13px", color: "#777" }}>
        &copy; {new Date().getFullYear()} AndhraStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
