// components/Navbar.js to navigate between components
import { useState } from "react";
import Link from "next/link";

export default function Navbar({ initialTheme }) { // Receives initial theme as a prop
  const [isDarkMode, setIsDarkMode] = useState(initialTheme); // manages theme state

  // Event handler: function to toggle theme color when button is clicked
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); 
  };

  return (
    <nav style={{ backgroundColor: isDarkMode ? "black" : "white" }}>
      <button onClick={toggleTheme}>
        {/* CONDITIONAL RENDERING: Change button text based on dark mode state */}
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/lessons">Lessons</Link></li>
        <li><Link href="/quiz">Quiz</Link></li>
      </ul>
    </nav>
  );
}
