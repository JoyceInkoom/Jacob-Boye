import React, { useState } from "react";
import Confetti from "react-confetti";

const quizQuestions = [
  {
    question: "What is Jacob's favorite meat?",
    answers: ["Cow", "Chicken", "Pork"],
    correct: "Pork",
  },
  {
    question: "What sports does Jacob likes most?",
    answers: ["Basketball", "Football", "Tennis"],
    correct: "Football",
  },
  {
    question: "Which of the following does Jacob likes playing?",
    answers: ["8-ball", "Oware", "Video Games"],
    correct: "Video Games",
  },
  {
    question: "On a typical evening, where will you find Jacob aside Home, Church or Work?",
    answers: ["Gym", "Playing Football", "Beach"],
    correct: "Playing Football",
  },
  {
    question: "Which Football team does Jacob support?",
    answers: ["Monaco FC", "Barcelona FC", "Chelsea FC"],
    correct: "Monaco FC",
  },
];

const LetsPlayGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showCryingEmoji, setShowCryingEmoji] = useState(false);

  const handleAnswerClick = (answer) => {
    if (answer === quizQuestions[currentQuestion].correct) {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        if (currentQuestion < quizQuestions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          alert("🎉 You've completed the quiz! You trully Know Jacob 🎉");
        }
      }, 4000); // Increased confetti duration
    } else {
      setShowCryingEmoji(true);
      setTimeout(() => setShowCryingEmoji(false), 1500);
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
        textAlign: "center",
        marginBottom: "3rem",
        padding: "2rem",
        backgroundColor: "#f4f4f4",
        borderRadius: "50px",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        position: "relative",
      }}
    >
      {showConfetti && <Confetti width={600} height={400} />}
      {showCryingEmoji && (
        <div
          style={{
            fontSize: "3rem",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
        >
          😭
        </div>
      )}

      {/* Heading and Introduction */}
      <h1 style={{ fontSize: "2.5rem", color: "#333", marginBottom: "1rem" }}>
        Let's Play a Game! 🎮
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "2rem" }}>
       How much do you know Jacob? Let's prove how much you say you know him!!!
      </p>

      {/* Question */}
      <h2 style={{ fontSize: "1.8rem", color: "#333", marginBottom: "1rem" }}>
        {quizQuestions[currentQuestion].question}
      </h2>

      {/* Answers */}
      <div>
        {quizQuestions[currentQuestion].answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(answer)}
            style={{
              display: "block",
              width: "80%",
              margin: "10px auto 15px", // Added bottom margin
              padding: "12px",
              backgroundColor: "rgb(30, 64, 175)",
              color: "#fff",
              fontSize: "1.2rem",
              border: "none",
              borderRadius: "20px", // Rounder buttons
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LetsPlayGame;
