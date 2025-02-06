import Navbar from "../components/Navbar";
import "../styles/globals.css"; // Import global styles

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar initialTheme={false} /> {/* Pass initial theme as prop */}
      <Component {...pageProps} /> {/* Renders the current page */}
    </div>
  );
}

