"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden pt-28 pb-16 px-4 bg-[#FAFBFF]"
    >
      {/* 1. Large soft blue blurred circle in top-left */}
      <div className="absolute top-0 -left-20 w-[550px] h-[550px] bg-gradient-to-br from-blue-100/50 via-cyan-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* 2. Very subtle purple blurred circle in bottom-right */}
      <div className="absolute -bottom-10 -right-20 w-[550px] h-[550px] bg-gradient-to-tl from-purple-100/45 via-indigo-50/25 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* 3. Small blue floating dot around left side */}
      <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] sm:left-[14%] top-[38%] w-3 h-3 rounded-full bg-[#3B82F6]/40 blur-[0.5px] pointer-events-none"
      />

      {/* 4. Small purple floating dot around right side */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[10%] sm:right-[13%] top-[56%] w-3 h-3 rounded-full bg-[#8B5CF6]/45 blur-[0.5px] pointer-events-none"
      />

      {/* 5. Very thin curved circular lines/arcs around corners */}
      <svg
        className="absolute -top-12 -left-12 w-[340px] h-[340px] text-blue-200/40 pointer-events-none -z-0"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="20" cy="20" r="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
        <circle cx="20" cy="20" r="75" stroke="currentColor" strokeWidth="0.4" />
      </svg>
      <svg
        className="absolute -top-16 -right-16 w-[380px] h-[380px] text-purple-200/40 pointer-events-none -z-0"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="80" cy="20" r="65" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
        <circle cx="80" cy="20" r="82" stroke="currentColor" strokeWidth="0.4" />
      </svg>

      {/* Floating subtle developer code symbols in background */}
      <motion.span
        animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[8%] sm:left-[12%] bottom-[22%] text-2xl font-mono text-blue-300/35 select-none pointer-events-none"
      >
        {"{ }"}
      </motion.span>
      <motion.span
        animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute right-[9%] sm:right-[14%] top-[24%] text-2xl font-mono text-purple-300/35 select-none pointer-events-none"
      >
        {"</>"}
      </motion.span>

      {/* 6. Center radial glow behind the main heading */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.06) 45%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Main Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* TOP BADGE: </> FULL-STACK WEB DEVELOPER */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ y: -2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-[#BFDBFE] text-[#2563EB] text-[11px] font-bold font-mono tracking-widest uppercase mb-7 shadow-[0_2px_12px_rgba(59,130,246,0.08)] group cursor-default transition-all duration-200"
        >
          <Code2 className="w-3.5 h-3.5 text-[#3B82F6] group-hover:rotate-12 transition-transform duration-200" />
          <span>FULL-STACK WEB DEVELOPER</span>
        </motion.div>

        {/* MAIN HEADING */}
        <div className="mb-5">
          {/* Line 1: Welcome to */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[34px] xs:text-[42px] sm:text-[60px] md:text-[74px] lg:text-[86px] font-black tracking-tight text-[#172033] leading-[1.04]"
          >
            Welcome to
          </motion.h1>

          {/* Line 2: Farhan Ali Portfolio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-[34px] xs:text-[42px] sm:text-[60px] md:text-[74px] lg:text-[86px] font-black tracking-tight leading-[1.04]"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#9333EA] inline-block animate-text-blush">
              Farhan Ali
            </span>{" "}
            <span className="text-[#172033]">Portfolio</span>
          </motion.div>
        </div>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="text-[#64748B] text-base sm:text-lg md:text-[20px] font-normal max-w-xl mx-auto leading-relaxed mb-6"
        >
          Building fast, modern & scalable digital experiences
        </motion.p>

        {/* DECORATIVE GRADIENT UNDERLINE (80–110px, Blue -> Purple) */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "96px", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="h-[3.5px] rounded-full bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] shadow-[0_2px_10px_rgba(59,130,246,0.35)]"
        />
      </div>
    </section>
  );
}
