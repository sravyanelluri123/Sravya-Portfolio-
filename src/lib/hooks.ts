import { useEffect, useState } from "react";

export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

export function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch { /* storage unavailable */ }
  };
  return { dark, toggle };
}

/** True only if the resume file really exists (and is a PDF, not the SPA fallback page). */
export function useFileExists(url: string) {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    fetch(url, { method: "HEAD" })
      .then((r) => setOk(r.ok && (r.headers.get("content-type") ?? "").includes("pdf")))
      .catch(() => setOk(false));
  }, [url]);
  return ok;
}
