import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "rgb(30, 64, 175)", color: "#fff", padding: "2rem 0", width: "100%", margin: 0 }}>
      <div style={{
        display: "flex", 
        justifyContent: "space-between", 
        padding: "0 2rem", 
        flexWrap: "wrap",
        width: "100%",
        margin: 0
      }}>
        <div style={{ flex: "1 1 300px", marginBottom: "1rem" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Jacob Boye</h3>
          <p style={{ fontSize: "1rem" }}>
            Special Birthday Wishes from all of us in Auxano Fellowship. 
          </p>
        </div>

        <div style={{ flex: "1 1 300px", marginBottom: "1rem" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Send an email</h3>
          <p style={{ fontSize: "1rem" }}>Email: jacobbye43@gmail.com</p>
          <p style={{ fontSize: "1rem" }}>Phone: (+233) 5495-32758</p>
        </div>

        <div style={{ flex: "1 1 300px", marginBottom: "1rem" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Follow Jacob</h3>
          <div>
            <a href="https://twitter.com" style={{ color: "#fff", marginRight: "1rem" }}>
              <FaTwitter style={{ fontSize: "1.5rem" }} />
            </a>
            
            <a href="https://linkedin.com" style={{ color: "#fff", marginRight: "1rem" }}>
              <FaLinkedin style={{ fontSize: "1.5rem" }} />
            </a>
            <a href="mailto:jacobbye43@gmail.com" style={{ color: "#fff" }}>
              <FaEnvelope style={{ fontSize: "1.5rem" }} />
            </a>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.875rem", margin: 0 }}>
        <p style={{ color: "#f39c12" }}>© 2025 Jacob Boye. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
