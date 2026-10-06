"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

interface TechCategory {
  title: string;
  description: string;
  accent: {
    bg: string;
    border: string;
    hoverBorder: string;
    badgeBg: string;
    badgeText: string;
    iconBg: string;
    arrowColor: string;
  };
  categoryIcon: React.ReactNode;
  technologies: TechItem[];
}

const CATEGORIES: TechCategory[] = [
  {
    title: "Frontend",
    description: "Modern UI, smooth experiences and responsive designs.",
    accent: {
      bg: "bg-gradient-to-b from-[#f3f8ff] via-[#eaf3fe]/90 to-[#e2edfd]/80",
      border: "border-[#bfdbfe]/70",
      hoverBorder: "hover:border-[#60a5fa]",
      badgeBg: "bg-white/90 hover:bg-white border-slate-200/90 hover:border-blue-300 shadow-[0_2px_8px_rgba(37,99,235,0.04)]",
      badgeText: "text-[#1e293b]",
      iconBg: "bg-[#2563eb] text-white shadow-blue-500/25",
      arrowColor: "text-[#2563eb]",
    },
    categoryIcon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
      </svg>
    ),
    technologies: [
      {
        name: "Next.js",
        icon: (
          <span className="w-3.5 h-3.5 rounded-full bg-[#0f172a] text-white text-[8px] font-black flex items-center justify-center">
            N
          </span>
        ),
      },
      {
        name: "React",
        icon: <span className="text-[#0284c7] font-bold text-xs">⚛</span>,
      },
      {
        name: "TypeScript",
        icon: (
          <span className="w-3.5 h-3.5 rounded bg-[#3178c6] text-white text-[8px] font-bold flex items-center justify-center font-mono">
            TS
          </span>
        ),
      },
      {
        name: "Tailwind CSS",
        icon: <span className="text-[#06b6d4] font-bold text-xs">≋</span>,
      },
      {
        name: "Framer Motion",
        icon: <span className="text-[#8b5cf6] font-bold text-xs">▲</span>,
      },
      {
        name: "Vite",
        icon: <span className="text-[#eab308] font-bold text-xs">⚡</span>,
      },
      {
        name: "GSAP",
        icon: <span className="text-[#10b981] font-bold text-xs">⚡</span>,
      },
    ],
  },
  {
    title: "Backend",
    description: "Secure, scalable and high-performance APIs and server-side logic.",
    accent: {
      bg: "bg-gradient-to-b from-[#f0fdf6] via-[#e6fbf1]/90 to-[#dcf8eb]/80",
      border: "border-[#bbf7d0]/70",
      hoverBorder: "hover:border-[#4ade80]",
      badgeBg: "bg-white/90 hover:bg-white border-slate-200/90 hover:border-emerald-300 shadow-[0_2px_8px_rgba(16,185,129,0.04)]",
      badgeText: "text-[#1e293b]",
      iconBg: "bg-[#16a34a] text-white shadow-emerald-500/25",
      arrowColor: "text-[#16a34a]",
    },
    categoryIcon: (
      <span className="text-base font-bold font-mono tracking-tight">JS</span>
    ),
    technologies: [
      {
        name: "Node.js",
        icon: (
          <span className="w-3.5 h-3.5 rounded-full bg-[#16a34a] text-white text-[8px] font-bold flex items-center justify-center">
            ⬢
          </span>
        ),
      },
      {
        name: "Express.js",
        icon: (
          <span className="w-3.5 h-3.5 rounded bg-slate-900 text-white text-[7px] font-bold flex items-center justify-center font-mono">
            ex
          </span>
        ),
      },
      {
        name: "REST APIs",
        icon: <span className="text-[#2563eb] text-xs">☁</span>,
      },
      {
        name: "JWT Auth",
        icon: <span className="text-[#0ea5e9] text-xs">🛡</span>,
      },
      {
        name: "Google OAuth",
        icon: <span className="text-[#ea4335] font-bold text-xs">G</span>,
      },
      {
        name: "Helmet",
        icon: <span className="text-[#64748b] text-xs">🪖</span>,
      },
    ],
  },
  {
    title: "Database",
    description: "Flexible, reliable and easy-to-scale data solutions.",
    accent: {
      bg: "bg-gradient-to-b from-[#fffbf4] via-[#fef5e7]/90 to-[#feebd3]/80",
      border: "border-[#fed7aa]/70",
      hoverBorder: "hover:border-[#fb923c]",
      badgeBg: "bg-white/90 hover:bg-white border-slate-200/90 hover:border-amber-300 shadow-[0_2px_8px_rgba(249,115,22,0.04)]",
      badgeText: "text-[#1e293b]",
      iconBg: "bg-[#15803d] text-white shadow-emerald-700/25",
      arrowColor: "text-[#ea580c]",
    },
    categoryIcon: (
      <span className="text-base">🍃</span>
    ),
    technologies: [
      {
        name: "Supabase",
        icon: <span className="text-[#10b981] font-bold text-xs">⚡</span>,
      },
      {
        name: "PostgreSQL",
        icon: <span className="text-[#2563eb] text-xs">🐘</span>,
      },
      {
        name: "SQLite",
        icon: <span className="text-[#0284c7] text-xs">🪶</span>,
      },
      {
        name: "MongoDB",
        icon: <span className="text-[#16a34a] text-xs">🍃</span>,
      },
      {
        name: "Row-Level Security",
        icon: <span className="text-[#f97316] text-xs">🔒</span>,
      },
    ],
  },
  {
    title: "Tools & Deployment",
    description: "Better workflow, version control and smooth deployment.",
    accent: {
      bg: "bg-gradient-to-b from-[#faf5ff] via-[#f4e8ff]/90 to-[#edd5ff]/80",
      border: "border-[#e9d5ff]/80",
      hoverBorder: "hover:border-[#c084fc]",
      badgeBg: "bg-white/90 hover:bg-white border-slate-200/90 hover:border-purple-300 shadow-[0_2px_8px_rgba(168,85,247,0.04)]",
      badgeText: "text-[#1e293b]",
      iconBg: "bg-[#1e1b4b] text-white shadow-purple-950/25",
      arrowColor: "text-[#9333ea]",
    },
    categoryIcon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    technologies: [
      {
        name: "Vercel",
        icon: <span className="text-black font-black text-xs">▲</span>,
      },
      {
        name: "Git / GitHub",
        icon: <span className="text-slate-800 text-xs">🐙</span>,
      },
      {
        name: "Figma",
        icon: <span className="text-[#a855f7] font-bold text-xs">❖</span>,
      },
      {
        name: "Lucide React",
        icon: <span className="text-[#ec4899] text-xs">🌸</span>,
      },
      {
        name: "Zustand",
        icon: <span className="text-[#f59e0b] text-xs">🐻</span>,
      },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] relative overflow-hidden">
      {/* Large blurred subtle pastel ambient shapes */}
      <div className="absolute top-1/4 left-0 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-100/40 via-blue-50/30 to-transparent rounded-full blur-3xl pointer-events-none -ml-32 -translate-y-1/2" />
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-100/35 via-indigo-50/25 to-transparent rounded-full blur-3xl pointer-events-none -mr-28" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-emerald-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            {/* Eyebrow Label */}
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#3b82f6] uppercase font-mono block mb-3">
              TECH STACK
            </span>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-[#172033] tracking-tight leading-[1.05] mb-4">
              Tools I Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] animate-text-blush inline-block">
                With
              </span>
            </h2>

            {/* Short Description */}
            <p className="text-[#64748b] text-sm sm:text-base max-w-xl font-normal leading-relaxed">
              Modern technologies and tools I use to build fast, scalable and amazing web applications.
            </p>
          </div>

          {/* Decorative subtle handwritten tagline */}
          <div className="hidden md:block select-none pr-3 pb-1">
            <span className="text-[17px] font-serif italic text-[#818cf8]/90 tracking-wide rotate-[-3deg] inline-block font-medium">
              Code &rarr; Build &rarr; Deploy
            </span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.985 }}
              className={`rounded-[28px] p-6 sm:p-7 border ${cat.accent.border} ${cat.accent.hoverBorder} ${cat.accent.bg} backdrop-blur-md shadow-[0_4px_25px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-all duration-300 flex flex-col justify-between group cursor-pointer`}
            >
              <div>
                {/* Card Top: Category Icon */}
                <div className="flex items-center mb-5">
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.3 }}
                    className={`w-11 h-11 rounded-2xl ${cat.accent.iconBg} flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105`}
                  >
                    {cat.categoryIcon}
                  </motion.div>
                </div>

                {/* Category Title */}
                <h3 className="text-xl font-bold text-[#172033] tracking-tight mb-1.5">
                  {cat.title}
                </h3>

                {/* Short One-line Description */}
                <p className="text-xs text-[#64748b] leading-relaxed mb-6 font-normal">
                  {cat.description}
                </p>

                {/* Technology Chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.technologies.map((tech) => (
                    <motion.span
                      key={tech.name}
                      whileHover={{ y: -2.5, scale: 1.05 }}
                      whileTap={{ scale: 0.93 }}
                      transition={{ duration: 0.15 }}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${cat.accent.badgeBg} ${cat.accent.badgeText} text-xs font-semibold cursor-pointer transition-all duration-200 select-none`}
                    >
                      <span className="shrink-0">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
