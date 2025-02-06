import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Learn French with Bee! 🐝</h1>
      <p>Select a lesson or take a quiz to test your knowledge.</p>
    </div>
  );
}
