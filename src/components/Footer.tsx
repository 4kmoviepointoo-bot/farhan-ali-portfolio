"use client";

import { motion } from "framer-motion";

const LINKS = [
  { label: "Work", href: "#work", active: true },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = 2026;

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#F8FAFC] border-t border-[#E5EAF2] pt-14 pb-8 px-5 sm:px-8 lg:px-10 overflow-hidden">
      {/* Subtle decorative pastel glows in background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -translate-x-12 -translate-y-12" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100/25 rounded-full blur-3xl pointer-events-none translate-x-12 translate-y-12" />

      <div className="max-w-[1180px] mx-auto relative z-10">
        {/* Top Footer Row: 2-Column on Desktop (Brand -> Nav) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-8 text-center sm:text-left">
          {/* COLUMN 1: Brand Area */}
          <div className="flex items-center gap-3.5 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-10 h-10 rounded-[11px] bg-[#3B82F6] text-white flex items-center justify-center font-bold text-sm shadow-sm shadow-blue-500/20 shrink-0"
            >
              FA
            </motion.div>
            <div className="flex flex-col items-center sm:items-start text-left">
              <span className="text-[15px] font-bold text-[#172033] tracking-tight leading-tight">
                Farhan Ali
              </span>
              <span className="text-xs text-[#64748B] font-normal mt-0.5">
                Full-Stack Web Developer
              </span>
            </div>
          </div>

          {/* COLUMN 2: Navigation Links */}
          <nav className="flex flex-row items-center gap-6 sm:gap-8">
            {LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="group relative text-sm font-medium text-[#475569] hover:text-[#3B82F6] transition-colors py-1 cursor-pointer"
              >
                <span>{link.label}</span>
                {/* Subtle animated underline expanding from left */}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-[#3B82F6] rounded-full transition-all duration-250 ease-out ${
                    link.active
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E5EAF2] mt-8 mb-6" />

        {/* Copyright Area */}
        <div className="text-center">
          <p className="text-xs sm:text-[13px] text-[#94A3B8] font-normal">
            © {year} Farhan Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
