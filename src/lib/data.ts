// Edit this file to update any content on the site.
export const profile = {
  name: "Sravya Nelluri",
  roles: "Computer Science Student | Aspiring Software Engineer | Full-Stack Developer",
  headline: "Turning Ideas Into Functional Web Experiences.",
  intro:
    "I'm a Computer Science student passionate about software development, problem-solving, and building practical web applications. I enjoy working with JavaScript, React, Node.js, PostgreSQL, and AI API integration while continuously improving my programming and algorithmic skills.",
  email: "2400031275@kluniversity.in",
  phone: "7093621775",
  // Put your resume PDF in /public with this exact name. The button activates automatically once it exists.
  resumeFile: "/Sravya_Nelluri_Resume.pdf",
  // Optional: Formspree/Getform style endpoint (set VITE_FORM_ENDPOINT in .env). Leave empty to use the mailto fallback.
  formEndpoint: (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) ?? "",
};

export const links = {
  github: "https://github.com/SravyaNelluri",
  linkedin: "https://www.linkedin.com/in/sravya-nelluri-548718340/",
  leetcode: "https://leetcode.com/u/2400031275",
  codechef: "https://www.codechef.com/users/klu_2400031275",
};

export const nav = [
  ["home", "Home"], ["about", "About"], ["skills", "Skills"], ["projects", "Projects"],
  ["education", "Education"], ["hackathons", "Hackathons"], ["coding", "Coding Profiles"], ["contact", "Contact"],
] as const;

export const interests = [
  "Full-stack web development",
  "Java and programming fundamentals",
  "Data Structures and Algorithms",
  "Database design and backend APIs",
  "Generative AI and AI API integration",
  "Building responsive, user-friendly applications",
];

export const skills: { title: string; icon: string; items: string[] }[] = [
  { title: "Programming Languages", icon: "code", items: ["Java", "Python", "C", "JavaScript", "SQL", "HTML5", "CSS3"] },
  { title: "Frontend Development", icon: "layout", items: ["React", "Responsive Web Design", "Flexbox", "CSS Grid", "Reusable UI Components"] },
  { title: "Backend and Databases", icon: "server", items: ["Node.js", "Express.js", "REST APIs", "PostgreSQL"] },
  { title: "AI and Emerging Technologies", icon: "sparkles", items: ["Generative AI", "Prompt Engineering", "AI API Integration"] },
  { title: "Developer Tools", icon: "wrench", items: ["Git", "GitHub", "VS Code", "Eclipse", "PyCharm", "Spring Tool Suite", "Google Cloud Platform", "Linux"] },
];

export interface Project {
  title: string; subtitle: string; description: string; tech: string[]; points: string[];
  github?: string; demo?: string; preview: "ai" | "stay" | "split" | "yt"; featured?: boolean;
}

// Leave github/demo empty ("") until real URLs exist; buttons then show as "link coming soon".
export const projects: Project[] = [
  {
    title: "AI-Builders", subtitle: "Prompt-Based Website Generator", preview: "ai", featured: true,
    description: "An AI-powered website generator that transforms natural-language prompts into responsive web pages.",
    tech: ["PostgreSQL", "Express.js", "React", "Node.js", "AI APIs"],
    points: [
      "Developed a React interface with reusable components and real-time website previews.",
      "Created RESTful APIs using Node.js and Express.js.",
      "Integrated AI APIs to generate structured HTML and CSS layouts.",
      "Organized PostgreSQL data for prompts and generated website content.",
    ],
    github: "https://github.com/SravyaNelluri/AI-BUILDERS",
    demo: "https://ai-builders-52mb.onrender.com",
  },
  {
    title: "StayFinder", subtitle: "Property Booking Platform", preview: "stay", featured: true,
    description: "A full-stack property booking platform for browsing, searching, and reserving rental properties.",
    tech: ["React", "Node.js", "Express.js", "PostgreSQL"],
    points: [
      "Built property listings, filtering, and booking management features.",
      "Developed a responsive React interface with reusable components.",
      "Implemented backend REST APIs for authentication, property listings, and bookings.",
      "Designed a relational PostgreSQL database for user accounts, property details, booking history, and availability.",
    ],
    github: "https://github.com/sravyanelluri123/stayfinder", demo: "https://stayfinder-y5qn.vercel.app/",
  },
  {
    title: "SplitMate", subtitle: "Group Expense Splitter", preview: "split",
    description: "A clean expense-splitting experience for trips and households, with group creation and fair cost sharing at the center.",
    tech: ["React", "TypeScript", "Tailwind CSS", "UI Design"],
    points: [
      "Designed a dark, minimal dashboard inspired by the provided product concept.",
      "Built group and member input flows to create shared expense records quickly.",
      "Focused on strong typographic hierarchy and user-friendly form layout.",
      "Created a polished front-end prototype that matches the reference interface closely.",
    ],
    github: "https://github.com/sravyanelluri123/splitmate",
    demo: "https://splitmate-frontend-yseb.onrender.com/",
  },
];

export const education = {
  school: "Koneru Lakshmaiah Educational Foundation",
  degree: "Bachelor of Science in Computer Science",
  location: "Guntur, Andhra Pradesh, India",
  period: "September 2024 – May 2028",
};

export const hackathons = [
  { name: "Smart India Hackathon", year: "2026", text: "Participated in team-based development of a software prototype under time constraints." },
  { name: "Amaravati Quantum Valley Hackathon", year: "2025", text: "Contributed to technology-focused concepts and rapid prototyping in a competitive environment." },
  { name: "Frontend Hackathon", year: "2024", text: "Built responsive web interfaces using HTML, CSS, and JavaScript." },
];

export const codingProfiles = [
  { name: "GitHub", url: links.github, handle: "SravyaNelluri", text: "Source code for my full-stack projects and ongoing experiments." },
  { name: "LeetCode", url: links.leetcode, handle: "2400031275", text: "Ongoing Data Structures and Algorithms practice." },
  { name: "CodeChef", url: links.codechef, handle: "klu2400031275", text: "Competitive programming practice to sharpen problem-solving." },
];
