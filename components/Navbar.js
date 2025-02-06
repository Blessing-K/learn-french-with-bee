import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/lessons">Lessons</Link></li>
        <li><Link href="/quiz">Quiz</Link></li>
      </ul>
    </nav>
  );
}
