import React from "react";
import image1 from "../assets/images/hero1.jpg";
import image2 from "../assets/images/hero2.jpg";
import image3 from "../assets/images/hero3.jpg";
import image4 from "../assets/images/hero4.jpg";
import image5 from "../assets/images/hero5.jpg";
import image6 from "../assets/images/img1.jpg";
import image7 from "../assets/images/img2.jpg";
import image10 from "../assets/images/img5.jpg";

const Gallery = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image10];

  return (
    <div
      style={{
        backgroundImage: "url('../assets/images/your-background-image.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        padding: "2rem",
      }}
    >
      <h2 style={{ textAlign: "center", color: "black", fontSize: "2.5rem", marginBottom: "1rem" }}>
        Jacob Boye
      </h2>
      <p style={{ textAlign: "center", color: "black", fontSize: "1.2rem", marginBottom: "2rem" }}>
        Meet our very special gift. A man of grace!!
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1rem",
          justifyItems: "center",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              height: "auto",
              overflow: "hidden",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
