// pages/quiz.js
import Navbar from "../components/Navbar";
import QuizCard from "../components/QuizCard";

export default function Quiz() {
  const quizQuestions = [
    { id: 1, question: 'What is "Bonjour" in English?', correctAnswer: "Hello" },
    { id: 2, question: 'How do you say "Thank you" in French?', correctAnswer: "Merci" },
    { id: 3, question: 'What is "Goodbye" in French?', correctAnswer: "Au revoir" },
  ];

  return (
    <div>
      <Navbar />
      <h1>French Quiz</h1>
      {quizQuestions.map((q) => (
        <QuizCard key={q.id} question={q.question} correctAnswer={q.correctAnswer} />
      ))}
    </div>
  );
}
