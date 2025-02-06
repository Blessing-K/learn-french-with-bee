// components/QuizCard.js
import { useState } from "react";

export default function QuizCard({ question, correctAnswer }) {
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");

  const checkAnswer = () => {
    if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setMessage("✅ Correct!");
    } else {
      setMessage("❌ Try again.");
    }
  };

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
    setMessage(""); // Clear message when user types a new answer
  };

  return (
    <div>
      <p>{question}</p>
      <input
        type="text"
        value={answer}
        onChange={handleInputChange}
        placeholder="Type your answer..."
      />
      <button onClick={checkAnswer}>Submit</button>
      <p>{message}</p>
    </div>
  );
}



