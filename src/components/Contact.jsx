import React, { useState } from "react";
import emailjs from "emailjs-com";
import backgroundImage from "../assets/images/hero4.jpg";  // Replace with actual background image path

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iulq47s", // EmailJS service ID
        "template_xybs4jw", // EmailJS template ID
        e.target,
        "0qtOWaEn6q0oW-tat" // EmailJS user ID
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          alert("An error occurred. Please try again.");
        }
      );
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        padding: "4rem 2rem",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "1rem" }}>
        Send Jacob A Message
      </h2>
      <p style={{ textAlign: "center", fontSize: "1.2rem", marginBottom: "2rem" }}>
        Feel free to reach out.
      </p>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: "100%",
        }}
      >
        <label style={{ marginBottom: "0.5rem" }}>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{
            padding: "0.8rem",
            marginBottom: "1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1rem",
          }}
        />

        <label style={{ marginBottom: "0.5rem" }}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{
            padding: "0.8rem",
            marginBottom: "1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1rem",
          }}
        />

        <label style={{ marginBottom: "0.5rem" }}>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          style={{
            padding: "0.8rem",
            marginBottom: "1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1rem",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "0.8rem 1.5rem",
            backgroundColor: "rgb(30, 64, 175)",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            fontSize: "1rem",
            cursor: "pointer",
            alignSelf: "center",
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
