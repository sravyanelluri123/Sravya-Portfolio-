# Sravya Nelluri – Portfolio

React + TypeScript + Tailwind CSS + Lucide icons, built with Vite.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build
npm run preview
```

## Edit content
Everything (text, links, projects, skills) lives in `src/lib/data.ts`.

## Still to add
1. **Resume**: copy your PDF to `public/Sravya_Nelluri_Resume.pdf`. The "Download Resume" button enables itself once the file exists.
2. **StayFinder**: its live demo is linked in `src/lib/data.ts`. Add its GitHub URL there when available. **YouTube Clone**: add its GitHub URL there when available.
3. **Contact form delivery**: create a Formspree (or similar) form, copy `.env.example` to `.env`, and set `VITE_FORM_ENDPOINT`. Without it the form opens the visitor's email app (mailto) and never shows a fake "sent" message.
4. **Social image**: replace `public/og-image.svg` with a 1200x630 PNG for best link previews, and update the path in `index.html`.

## Deploy on Vercel
Push to GitHub, import the repo on vercel.com (Framework: Vite, build `npm run build`, output `dist`). Add `VITE_FORM_ENDPOINT` under Environment Variables if used. `vercel.json` is included.
