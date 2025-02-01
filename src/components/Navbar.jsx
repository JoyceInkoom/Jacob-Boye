import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "15px 5%",
        transition: "background-color 0.3s ease-in-out",
        backgroundColor: scrolled ? "rgba(30, 64, 175, 0.8)" : "transparent",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1001,
        boxSizing: "border-box",
      }}
    >
      {/* Logo */}
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Jacob Boye
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div
        style={{
          display: "none", 
          cursor: "pointer", 
          fontSize: "30px", 
        }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776;
      </div>

      {/* Nav Links */}
      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
          flexDirection: "row", // For larger screens, links should be in a row
          marginTop: "0",
          padding: "0",
          display: menuOpen ? "block" : "flex", // Toggled by menuOpen state
        }}
      >
        {["Home", "About", "Prayer", "Prophecies"].map((item, index) => (
          <li key={index}>
            <Link
              to={`/`}
              style={{
                color: "white",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#f39c12")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
