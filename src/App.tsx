import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import { About, Coding, Education, Hackathons, Skills } from "./components/Sections";
import { profile } from "./lib/data";

export default function App() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const on = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  if (window.location.pathname !== "/" && window.location.pathname !== "/index.html") return <NotFound />;

  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white">Skip to content</a>
      <Navbar />
      <main>
        <Hero /><About /><Skills /><Projects /><Education /><Hackathons /><Coding /><Contact />
      </main>
      <footer className="border-t border-line/10 py-8 text-center text-sm text-muted">© {new Date().getFullYear()} {profile.name}. Built with React, TypeScript and Tailwind CSS.</footer>
      {showTop && (
        <a href="#home" aria-label="Back to top" className="fixed bottom-6 right-6 z-40 rounded-full bg-gradient-to-br from-brand to-brand-alt p-3 text-white shadow-lg"><ArrowUp size={20} /></a>
      )}
    </>
  );
}
