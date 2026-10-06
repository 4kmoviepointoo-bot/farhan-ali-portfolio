"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work", active: true },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-3.5 sm:top-5 left-0 right-0 z-50 flex justify-center items-center px-4 pointer-events-none"
      >
        {/* Ambient subtle pastel glow behind navbar */}
        <div className="absolute w-[450px] h-12 bg-gradient-to-r from-blue-200/25 via-indigo-100/20 to-purple-200/20 rounded-full blur-2xl -z-10 pointer-events-none" />

        {/* Floating Pill Container (Max width: 620px, Height: 58-64px) */}
        <nav
          className={`pointer-events-auto flex items-center justify-between w-full max-w-[640px] px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl border-slate-200/90 shadow-[0_12px_40px_rgba(15,23,42,0.08)]"
              : "bg-white/85 backdrop-blur-lg border-slate-200/80 shadow-[0_8px_32px_rgba(15,23,42,0.05)]"
          }`}
        >
          {/* ========================================= */}
          {/* LEFT: Brand Identity (FA + Farhan Ali + Subtitle) */}
          {/* ========================================= */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0 text-left cursor-pointer focus:outline-none"
          >
            {/* Rounded Blue Square Logo */}
            <motion.div
              whileHover={{ rotate: [0, -6, 6, 0] }}
              transition={{ duration: 0.3 }}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-[10px] bg-[#3B82F6] flex items-center justify-center text-white font-bold text-xs sm:text-[13px] shadow-sm shadow-blue-500/25 group-hover:scale-105 transition-transform duration-200"
            >
              FA
            </motion.div>

            {/* Name + Subtitle */}
            <div className="flex flex-col">
              <span className="text-[13px] sm:text-sm font-bold text-[#172033] tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                Farhan Ali
              </span>
              <span className="text-[10px] sm:text-[11px] font-normal text-[#64748B] leading-none mt-0.5 truncate max-w-[140px] sm:max-w-none">
                Full-Stack Web Developer
              </span>
            </div>
          </motion.button>

          {/* ========================================= */}
          {/* CENTER: Navigation Links */}
          {/* ========================================= */}
          <ul className="hidden md:flex items-center justify-center gap-1.5 px-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <motion.button
                  whileHover={{ y: -1.5 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`group relative px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 cursor-pointer flex flex-col items-center ${
                    link.active
                      ? "bg-[#EFF6FF] text-[#2563EB] font-semibold shadow-2xs"
                      : "text-[#64748B] hover:text-[#2563EB] hover:bg-[#F8FAFC]"
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Subtle active / hover bottom line */}
                  {link.active && (
                    <span className="absolute bottom-1 w-3.5 h-[2px] bg-[#3B82F6] rounded-full" />
                  )}
                </motion.button>
              </li>
            ))}
          </ul>

          {/* ========================================= */}
          {/* RIGHT: Hire Me Button (Blue-to-Purple Gradient) & Mobile Hamburger */}
          {/* ========================================= */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Desktop Hire Me -> Button */}
            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => handleNavClick("#contact")}
              className="hidden md:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] hover:from-[#2563EB] hover:to-[#7C3AED] text-white text-[13px] font-semibold shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-200 group cursor-pointer relative overflow-hidden after:absolute after:inset-0 after:translate-x-[-120%] hover:after:translate-x-[120%] after:bg-gradient-to-r after:from-transparent after:via-white/25 after:to-transparent after:transition-transform after:duration-700"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#172033] hover:text-blue-600 shadow-2xs transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              <div className="w-4 flex flex-col gap-1.5">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="block h-[2px] bg-current rounded-full origin-center transition-transform"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-[2px] bg-current rounded-full"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="block h-[2px] bg-current rounded-full origin-center transition-transform"
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ========================================= */}
      {/* MOBILE POPUP NAVIGATION MENU */}
      {/* ========================================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed top-18 left-4 right-4 z-50 bg-white/98 backdrop-blur-xl border border-slate-200 rounded-[22px] p-5 md:hidden shadow-2xl max-w-sm mx-auto"
          >
            {/* Top Close bar */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-[8px] bg-[#3B82F6] flex items-center justify-center text-white font-bold text-xs shadow-xs">
                  FA
                </div>
                <span className="text-sm font-bold text-[#172033]">Farhan Ali</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-7 h-7 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Nav links */}
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-between ${
                      link.active
                        ? "bg-[#EFF6FF] text-[#2563EB] font-bold"
                        : "text-[#475569] hover:text-[#2563EB] hover:bg-[#F8FAFC]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                    )}
                  </button>
                </li>
              ))}

              {/* Hire Me CTA inside mobile drawer */}
              <li className="mt-3 pt-3 border-t border-slate-100">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] text-white text-sm font-bold shadow-md shadow-blue-500/25 flex items-center justify-center gap-2"
                >
                  <span>Hire Me</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
