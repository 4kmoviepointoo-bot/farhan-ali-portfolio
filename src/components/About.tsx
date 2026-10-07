"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  User,
  Sparkles,
  CheckCircle2,
  Code,
  Layout,
  Rocket,
  Clock,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

const STATS = [
  {
    number: "2+",
    label: "Years Experience",
    sub: "Hands-on web dev & design",
    icon: <Clock className="w-5 h-5 text-blue-600" />,
    bg: "bg-blue-50/80 border-blue-200/60",
  },
  {
    number: "15+",
    label: "Projects Shipped",
    sub: "E-Commerce, landing pages & apps",
    icon: <Rocket className="w-5 h-5 text-indigo-600" />,
    bg: "bg-indigo-50/80 border-indigo-200/60",
  },
  {
    number: "100%",
    label: "Responsive & Modern",
    sub: "Pixel-perfect on all devices",
    icon: <Layout className="w-5 h-5 text-purple-600" />,
    bg: "bg-purple-50/80 border-purple-200/60",
  },
  {
    number: "24h",
    label: "Fast Response Time",
    sub: "Clear communication & support",
    icon: <Zap className="w-5 h-5 text-emerald-600" />,
    bg: "bg-emerald-50/80 border-emerald-200/60",
  },
];

const SKILLS_LIST = [
  "2+ Years of Professional Web Experience",
  "Modern Website Design & Responsive UI/UX",
  "Full-Stack Development (React, Next.js, Node.js)",
  "Clean, Maintainable & Scalable Code",
  "SEO-Friendly & Speed Optimized Architecture",
  "Fiverr & Freelance-Ready Client Delivery",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAFBFF] relative overflow-hidden"
    >
      {/* Background Subtle Pastel Glows */}
      <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-gradient-to-bl from-blue-100/40 via-indigo-50/25 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[450px] h-[450px] bg-purple-100/35 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1220px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-14 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {/* Pill Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-[11px] font-bold font-mono tracking-wider uppercase mb-4">
              <User className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>ABOUT ME</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-[#172033] tracking-tight leading-[1.08] mb-4">
              Passionate Web Developer
              <br className="hidden sm:inline" />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#4F46E5] via-[#9333EA] to-[#EC4899] animate-text-blush inline-block">
                &amp; Website Designer.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-[#64748B] text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
              2 years of dedication turning creative ideas into fast, modern, and high-converting digital products.
            </p>
          </motion.div>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* ========================================================= */}
          {/* LEFT: Detailed Bio & Freelancer Story (7 Columns) */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white rounded-[28px] p-7 sm:p-9 border border-[#E2E8F0] shadow-[0_4px_25px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Badge & Mini Intro */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB] font-black text-sm shadow-xs">
                  FA
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#172033] tracking-tight leading-tight">
                    Farhan Ali
                  </h3>
                  <p className="text-xs font-semibold text-[#3B82F6] mt-0.5">
                    Full-Stack Web Developer &amp; UI Designer • 2 Years Exp.
                  </p>
                </div>
              </div>

              {/* Story Description (Fiverr/Freelancer format) */}
              <div className="space-y-4 text-sm sm:text-[15px] text-[#475569] leading-relaxed font-normal mb-7">
                <p>
                  Hello! My name is <strong className="text-[#172033] font-semibold">Farhan Ali</strong>. 
                  I am a professional <strong className="text-[#172033] font-semibold">Full-Stack Web Developer</strong> and <strong className="text-[#172033] font-semibold">Website Designer</strong> with over <strong className="text-[#2563EB] font-bold">2 years of real-world experience</strong> delivering modern web solutions for clients and businesses.
                </p>
                <p>
                  Just like top-rated freelancers on Fiverr, I take immense pride in quality, timely communication, and client satisfaction. I don&apos;t just write code — I build fast, responsive, and visually stunning digital experiences that captivate users and drive results.
                </p>
                <p>
                  Whether you need an eye-catching landing page, a complete e-commerce marketplace, or a full-stack web application with authentication and database architecture, I handle everything from design to final deployment with clean, modern standards.
                </p>
              </div>

              {/* Key Highlights Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-5 border-t border-[#F1F5F9] mb-8">
                {SKILLS_LIST.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span className="text-xs sm:text-[13px] text-[#334155] font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.94 }}
                onClick={scrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#9333EA] hover:from-[#1D4ED8] hover:to-[#7E22CE] text-white text-sm font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-200 cursor-pointer relative overflow-hidden group after:absolute after:inset-0 after:translate-x-[-120%] hover:after:translate-x-[120%] after:bg-gradient-to-r after:from-transparent after:via-white/25 after:to-transparent after:transition-transform after:duration-700"
              >
                <span>Hire Me on Your Next Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT: 4 Stat Cards & Freelance Strengths (5 Columns) */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between gap-5"
          >
            {/* 4 Grid Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 + idx * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`bg-white rounded-[22px] p-5 sm:p-6 border border-[#E2E8F0] hover:border-blue-300 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.08)] transition-all duration-200 flex flex-col justify-between group cursor-default`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl ${stat.bg} border flex items-center justify-center transition-transform group-hover:scale-110`}
                    >
                      {stat.icon}
                    </div>
                    <Sparkles className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <div>
                    <span className="text-3xl font-black text-[#172033] tracking-tight leading-none block mb-1">
                      {stat.number}
                    </span>
                    <span className="text-xs font-bold text-[#334155] block">
                      {stat.label}
                    </span>
                    <span className="text-[11px] text-[#94A3B8] font-normal leading-tight mt-0.5 block">
                      {stat.sub}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Freelance Work Guarantee Banner */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-[#F5F3FF] rounded-[24px] p-6 border border-[#BFDBFE]/70 shadow-sm flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-2xl bg-white border border-[#93C5FD] flex items-center justify-center text-[#2563EB] shrink-0 mt-0.5 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#172033] mb-1">
                  100% Client Satisfaction Guaranteed
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Every project is crafted with high attention to detail, free revisions, clean code handover, and ongoing support.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
