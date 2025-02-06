// pages/lessons.js
import LessonCard from "../components/LessonCard";

// Array of lessons to pass as props
const lessonsData = [
  { id: 1, french: "Bonjour", english: "Hello" },
  { id: 2, french: "Merci", english: "Thank you" },
  { id: 3, french: "Au revoir", english: "Goodbye" },
];

export default function Lessons() {
  return (
    <div>
      <h1>French Lessons</h1>  {/* Passing lesson as a prop to LessonCard */}
      {lessonsData.map((lesson) => (  
        <LessonCard key={lesson.id} lesson={lesson} />  
      ))}
    </div>
  );
}
