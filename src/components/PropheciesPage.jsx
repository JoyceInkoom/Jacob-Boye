import React from "react";
import backgroundImage from "../assets/images/hero3.jpg"; // Import background image

const Prophecies = () => {
  const prophecies = [
    "Proverbs 4:18: But the path of the just is as the shining light, that shineth more and more unto the perfect day.",
    "Isaiah 61:3: To appoint unto them that mourn in Zion, to give unto them beauty for ashes, the oil of joy for mourning, the garment of praise for the spirit of heaviness; that they might be called trees of righteousness, the planting of the LORD, that he might be glorified.",
    "Psalm 45:7: Thou lovest righteousness, and hatest wickedness: therefore God, thy God, hath anointed thee with the oil of gladness above thy fellows. You love justice and hate evil. Therefore God, your God, has anointed you, pouring out the oil of joy on you more than on anyone else. You love the right and hate the wrong.",
    "Ephesians 1:3: Blessed be the God and Father of our Lord Jesus Christ, who hath blessed us with all spiritual blessings in heavenly places in Christ. God will give you all spiritual blessings and it’ll be tangible.",
    "In this New year, God is going to strengthen your hands to do more and enjoy more of his blessings and walk in them and experience them. The blessings of God be made manifest for you.",
    "The peace of God that Passeth all understanding rest upon you and your family.",
    "You’re strengthened.",
    "You’re protected.",
    "Opportunities come to you.",
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "3rem",
        textAlign: "center",
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif", // Modern font
      }}
    >
      <h1
        style={{
          color: "black",
          fontSize: "2.3rem",
          fontWeight: "500",
          marginBottom: "1rem",
        }}
      >
        Prophecies
      </h1>
      <p
        style={{
          color: "black",
          fontSize: "1.2rem",
          fontWeight: "400",
          marginBottom: "2rem",
        }}
      >
        This is the word of God to you.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.2rem",
          maxWidth: "1000px",
          margin: "0 auto",
          paddingBottom: "3rem",
        }}
      >
        {prophecies.map((prophecy, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              padding: "1.5rem",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              fontWeight: "400",
              lineHeight: "1.6",
              fontSize: "1rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
            }}
          >
            <p style={{ fontSize: "1.1rem", fontStyle: "italic" }}>{prophecy}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prophecies;
