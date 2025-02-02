import React, { useState, useEffect } from "react";

import image1 from "../assets/images/hero1.jpg";
import image2 from "../assets/images/hero2.jpg";
import image3 from "../assets/images/hero3.jpg";
import image4 from "../assets/images/hero4.jpg";
import image5 from "../assets/images/hero5.jpg";

const Home = () => {
  const images = [image1, image2, image3, image4, image5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    document.body.style.overflowX = "hidden"; // Prevents horizontal scroll

    const interval = setInterval(() => {
      setAnimateText(false); // Reset animation before changing image
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setAnimateText(true); // Restart animation
      }, 500); // Short delay for smooth transition
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Background Slideshow */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover", // Ensures the image fits the container properly without losing aspect ratio
            transition: "background-image 1s ease-in-out",
          }}
        ></div>

        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        ></div>

        {/* Moving Text Content */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: animateText ? "10%" : "-100%",
            transform: "translateY(-50%)",
            color: "#fff",
            maxWidth: "600px",
            opacity: 1,
            whiteSpace: "nowrap",
            transition: "left 1.5s ease",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Happy Birthday Bro Jacob Boye
          </h1>
          <p style={{ fontSize: "clamp(1rem, 3vw, 1.2rem)", marginBottom: "30px" }}>
            From all of us in Auxano Fellowship...You are very dear to us!
          </p>
          <button
            style={{
              padding: "12px 24px",
              fontSize: "1rem",
              color: "#fff",
              backgroundColor: "rgb(30, 64, 175)",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "rgb(30, 64, 175)")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "rgb(30, 64, 175)")}
          >
            We Love You!!!
          </button>
        </div>
      </div>

      {/* Rest of the content will now be able to appear below the hero section */}
    </div>
  );
};

export default Home;
