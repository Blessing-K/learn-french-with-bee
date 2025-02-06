import { useState } from "react";

export default function LessonCard({ lesson }) {
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h3>{lesson.french}</h3>
      {showTranslation ? <p>{lesson.english}</p> : <button onClick={() => setShowTranslation(true)}>Show Translation</button>}
    </div>
  );
}
