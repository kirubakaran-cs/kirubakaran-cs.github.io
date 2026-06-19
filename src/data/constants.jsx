/* ─────────────────────────────────────────────────────────────────────────
   PORTFOLIO CONSTANTS
   Edit this file to update your portfolio — changes reflect instantly.
   ──────────────────────────────────────────────────────────────────────── */

/* ── TYPEWRITER ROLES ── */
export const ROLES = [
  "Full Stack Developer",
  "Frontend Developer",
  "Python Developer",
  "Web Developer",
];

/* ── NAVBAR LINKS ── */
export const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  // { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certs" },
  { label: "Contact", id: "contact" },
];

/* ── RESUME LINK ── */
export const RESUME_URL =
  "https://drive.google.com/file/d/1zJT25WoJDR6Uz3Jk34PLzjt-uxlQB59z/view?usp=drive_link";

/* ── HERO STATS BAR ── */
export const HERO_STATS = [
  { n: "2+", l: "Projects Shipped" },
  { n: "5+", l: "Technologies Mastered" },
  { n: "2", l: "Industry Certifications" },
  { n: "Full Stack", l: "React · Node · Python" },
];

/* ── HERO FLOATING BADGES ── */
export const HERO_BADGE_TOP = { value: "Full Stack", label: "Developer" };
export const HERO_BADGE_BOTTOM = { value: "2", label: "Certs Earned" };

/* ── BIO ── */
export const BIO = {
  name: "Kirubakaran",
  college: "GTN Arts College, Dindigul",
  cgpa: "7.91",
  period: "2023 – 2026",
  degree: "B.Sc Computer Science",
  email: "vkirubakaran633@gmail.com",
  available: "Actively Seeking Frontend, Full Stack & Python Developer Roles",
  location: "Dindigul, India",
  profileImg: "/images/profile.webp",
  collegeImg: "/images/edu-gtn.png",
};

/* ── ABOUT HIGHLIGHTS ── */
export const ABOUT_HIGHLIGHTS = [
  {
    icon: "🌐", color: "#7c3aed",
    title: "Full Stack Web Development — React, Node.js & Beyond",
    desc: "Hands-on experience building end-to-end web applications using React, Next.js, Node.js, and Express. Comfortable across the entire stack — from crafting responsive UIs to designing RESTful APIs and managing databases with SQL and MongoDB.",
  },
  {
    icon: "🤖", color: "#2563eb",
    title: "AI-Integrated Application Development",
    desc: "Built an AI-powered Resume Builder that leverages machine learning to generate and tailor resumes dynamically. Combines Python backend logic with modern frontend tooling to deliver intelligent, real-world software solutions.",
  },
  {
    icon: "📜", color: "#06b6d4",
    title: "2 Verified Industry Certifications",
    desc: "Certified by IBM (Artificial Intelligence) and MongoDB (MongoDB Developer) — covering AI fundamentals, database architecture, and developer best practices. Every credential is independently verifiable with a direct link.",
  },
];

/* ── SKILLS ── */
export const SKILLS = [
  {
    cat: "Frontend Development",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.11)",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    cat: "Backend Development",
    color: "#2563eb",
    bg: "rgba(37,99,235,0.11)",
    items: ["Node.js", "Express.js", "REST APIs", "Python", "FastAPI", "Flask"],
  },
  {
    cat: "Databases",
    color: "#0891b2",
    bg: "rgba(8,145,178,0.11)",
    items: ["MongoDB", "MySQL", "PostgreSQL", "SQL Queries", "Mongoose", "Database Design"],
  },
  {
    cat: "Python & AI",
    color: "#059669",
    bg: "rgba(5,150,105,0.11)",
    items: ["Python", "Data Structures", "AI/ML Basics", "Pandas", "NumPy", "Automation"],
  },
  {
    cat: "Tools & Workflow",
    color: "#d97706",
    bg: "rgba(217,119,6,0.11)",
    items: ["Git", "GitHub", "VS Code", "Postman", "npm / yarn", "Linux"],
  },
  {
    cat: "Core CS Fundamentals",
    color: "#dc2626",
    bg: "rgba(220,38,38,0.11)",
    items: ["OOP Concepts", "DBMS", "Operating Systems", "Computer Networks", "Data Structures", "Algorithms"],
  },
];

/* ── EDUCATION ── */
export const EDUCATION = {
  degree: "B.Sc Computer Science",
  college: "GTN Arts College, Dindigul",
  period: "2023 – 2026",
  cgpa: "7.91",
  status: "Completed",
  img: "/images/edu-gtn.png",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Object-Oriented Programming",
  ],
};

