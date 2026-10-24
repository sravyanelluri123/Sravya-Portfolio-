import { useEffect, useState } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail, Terminal, ChefHat } from "lucide-react";
import { links, profile } from "../lib/data";
import { useFileExists } from "../lib/hooks";

const snippet = `const sravya = {
  role: "CS student, KLU",
  building: ["AI-Builders", "StayFinder"],
  stack: ["React", "Node.js", "PostgreSQL"],
  practising: "Data Structures & Algorithms",
  openTo: "Internships 2027–2028",
};`;

function CodeWindow() {
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [n, setN] = useState(reduce ? snippet.length : 0);
  useEffect(() => {
    if (n >= snippet.length) return;
    const t = setTimeout(() => setN(n + 1), 28);
    return () => clearTimeout(t);
  }, [n]);
  return (
    <div className="glass floaty w-full max-w-md overflow-hidden shadow-2xl shadow-brand/20" aria-hidden="true">
      <div className="flex items-center gap-1.5 border-b border-line/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-rose-400/80" /><span className="h-3 w-3 rounded-full bg-amber-300/80" /><span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 font-mono text-xs text-muted">about.ts</span>
      </div>
      <pre className="min-h-[15rem] whitespace-pre-wrap p-5 font-mono text-[13px] leading-relaxed text-ink-soft">
        {snippet.slice(0, n)}<span className="caret text-brand-alt">▍</span>
      </pre>
    </div>
  );
}

export default function Hero() {
  const hasResume = useFileExists(profile.resumeFile);
  return (
    <section id="home" className="hero-glow relative overflow-hidden pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:py-28">
        <div>
          <p className="mb-4 text-sm font-medium text-brand-alt">{profile.roles}</p>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">{profile.name}</h1>
          <p className="mt-5 bg-gradient-to-r from-brand to-brand-alt bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">{profile.headline}</p>
          <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary"><ArrowDown size={16} />View My Projects</a>
            <a href="#contact" className="btn-ghost"><Mail size={16} />Contact Me</a>
            {hasResume ? (
              <a href={profile.resumeFile} download className="btn-ghost"><Download size={16} />Download Resume</a>
            ) : (
              <button disabled title="Add the resume PDF to /public to enable this button" className="btn-ghost cursor-not-allowed opacity-50"><Download size={16} />Download Resume</button>
            )}
          </div>
          <ul className="mt-8 flex gap-3">
            {[[Github, "GitHub", links.github], [Linkedin, "LinkedIn", links.linkedin], [Terminal, "LeetCode", links.leetcode], [ChefHat, "CodeChef", links.codechef]].map(([Icon, label, href]) => {
              const I = Icon as typeof Github;
              return <li key={label as string}><a href={href as string} target="_blank" rel="noreferrer" aria-label={label as string} className="glass flex h-11 w-11 items-center justify-center text-ink-soft transition hover:border-brand/60 hover:text-ink"><I size={19} /></a></li>;
            })}
          </ul>
        </div>
        <div className="flex justify-center lg:justify-end"><CodeWindow /></div>
      </div>
    </section>
  );
}
