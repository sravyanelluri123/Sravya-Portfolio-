import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { nav } from "../lib/data";
import { useActiveSection, useTheme } from "../lib/hooks";

const ids = nav.map(([id]) => id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);
  const { dark, toggle } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/10 bg-bg/80 backdrop-blur-lg">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="rounded-lg bg-gradient-to-br from-brand to-brand-alt px-2.5 py-1 text-sm font-bold text-white">SN</a>
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} aria-current={active === id ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-sm transition ${active === id ? "bg-brand/15 text-ink" : "text-muted hover:text-ink"}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} className="rounded-lg border border-line/15 p-2 text-ink-soft hover:text-ink">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu" className="rounded-lg border border-line/15 p-2 lg:hidden">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-line/10 bg-bg px-5 py-3 lg:hidden">
          {nav.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className={`block rounded-lg px-3 py-3 text-sm ${active === id ? "bg-brand/15 text-ink" : "text-muted"}`}>{label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
