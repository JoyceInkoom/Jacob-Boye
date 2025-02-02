import React from "react";
import aboutImage from "../assets/images/hero2.jpg"; // Replace with the actual image path

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "4rem 5rem",
        backgroundColor: "#fff",
        flexWrap: "wrap"
      }}
    >
      <div
        style={{
          flex: 1,
          maxWidth: "500px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          padding: "2rem",
          backgroundColor: "#f4f4f4",
          marginRight: "2rem",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", color: "rgb(30, 64, 175)", marginBottom: "1rem" }}>
          About Jacob
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.6",
            color: "#333",
            marginBottom: "2rem",
          }}
        >
          Jacob is a rare gift, a man whose kindness, generosity, and meekness shine brightly. He is full of love, compassion, and grace, always putting others before himself. Soft-spoken yet deeply impactful. His passion for God's kingdom is unwavering. He follows with dedication and pushes the gospel forward with every step. Jacob is family. To Auxano, he is our treasure, a blessing we cherish deeply. We love him dearly and thank God for his life.
        </p>
      </div>

      <div
        style={{
          flex: 1,
          maxWidth: "400px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <img
          src={aboutImage}
          alt="About"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default About;
