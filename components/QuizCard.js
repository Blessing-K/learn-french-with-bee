// components/QuizCard.js
import { useState } from "react";

export default function QuizCard({ question, correctAnswer }) { // receives question and correctAnswer as props
  const [answer, setAnswer] = useState(""); // State to track user input
  const [message, setMessage] = useState(""); // State to store feedback message

  // Event Handler: Checks the answer when the button is clicked
  const checkAnswer = () => {
    if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setMessage("✅ Correct!"); 
    } else {
      setMessage("❌ Try again.");
    }
  };

  // Event Handler: Updates state when user types in the input field
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
      {/*  CONDITIONAL RENDERING: Show one of two messages when user submits an answer */}
      <p>{message}</p>
    </div>
  );
}



