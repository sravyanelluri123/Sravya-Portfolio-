import type { ReactNode } from "react";
import { Award, ExternalLink, GraduationCap, MapPin } from "lucide-react";
import { codingProfiles, education, hackathons, interests, skills } from "../lib/data";
import { skillIcons } from "../lib/icons";

export function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} className="section">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {intro && <p className="mt-3 max-w-2xl text-muted">{intro}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid gap-8 lg:grid-cols-2">
        <p className="leading-relaxed text-ink-soft">
          I'm pursuing a Bachelor of Science in Computer Science at Koneru Lakshmaiah Educational Foundation in Guntur, Andhra Pradesh, with an expected graduation date of May 2028. I'm a motivated student developer who is actively learning and building projects, from React interfaces to REST APIs and relational databases.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {interests.map((i) => <li key={i} className="glass px-4 py-3 text-sm text-ink-soft">{i}</li>)}
        </ul>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Technical Skills" intro="Technologies and tools from my resume.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => {
          const Icon = skillIcons[g.icon];
          return (
            <div key={g.title} className="glass p-6">
              <div className="mb-4 flex items-center gap-3"><span className="rounded-lg bg-brand/15 p-2 text-brand"><Icon size={18} /></span><h3 className="font-semibold">{g.title}</h3></div>
              <ul className="flex flex-wrap gap-2">{g.items.map((s) => <li key={s} className="badge">{s}</li>)}</ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="relative border-l border-brand/40 pl-8">
        <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-gradient-to-br from-brand to-brand-alt" />
        <div className="glass max-w-2xl p-6">
          <div className="flex items-center gap-2 text-brand-alt"><GraduationCap size={18} /><span className="text-sm font-medium">{education.period}</span></div>
          <h3 className="mt-2 text-xl font-semibold">{education.school}</h3>
          <p className="mt-1 text-ink-soft">{education.degree}</p>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-muted"><MapPin size={14} />{education.location}</p>
        </div>
      </div>
    </Section>
  );
}

export function Hackathons() {
  return (
    <Section id="hackathons" title="Hackathons & Innovation">
      <ol className="relative space-y-5 border-l border-brand/40 pl-8">
        {hackathons.map((h) => (
          <li key={h.name} className="relative">
            <span className="absolute -left-[41px] top-5 h-4 w-4 rounded-full bg-gradient-to-br from-brand to-brand-alt" />
            <div className="glass p-5">
              <div className="flex flex-wrap items-center justify-between gap-2"><h3 className="flex items-center gap-2 font-semibold"><Award size={17} className="text-brand" />{h.name}</h3><span className="badge">{h.year}</span></div>
              <p className="mt-2 text-sm text-ink-soft">{h.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Coding() {
  return (
    <Section id="coding" title="Coding Profiles" intro="I practise Data Structures and Algorithms regularly. Visit my profiles for the live picture.">
      <div className="grid gap-5 md:grid-cols-3">
        {codingProfiles.map((p) => (
          <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="glass group p-6 transition hover:border-brand/60">
            <div className="flex items-center justify-between"><h3 className="text-lg font-semibold">{p.name}</h3><ExternalLink size={16} className="text-muted group-hover:text-brand" /></div>
            <p className="mt-1 font-mono text-xs text-brand-alt">{p.handle}</p>
            <p className="mt-3 text-sm text-ink-soft">{p.text}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
