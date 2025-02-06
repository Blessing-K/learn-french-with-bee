// pages/lessons.js
import Navbar from "../components/Navbar";
import LessonCard from "../components/LessonCard";

const lessonsData = [
  { id: 1, french: "Bonjour", english: "Hello" },
  { id: 2, french: "Merci", english: "Thank you" },
  { id: 3, french: "Au revoir", english: "Goodbye" },
];

export default function Lessons() {
  return (
    <div>
      <Navbar />
      <h1>French Lessons</h1>
      {lessonsData.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </div>
  );
}
