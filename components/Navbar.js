// components/Navbar.js
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Managing menu state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <button onClick={toggleMenu}>
        {isMenuOpen ? "Close Menu" : "Open Menu"} {/* Dynamic button text */}
      </button>
      <ul style={{ display: isMenuOpen ? "block" : "none" }}> {/* Show/hide menu based on state */}
        <li><Link href="/">Home</Link></li>
        <li><Link href="/lessons">Lessons</Link></li>
        <li><Link href="/quiz">Quiz</Link></li>
      </ul>
    </nav>
  );
}

