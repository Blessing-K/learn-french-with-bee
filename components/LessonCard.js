// components/LessonCard.js
import { useState } from "react";

// Event Handler: Toggles the translation when the button is clicked
export default function LessonCard({ lesson }) {
  const [showTranslation, setShowTranslation] = useState(false); // State to track whether the English translation is shown

  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h3>{lesson.french}</h3>
      {showTranslation ? <p>{lesson.english}</p> : <button onClick={() => setShowTranslation(true)}>Show Translation</button>}
    </div>
  );
}
