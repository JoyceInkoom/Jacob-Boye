import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const MemoryWall = () => {
  const [memories, setMemories] = useState([]);
  const [newMemory, setNewMemory] = useState({ title: "", content: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMemory((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addMemory = () => {
    if (newMemory.title && newMemory.content) {
      setMemories([...memories, newMemory]);
      setNewMemory({ title: "", content: "" });
    }
  };

  const deleteMemory = (index) => {
    setMemories(memories.filter((_, i) => i !== index));
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Memory Wall</h2>
      
      <div style={formContainerStyle}>
        <input
          type="text"
          name="title"
          value={newMemory.title}
          onChange={handleInputChange}
          placeholder="Memory Title"
          style={inputStyle}
        />
        <textarea
          name="content"
          value={newMemory.content}
          onChange={handleInputChange}
          placeholder="Describe your memory"
          style={{ ...inputStyle, height: "100px" }}
        />
       
      </div>
      <button onClick={addMemory} style={roundButtonStyle}>Post Memory</button>
      <div style={memoriesContainerStyle}>
        {memories.length === 0 ? (
          <p>No memories posted yet!</p>
        ) : (
          memories.map((memory, index) => (
            <div key={index} style={memoryCardStyle}>
              <h3 style={memoryTitleStyle}>{memory.title}</h3>
              <p style={memoryContentStyle}>{memory.content}</p>
              <button
                onClick={() => deleteMemory(index)}
                style={deleteButtonStyle}
              >
                <FaTrashAlt />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const containerStyle = {
  textAlign: "center",
  marginTop: "20px",
  marginBottom: "40px",
  padding: "10px",
};

const headerStyle = {
  fontSize: "2.5rem",
  marginBottom: "20px",
  color: "#333",
};

const formContainerStyle = {
  marginBottom: "30px",
};

const inputStyle = {
  padding: "10px",
  fontSize: "1rem",
  margin: "10px 0",
  width: "60%",
  borderRadius: "5px",
  border: "1px solid rgb(30, 64, 175)",
};

const roundButtonStyle = {
  padding: "15px",
  fontSize: "1rem",
  backgroundColor: "rgb(30, 64, 175)",
  color: "#fff",
  border: "none",
  borderRadius: "20px",
  cursor: "pointer",
  marginTop: "2px",
  width: "120px",
  height: "60px",
};

const memoriesContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "20px",
  marginTop: "20px",

};

const memoryCardStyle = {
  backgroundColor: "#fff",
  borderRadius: "10px",
  padding: "15px",
  boxShadow: "0 4px 8px rgb(30, 64, 175)",
  textAlign: "left",
  position: "relative",
};

const memoryTitleStyle = {
  fontSize: "1.5rem",
  marginBottom: "10px",
  color: "#333",
};

const memoryContentStyle = {
  fontSize: "1.1rem",
  lineHeight: "1.6",
  color: "#555",
};

const deleteButtonStyle = {
  backgroundColor: "transparent",
  border: "none",
  color: "#e74c3c",
  position: "absolute",
  top: "10px",
  right: "10px",
  fontSize: "1.5rem",
  cursor: "pointer",
};

export default MemoryWall;
