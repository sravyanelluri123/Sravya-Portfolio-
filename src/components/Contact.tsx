import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { links, profile } from "../lib/data";
import { Section } from "./Sections";

type Fields = { name: string; email: string; subject: string; message: string };
const empty: Fields = { name: "", email: "", subject: "", message: "" };

function validate(f: Fields) {
  const e: Partial<Fields> = {};
  if (f.name.trim().length < 2) e.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid email address.";
  if (f.subject.trim().length < 3) e.subject = "Enter a subject.";
  if (f.message.trim().length < 10) e.message = "Write at least 10 characters.";
  return e;
}

export default function Contact() {
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [status, setStatus] = useState<{ kind: "idle" | "sending" | "sent" | "error" | "mailto"; msg?: string }>({ kind: "idle" });

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e = validate(f);
    setErrors(e);
    if (Object.keys(e).length) return;
    if (!profile.formEndpoint) {
      // No backend configured: hand off to the visitor's email app instead of pretending to send.
      const body = encodeURIComponent(`${f.message}\n\nFrom: ${f.name} (${f.email})`);
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(f.subject)}&body=${body}`;
      setStatus({ kind: "mailto", msg: "Opening your email app. The message is only sent once you press send there." });
      return;
    }
    setStatus({ kind: "sending" });
    try {
      const r = await fetch(profile.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(f) });
      if (!r.ok) throw new Error();
      setStatus({ kind: "sent", msg: "Message sent. Thank you!" });
      setF(empty);
    } catch {
      setStatus({ kind: "error", msg: `Could not send the message. Please email ${profile.email} directly.` });
    }
  }

  const field = (key: keyof Fields, label: string, type = "text") => (
    <div>
      <label htmlFor={key} className="mb-1.5 block text-sm font-medium">{label}</label>
      {key === "message" ? (
        <textarea id={key} rows={5} value={f[key]} onChange={(e) => setF({ ...f, [key]: e.target.value })} aria-invalid={!!errors[key]} aria-describedby={errors[key] ? `${key}-err` : undefined} className="w-full rounded-xl border border-line/15 bg-panel/[0.04] px-4 py-3 text-sm outline-none focus:border-brand" />
      ) : (
        <input id={key} type={type} value={f[key]} onChange={(e) => setF({ ...f, [key]: e.target.value })} aria-invalid={!!errors[key]} aria-describedby={errors[key] ? `${key}-err` : undefined} className="w-full rounded-xl border border-line/15 bg-panel/[0.04] px-4 py-3 text-sm outline-none focus:border-brand" />
      )}
      {errors[key] && <p id={`${key}-err`} className="mt-1 text-xs text-rose-400">{errors[key]}</p>}
    </div>
  );

  return (
    <Section id="contact" title="Let's Connect" intro="Recruiters, developers and collaborators are welcome to get in touch about internships, placements or projects.">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <a href={`mailto:${profile.email}`} className="btn-primary w-full sm:w-auto"><Mail size={16} />Email Me</a>
          <ul className="glass divide-y divide-line/10 text-sm">
            <li className="flex items-center gap-3 p-4"><Mail size={16} className="text-brand" /><a href={`mailto:${profile.email}`} className="break-all hover:underline">{profile.email}</a></li>
            <li className="flex items-center gap-3 p-4"><Phone size={16} className="text-brand" /><a href={`tel:+91${profile.phone}`} className="hover:underline">{profile.phone}</a></li>
            <li className="flex items-center gap-3 p-4"><Linkedin size={16} className="text-brand" /><a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn profile</a></li>
            <li className="flex items-center gap-3 p-4"><Github size={16} className="text-brand" /><a href={links.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub profile</a></li>
          </ul>
        </div>
        <form onSubmit={onSubmit} noValidate className="glass space-y-4 p-6">
          <div className="grid gap-4 sm:grid-cols-2">{field("name", "Name")}{field("email", "Email", "email")}</div>
          {field("subject", "Subject")}
          {field("message", "Message")}
          <button type="submit" disabled={status.kind === "sending"} className="btn-primary"><Send size={16} />{status.kind === "sending" ? "Sending…" : "Send message"}</button>
          <p role="status" className={`text-sm ${status.kind === "error" ? "text-rose-400" : "text-muted"}`}>{status.msg}</p>
        </form>
      </div>
    </Section>
  );
}