/* ── EXPERIENCE ── */
// export const EXPERIENCE = {
//   badge: "HANDS-ON TRAINING",
//   title: "TryHackMe SOC Training & Certification",
//   org: "TryHackMe · Global Cybersecurity Training Platform",
//   status: "Active",
//   stats: [
//     { v: "Top 1%", l: "Global Rank", c: "#a78bfa" },
//     { v: "149", l: "Rooms Solved", c: "#60a5fa" },
//     { v: "28", l: "Badges Earned", c: "#34d399" },
//     { v: "17,374", l: "Points", c: "#fbbf24" },
//   ],
//   points: [
//     "Earned SOC Level 1 certification — mastered SIEM operations, alert triage, phishing analysis, network log forensics, and end-to-end incident workflows across real-world attack simulations",
//     "Advancing through SOC Level 2 — deepening expertise in threat hunting methodologies, detection engineering, adversary emulation, and formal NIST-aligned incident response procedures",
//     "Investigated 10+ high-fidelity attack scenarios covering phishing campaigns, ransomware delivery, network intrusions, lateral movement, and credential-based attacks — each with documented triage reports",
//     "Ranked Top 1% globally out of 3M+ users — earned 28 badges across Cyber Defense, Digital Forensics, OSINT, and Network Security paths, completing 149+ rooms",
//   ],
//   tags: [
//     "SOC Level 1 ✓ Certified",
//     "SOC Level 2 — In Progress",
//     "Cyber Defense",
//     "Incident Response",
//     "Threat Hunting",
//     "Digital Forensics",
//   ],
// };


/* ── PROJECTS ── */
export const PROJECTS = [
  {
    title: "Hospital Management System",
    subtitle: "Full-Stack Web Application for Streamlined Hospital Operations",
    img: "/images/hospital-management.webp",
    tags: ["React", "Node.js", "Express", "MongoDB", "SQL", "REST API"],
    metrics: [{ v: "Full Stack", l: "Web App" }, { v: "CRUD", l: "Operations" }],
    cat: "Full Stack",
    catC: "#7c3aed",
    github: "https://github.com/kirubakaran-cs",
    desc: "A comprehensive hospital management web application built with a React frontend and Node.js/Express backend. Features patient registration, appointment scheduling, doctor management, and billing — all backed by a structured database. Designed to mirror real-world hospital workflows with a clean, role-based UI.",
  },
  {
    title: "AI Resume Builder",
    subtitle: "Intelligent Resume Generator Powered by AI",
    img: "/images/ai-resume-builder.webp",
    tags: ["Python", "React", "AI/ML", "REST API", "Node.js", "MongoDB"],
    metrics: [{ v: "AI-Powered", l: "Generation" }, { v: "Dynamic", l: "Templates" }],
    cat: "AI / Full Stack",
    catC: "#2563eb",
    github: "https://github.com/kirubakaran-cs",
    desc: "An AI-powered resume builder that intelligently generates and tailors resumes based on user input. Built with a Python AI backend and a React frontend, the app dynamically suggests content, formats sections, and produces professional, job-ready resumes — reducing the time to create a polished resume from hours to minutes.",
  },
];

/* ── CERTIFICATES ── */
export const CERTS = [
  {
    img: "/images/cert-ibm.webp",
    issuer: "IBM",
    title: "Artificial Intelligence",
    date: "August 2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/US4R3ZXUCFTD",
    accent: "#7c3aed",
  },
  {
    img: "/images/cert-mongodb.webp",
    issuer: "MongoDB",
    title: "MongoDB Developer Certification",
    date: "2025",
    link: "https://learn.mongodb.com/c/",
    accent: "#059669",
  },
];

/* ── SOCIAL LINKS ── */
export const SOCIALS = [
  { icon: "✉️", label: "Email", val: "vkirubakaran633@gmail.com", href: "mailto:vkirubakaran633@gmail.com", c: "#7c3aed" },
  { icon: "💼", label: "LinkedIn", val: "kiruba-dev", href: "https://www.linkedin.com/in/kiruba-dev/", c: "#2563eb" },
  { icon: "⬡", label: "GitHub", val: "kirubakaran-cs", href: "https://github.com/kirubakaran-cs", c: "#6b7280" },
  // { icon: "🐦", label: "Twitter / X", val: "@kirubakaran-cs", href: "https://x.com/kirubakaran-cs", c: "#0ea5e9" },
];