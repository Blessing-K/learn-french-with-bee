// components/Navbar.js to navigate between components
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Managing theme state

  // Event handler: function to toggle theme color when buton is clicked
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav style={{ backgroundColor: isDarkMode ? "black" : "white"}}> {/* Nav style changes based on isDarkMode state */}
      <button onClick={toggleTheme}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <ul>                                     {/* Links to navigate between pages */} 
        <li><Link href="/">Home</Link></li>
        <li><Link href="/lessons">Lessons</Link></li>
        <li><Link href="/quiz">Quiz</Link></li>
      </ul>
    </nav>
  );
}
