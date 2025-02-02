import React, { useState, useEffect } from "react";

const Guestbook = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("guestbookMessages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      const newMessage = { name, message, image };
      const updatedMessages = [newMessage, ...messages];
      setMessages(updatedMessages);
      localStorage.setItem("guestbookMessages", JSON.stringify(updatedMessages));
      setName("");
      setMessage("");
      setImage(null);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        textAlign: "center",
        background: "#fff",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(30, 64, 175, 0.9)",
      }}
    >
      <h2 style={{ color: "rgb(30, 64, 175)", marginBottom: "1rem" }}>Virtual Prophecy book </h2>
      <p style={{ color: "#555", marginBottom: "1.5rem" }}>
        Leave a special prayer or prophecy for the birthday celebrant!
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        <textarea
          placeholder="Your Prayer or Prophecy 😊"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="3"
          style={{
            width: "90%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{
            marginBottom: "10px",
            padding: "10px",
            width: "90%",
            borderRadius: "8px",
          }}
        />
        <button
          type="submit"
          style={{
            background: "rgb(30, 64, 175)",
            color: "#fff",
            padding: "10px 15px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          ✨ Click to send ✨
        </button>
      </form>

      <div style={{ marginTop: "2rem" }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              background: "rgb(30, 64, 175)",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "8px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
            }}
          >
            {msg.image && (
              <img
                src={msg.image}
                alt="User Avatar"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
            )}
            <div>
              <strong style={{ color: "white" }}>{msg.name}:</strong>
              <p style={{ color: "white", marginTop: "5px" }}>{msg.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guestbook;
