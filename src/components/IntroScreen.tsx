"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2 } from "lucide-react";

export default function IntroScreen({ onFinish }: { onFinish?: () => void }) {
  const [stage, setStage] = useState<"greeting" | "split" | "done">("greeting");

  useEffect(() => {
    // Stage 1: Greeting is visible for ~3.8 seconds (total ~5 seconds with split)
    const timerGreeting = setTimeout(() => {
      setStage("split");
    }, 3800);

    // Stage 2: Curtain split takes ~1.2s, completing at ~5.0s
    const timerDone = setTimeout(() => {
      setStage("done");
      if (onFinish) onFinish();
    }, 5000);

    return () => {
      clearTimeout(timerGreeting);
      clearTimeout(timerDone);
    };
  }, [onFinish]);

  if (stage === "done") return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden select-none">
      {/* Left Shutter / Curtain (Clean Soft Light White Panel) */}
      <motion.div
        initial={{ x: 0 }}
        animate={stage === "split" ? { x: "-100%" } : { x: 0 }}
        transition={{ duration: 1.15, ease: [0.77, 0, 0.175, 1] }}
        className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#FAFBFF] border-r border-[#E2E8F0] shadow-2xl flex items-center justify-end overflow-hidden"
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      </motion.div>

      {/* Right Shutter / Curtain (Clean Soft Light White Panel) */}
      <motion.div
        initial={{ x: 0 }}
        animate={stage === "split" ? { x: "100%" } : { x: 0 }}
        transition={{ duration: 1.15, ease: [0.77, 0, 0.175, 1] }}
        className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#FAFBFF] border-l border-[#E2E8F0] shadow-2xl flex items-center justify-start overflow-hidden"
      >
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
      </motion.div>

      {/* Central Content matching exact reference mockup */}
      <AnimatePresence>
        {stage === "greeting" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(6px)", transition: { duration: 0.4 } }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-[105]"
          >
            {/* Soft Ambient Radial glow */}
            <div
              className="absolute w-[500px] h-[300px] rounded-full pointer-events-none -z-10"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.08) 50%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            {/* Pill Badge: </> FULL-STACK WEB DEVELOPER */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#BFDBFE] text-[#2563EB] text-[11px] font-bold font-mono tracking-widest uppercase mb-6 shadow-sm"
            >
              <Code2 className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>FULL-STACK WEB DEVELOPER</span>
            </motion.div>

            {/* Main Welcome Heading */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mb-4"
            >
              <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black text-[#172033] tracking-tight leading-[1.05]">
                Welcome to
              </h1>
              <div className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight leading-[1.05]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#9333EA]">
                  Farhan Ali
                </span>{" "}
                <span className="text-[#172033]">Portfolio</span>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="text-[#64748B] text-base sm:text-lg md:text-xl font-normal max-w-xl leading-relaxed mb-6"
            >
              Building fast, modern & scalable digital experiences
            </motion.p>

            {/* Gradient underline expanding */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "96px", opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="h-[3.5px] rounded-full bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] shadow-md shadow-blue-500/30"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
