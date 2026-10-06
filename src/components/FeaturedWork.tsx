"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShoppingCart,
  BarChart2,
  Lock,
  Zap,
  Globe,
  Database,
  Send,
  Truck,
  Code2,
  Circle,
} from "lucide-react";

export default function FeaturedWork() {
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      {/* Background soft ambient glows exactly as seen in mockup */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-cyan-100/60 via-blue-50/40 to-transparent rounded-full blur-3xl pointer-events-none -mr-24 -mt-24" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100/50 via-indigo-50/30 to-transparent rounded-full blur-3xl pointer-events-none -ml-24 -mb-24" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-left">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#3b82f6] uppercase font-mono block mb-3">
            FEATURED WORK
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-black text-[#0f172a] tracking-tight leading-[1.05] mb-4">
            Shipped{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] via-[#6366f1] via-[#d946ef] to-[#ec4899] animate-text-blush inline-block">
              Projects
            </span>
          </h2>
          <p className="text-[#64748b] text-sm sm:text-[15px] max-w-xl font-normal leading-relaxed">
            Real-world applications built with production-grade architecture — not toy demos.
          </p>
        </div>

        {/* 2 Side-by-Side Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* ========================================================= */}
          {/* CARD 1: PrimPhone */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-[28px] p-7 sm:p-8 border border-[#e2e8f0] hover:border-blue-300 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(37,99,235,0.08)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Status Pill Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ecfdf5] text-[#059669] border border-[#a7f3d0] text-[11px] font-semibold tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                  Live Project •
                </span>
              </div>

              {/* Title, Subtitle & Browser Mockup Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-start mb-6">
                {/* Left Text */}
                <div className="sm:col-span-6 flex flex-col">
                  <h3 className="text-[26px] font-black text-[#0f172a] tracking-tight leading-tight">
                    PrimPhone
                  </h3>
                  <p className="text-[12px] font-semibold text-[#475569] mt-1 mb-3">
                    Full-Stack E-Commerce & Marketplace Platform
                  </p>
                  <p className="text-[12px] text-[#64748b] leading-[1.65] font-normal">
                    A production-grade, full-stack phone marketplace with a React + Vite frontend, an Express.js REST API backend, and a SQLite database. Features a complete purchase flow with Google OAuth, JWT-secured session management, and a comprehensive admin control panel.
                  </p>
                </div>

                {/* Right: Window Mockup */}
                <div className="sm:col-span-6 bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-xs flex flex-col">
                  {/* Browser top-bar */}
                  <div className="bg-white px-3 py-2 border-b border-[#e2e8f0] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#cbd5e1]" />
                      <span className="w-2 h-2 rounded-full bg-[#cbd5e1]" />
                      <span className="w-2 h-2 rounded-full bg-[#cbd5e1]" />
                    </div>
                    <span className="text-[9px] font-mono text-[#94a3b8]">primphone.app</span>
                    <span className="w-3" />
                  </div>

                  {/* Browser content */}
                  <div className="p-3 bg-gradient-to-br from-[#eff6ff]/70 via-white to-[#f8fafc] flex flex-col gap-2">
                    {/* Hero inside mockup */}
                    <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-[#e2e8f0]/80 shadow-xs">
                      <div>
                        <span className="text-[10px] font-extrabold text-[#0f172a] block leading-tight">
                          Latest Smartphones
                        </span>
                        <span className="text-[8px] text-[#94a3b8] block mb-1">
                          Next-Gen Tech. Best Prices.
                        </span>
                        <span className="px-2 py-0.5 bg-[#2563eb] text-white text-[7px] font-bold rounded">
                          Shop Now
                        </span>
                      </div>
                      <div className="w-12 h-10 bg-gradient-to-tr from-[#1e293b] to-[#0f172a] rounded-lg flex items-center justify-center shadow-xs">
                        <span className="text-[8px] text-white font-mono font-bold tracking-wider">PRO</span>
                      </div>
                    </div>

                    {/* Product grid inside mockup */}
                    <div>
                      <span className="text-[8px] font-bold text-[#475569] block mb-1">
                        Featured Products
                      </span>
                      <div className="grid grid-cols-4 gap-1.5">
                        {[
                          { name: "Pixel 9", color: "from-blue-500 to-indigo-600" },
                          { name: "S24 Ultra", color: "from-slate-700 to-slate-900" },
                          { name: "iPhone 16", color: "from-cyan-500 to-teal-600" },
                          { name: "Nord 4", color: "from-purple-500 to-pink-600" },
                        ].map((p, idx) => (
                          <div
                            key={idx}
                            className="bg-white p-1 rounded-lg border border-[#f1f5f9] flex flex-col items-center text-center shadow-xs"
                          >
                            <div className={`w-full h-8 rounded bg-gradient-to-b ${p.color} mb-1 flex items-center justify-center`}>
                              <span className="w-2 h-4 rounded-sm bg-white/20 border border-white/40" />
                            </div>
                            <span className="text-[7px] font-medium text-[#334155] truncate w-full">
                              {p.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features List (2 columns with exact blue outline icons matching image) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3.5 my-6 pt-5 border-t border-[#f1f5f9]">
                <div className="flex items-start gap-2.5">
                  <div className="text-[#3b82f6] shrink-0 mt-0.5">
                    <Circle className="w-4 h-4 text-[#3b82f6]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[12px] text-[#475569] leading-snug">
                    Google OAuth & JWT Auth with bcrypt password hashing
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="text-[#3b82f6] shrink-0 mt-0.5">
                    <ShoppingCart className="w-4 h-4 text-[#3b82f6]" />
                  </div>
                  <span className="text-[12px] text-[#475569] leading-snug">
                    Full cart, checkout & order management system
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="text-[#3b82f6] shrink-0 mt-0.5">
                    <BarChart2 className="w-4 h-4 text-[#3b82f6]" />
                  </div>
                  <span className="text-[12px] text-[#475569] leading-snug">
                    Admin dashboard — manage products, users & orders
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="text-[#3b82f6] shrink-0 mt-0.5">
                    <Zap className="w-4 h-4 text-[#3b82f6]" />
                  </div>
                  <span className="text-[12px] text-[#475569] leading-snug">
                    Animated UI with Framer Motion + GSAP + Three.js
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="text-[#3b82f6] shrink-0 mt-0.5">
                    <Lock className="w-4 h-4 text-[#3b82f6]" />
                  </div>
                  <span className="text-[12px] text-[#475569] leading-snug">
                    Production Security: Helmet, rate-limiting, CORS, compression
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="text-[#3b82f6] shrink-0 mt-0.5">
                    <Globe className="w-4 h-4 text-[#3b82f6]" />
                  </div>
                  <span className="text-[12px] text-[#475569] leading-snug">
                    Deployed on Vercel with mongoDB service binding
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Tech Stack Badges + View Project CTA */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-[#f1f5f9]">
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  "React 18",
                  "TypeScript",
                  "Vite",
                  "Tailwind CSS",
                  "Framer Motion",
                  "Express.js",
                  "SQLite",
                  "JWT",
                  "Google OAuth",
                  "Vercel",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-[#f1f5f9] text-[#64748b] rounded-md text-[11px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.94 }}
                href="https://primphone.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[#3b82f6] bg-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 text-[#2563eb] hover:text-white text-xs font-semibold shadow-xs hover:shadow-md hover:shadow-blue-500/25 transition-all duration-200 w-full sm:w-auto shrink-0 group cursor-pointer"
              >
                <span>View Project</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.a>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* CARD 2: LuxeShop */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-[28px] p-7 sm:p-8 border border-[#e2e8f0] hover:border-teal-300 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(13,148,136,0.08)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Status Pill Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ecfdf5] text-[#059669] border border-[#a7f3d0] text-[11px] font-semibold tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                  Live Project •
                </span>
              </div>

              {/* Title, Subtitle & Browser Mockup Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-start mb-6">
                {/* Left Text */}
                <div className="sm:col-span-6 flex flex-col">
                  <h3 className="text-[26px] font-black text-[#0f172a] tracking-tight leading-tight">
                    LuxeShop
                  </h3>
                  <p className="text-[12px] font-semibold text-[#475569] mt-1 mb-3">
                    Premium Next.js E-Commerce with Supabase Backend
                  </p>
                  <p className="text-[12px] text-[#64748b] leading-[1.65] font-normal">
                    A Next.js 16 luxury e-commerce platform for fashion, watches, and lifestyle products. Integrates Supabase for real-time auth and database, features a silky-smooth Lenis scroll experience, a fly-to-cart animation, wishlist sync, multi-category browsing, and full SEO infrastructure.
                  </p>
                </div>

                {/* Right: Realistic LuxeShop UI Mockup */}
                <div className="sm:col-span-6 bg-[#0a0a0a] border border-[#262626] rounded-2xl overflow-hidden shadow-xs flex flex-col text-white">
                  {/* Browser top-bar */}
                  <div className="bg-[#171717] px-3 py-2 border-b border-[#262626] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#525252]" />
                      <span className="w-2 h-2 rounded-full bg-[#525252]" />
                      <span className="w-2 h-2 rounded-full bg-[#525252]" />
                    </div>
                    <span className="text-[9px] font-mono text-[#a3a3a3]">luxeshop.com</span>
                    <span className="w-3" />
                  </div>

                  {/* Browser content */}
                  <div className="p-3 bg-[#0a0a0a] flex flex-col gap-2">
                    {/* Hero banner inside mockup */}
                    <div className="relative bg-gradient-to-r from-[#171717] to-[#262626] p-2.5 rounded-xl border border-neutral-800 overflow-hidden flex items-center justify-between">
                      <div className="z-10">
                        <span className="text-[10px] font-extrabold text-white block leading-tight">
                          Timeless Elegance
                        </span>
                        <span className="text-[7.5px] text-neutral-400 block mb-1">
                          Luxury watches for a refined lifestyle.
                        </span>
                        <span className="px-2 py-0.5 bg-[#f59e0b] text-black text-[7px] font-bold rounded">
                          Explore
                        </span>
                      </div>
                      <div className="w-11 h-11 rounded-full border border-amber-500/30 bg-neutral-900 flex items-center justify-center shrink-0 overflow-hidden relative">
                        <Image
                          src="/projects/watch.jpg"
                          alt="Watch"
                          width={44}
                          height={44}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Popular Categories Row */}
                    <div>
                      <span className="text-[8px] font-bold text-neutral-400 block mb-1">
                        Popular Categories
                      </span>
                      <div className="grid grid-cols-4 gap-1.5">
                        {[
                          { name: "Watches", img: "/projects/watch.jpg" },
                          { name: "Bags", img: "/projects/bag.jpg" },
                          { name: "Perfumes", img: "/projects/perfume.jpg" },
                          { name: "Lifestyle", img: "/projects/accessory.jpg" },
                        ].map((c, idx) => (
                          <div
                            key={idx}
                            className="bg-[#171717] p-1 rounded-lg border border-[#262626] flex flex-col items-center text-center"
                          >
                            <div className="w-full h-8 rounded bg-neutral-900 mb-1 overflow-hidden flex items-center justify-center relative">
                              <Image
                                src={c.img}
                                alt={c.name}
                                width={64}
                                height={32}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="text-[7px] font-medium text-neutral-300 truncate w-full">
                              {c.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features List (2 columns with exact teal/emerald icons matching image) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3.5 my-6 pt-5 border-t border-[#f1f5f9]">
                <div className="flex items-start gap-2.5">
                  <div className="text-[#0d9488] shrink-0 mt-0.5">
                    <Database className="w-4 h-4 text-[#0d9488]" />
                  </div>
                  <span className="text-[12px] text-[#475569] leading-snug">
                    Supabase auth + database with row-level security
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="text-[#0d9488] shrink-0 mt-0.5">
                    <Lock className="w-4 h-4 text-[#0d9488]" />
                  </div>
                  <span className="text-[12px] text-[#475569] leading-snug">
                    Middleware-level route protection with security headers (HSTS, CSP, XSS)
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="text-[#0d9488] shrink-0 mt-0.5">
                    <Send className="w-4 h-4 text-[#0d9488]" />
                  </div>
                  <span className="text-[12px] text-[#475569] leading-snug">
                    Animated fly-to-cart, wishlist, and search with React Context
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="text-[#0d9488] shrink-0 mt-0.5">
                    <Truck className="w-4 h-4 text-[#0d9488]" />
                  </div>
                  <span className="text-[12px] text-[#475569] leading-snug">
                    20+ routes: shop, collections, account, orders, checkout, track-order
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="text-[#0d9488] shrink-0 mt-0.5">
                    <Zap className="w-4 h-4 text-[#0d9488]" />
                  </div>
                  <span className="text-[12px] text-[#475569] leading-snug">
                    Lenis smooth scroll + Framer Motion micro-interactions
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="text-[#0d9488] shrink-0 mt-0.5">
                    <Code2 className="w-4 h-4 text-[#0d9488]" />
                  </div>
                  <span className="text-[12px] text-[#475569] leading-snug">
                    robots.txt + sitemap.ts for production-grade SEO
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Tech Stack Badges + View Project CTA */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-[#f1f5f9]">
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  "Next.js 16",
                  "React 19",
                  "TypeScript",
                  "Tailwind CSS v4",
                  "Framer Motion",
                  "Supabase",
                  "Lenis Scroll",
                  "Lucide React",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-[#f0fdfa] text-[#0f766e] rounded-md text-[11px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.94 }}
                href="https://ecomerence-d4l8cm986-ch-45e0.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[#0d9488] bg-white hover:bg-gradient-to-r hover:from-teal-600 hover:to-emerald-600 text-[#0f766e] hover:text-white text-xs font-semibold shadow-xs hover:shadow-md hover:shadow-teal-500/25 transition-all duration-200 w-full sm:w-auto shrink-0 group cursor-pointer"
              >
                <span>View Project</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
