import { Check, ExternalLink, Github } from "lucide-react";
import aiBuildersPreview from "../assets/ai-builders-preview.png";
import splitmatePreview from "../assets/splitmate-preview.png";
import stayFinderPreview from "../assets/stayfinder-preview.png";
import { projects, type Project } from "../lib/data";
import { Section } from "./Sections";

function Preview({ kind }: { kind: Project["preview"] }) {
  if (kind === "ai") {
    return (
      <div className="overflow-hidden rounded-xl border border-line/10">
        <img
          src={aiBuildersPreview}
          alt="AI-Builders website generator homepage"
          className="block w-full"
        />
      </div>
    );
  }

  if (kind === "stay") {
    return (
      <div className="overflow-hidden rounded-xl border border-line/10">
        <img
          src={stayFinderPreview}
          alt="StayFinder property booking homepage"
          className="block w-full"
        />
      </div>
    );
  }

  if (kind === "split") {
    return (
      <div className="overflow-hidden rounded-xl border border-line/10">
        <img
          src={splitmatePreview}
          alt="SplitMate expense splitting homepage"
          className="block h-[260px] w-full object-cover"
        />
      </div>
    );
  }

  const bar = "fill-white/10";
  return (
    <div className="relative overflow-hidden rounded-xl border border-line/10 bg-gradient-to-br from-[#1b1442] to-[#0b1a3a]">
      <svg viewBox="0 0 400 200" role="img" aria-label={`Illustrative preview graphic for ${kind} project`} className="w-full">
        {kind === "yt" && (<>
          <rect x="0" y="0" width="400" height="26" className={bar} /><rect x="130" y="7" width="140" height="12" rx="6" fill="#fff" opacity=".12" />
          <rect x="0" y="26" width="52" height="174" className={bar} />
          {[0, 1, 2, 3, 4, 5].map((i) => (<rect key={i} x={68 + (i % 3) * 110} y={40 + Math.floor(i / 3) * 80} width="100" height="52" rx="6" fill={i % 2 ? "#8b5cf6" : "#60a5fa"} opacity=".4" />))}
        </>)}
      </svg>
      <span className="absolute bottom-2 right-2 rounded bg-black/50 px-2 py-0.5 text-[10px] text-white/70">Illustrative graphic, not a screenshot</span>
    </div>
  );
}

function LinkBtn({ href, icon, label, primary }: { href?: string; icon: React.ReactNode; label: string; primary?: boolean }) {
  if (href) return <a href={href} target="_blank" rel="noreferrer" className={primary ? "btn-primary" : "btn-ghost"}>{icon}{label}</a>;
  return <span className="btn-ghost cursor-not-allowed opacity-50" title="Link will be added soon">{icon}{label} (soon)</span>;
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="glass flex flex-col gap-5 p-5 sm:p-6">
      <Preview kind={p.preview} />
      <div>
        <h3 className="text-xl font-bold">{p.title}</h3>
        <p className="text-sm text-brand-alt">{p.subtitle}</p>
        <p className="mt-3 text-sm text-ink-soft">{p.description}</p>
      </div>
      <ul className="space-y-2 text-sm text-ink-soft">
        {p.points.map((pt) => <li key={pt} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-brand" />{pt}</li>)}
      </ul>
      <ul className="flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="badge">{t}</li>)}</ul>
      <div className="mt-auto flex flex-wrap gap-3 pt-2">
        <LinkBtn href={p.github} icon={<Github size={16} />} label="View Source Code" />
        {p.preview !== "yt" && <LinkBtn href={p.demo} icon={<ExternalLink size={16} />} label="Live Demo" primary />}
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <Section id="projects" title="Featured Projects" intro="Three builds spanning AI product design, travel booking, and a polished expense-sharing concept.">
      <div className="grid gap-6 lg:grid-cols-2">{featured.map((p) => <ProjectCard key={p.title} p={p} />)}</div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">{rest.map((p) => <ProjectCard key={p.title} p={p} />)}</div>
    </Section>
  );
}
