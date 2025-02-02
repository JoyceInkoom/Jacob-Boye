import React from "react";
import prayerImage from "../assets/images/linda.jpg"; // Replace with your image path

const Prayer = () => {
  const prayerText =
    "To a dear gift from God, a co-laborer, fighter, helper, loyal follower all these years. To celebrate you in a day isn’t enough! Thank you Jacob Boye for all you do. It is beyond words. It takes a heart like yours to do the things you do, and I pray God multiplies you in thousand folds this year and beyond. May your barns never run out, and may you experience the goodness and massive grace of God throughout the years. Thank you for inspiring us to do the above and beyond for God. Thank you for being a great example to follow. You will only rise and never fall. You will only get bigger and greater, Jacob. God bless you. God bless you. God bless you. Every blessing in the scriptures upon you from now… there is an unlocking! Every blessing is given to you from this day. Walk in it!! Thank you for being a great helper. May God bring Pastor Enoch many Jacob Boyes!! I love you so much, and we celebrate you because you are so, so dear to us! 🥹🥹🥹❤️😭🙇🏻‍♂️";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "2rem",
        backgroundColor: "#f9f9f9",
        flexWrap: "wrap",
        flexDirection: "row-reverse", // Default for large screens
      }}
    >
      {/* Image Section */}
      <div
        style={{
          flex: 1,
          maxWidth: "300px",
          boxShadow: "0 4px 8px rgb(30, 64, 175)",
          borderRadius: "10%",
          overflow: "hidden",
          backgroundColor: "rgb(30, 64, 175)",
          marginBottom: "1rem", // Space between image and text on smaller screens
        }}
      >
        <img
          src={prayerImage}
          alt="Prayer"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10%",
          }}
        />
      </div>

      {/* Prayer Section */}
      <div
        style={{
          flex: 1,
          maxWidth: "700px",
          boxShadow: "0 4px 8px rgba(9, 64, 243, 0.9)",
          borderRadius: "12px",
          padding: "2rem",
          backgroundColor: "#fff",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <h2
          style={{
            fontSize: "2rem",
            color: "rgb(30, 64, 175)",
            marginBottom: "1rem",
            textAlign: "center",
            fontWeight: "normal",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Sister Linda's Prayer
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.6",
            color: "#333",
            textAlign: "justify",
            fontFamily: "Georgia, serif",
          }}
        >
          {prayerText}
        </p>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            div[style*="display: flex"] {
              flex-direction: column;
              align-items: center;
            }
            div[style*="max-width: 700px"] {
              text-align: center;
              padding: 1.5rem;
            }
            div[style*="max-width: 300px"] {
              margin-bottom: 2rem; /* Adds space between image and text */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Prayer;
