"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Floating Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-[#2563EB] via-[#7C3AED] via-[#C026D3] to-[#EC4899] z-[9999] origin-left shadow-[0_1px_10px_rgba(37,99,235,0.4)] pointer-events-none"
      />

      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            whileHover={{ y: -4, scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-[0_8px_25px_rgba(15,23,42,0.12)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.2)] text-[#172033] hover:text-[#2563EB] flex items-center justify-center cursor-pointer transition-colors group"
          >
            <ArrowUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5 text-current" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
