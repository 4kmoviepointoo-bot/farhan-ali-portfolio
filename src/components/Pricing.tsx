"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Calendar, Star, Code2, Layers, Crown } from "lucide-react";

interface Plan {
  id: string;
  badge?: string;
  name: string;
  icon: React.ReactNode;
  iconBg: string;
  price: string;
  priceSub: string;
  description: string;
  features: string[];
  delivery: string;
  ctaText: string;
  isPopular?: boolean;
}

const PLANS: Plan[] = [
  {
    id: "basic",
    name: "BASIC",
    icon: <Code2 className="w-4 h-4 text-blue-600" />,
    iconBg: "bg-blue-50 border-blue-200/60",
    price: "Let's Talk",
    priceSub: "custom quote",
    description:
      "Perfect for individuals and small businesses that need a professional landing page that converts.",
    features: [
      "Up to 3 pages",
      "Mobile-first, responsive design",
      "Landing page / portfolio / brochure",
      "Tailwind CSS custom UI",
      "Contact form integration",
      "Basic on-page SEO",
      "1 revision round",
    ],
    delivery: "Estimated delivery: 5–7 business days",
    ctaText: "Book a Discovery Call",
  },
  {
    id: "standard",
    name: "STANDARD",
    badge: "MOST POPULAR",
    icon: <Layers className="w-4 h-4 text-emerald-600" />,
    iconBg: "bg-emerald-50 border-emerald-200/60",
    price: "Let's Talk",
    priceSub: "custom quote",
    description:
      "Full-featured e-commerce or advanced multi-page site with a custom admin dashboard and robust data handling.",
    features: [
      "Full E-Commerce or advanced web app",
      "Admin dashboard & CMS panel",
      "Authentication (email/Google OAuth)",
      "Database integration (Supabase / MongoDB)",
      "Custom UI design system",
      "Cart, wishlist & checkout flow",
      "2 revision rounds",
      "Deployment on Vercel",
    ],
    delivery: "Estimated delivery: 2–3 weeks",
    ctaText: "Book a Discovery Call",
    isPopular: true,
  },
  {
    id: "premium",
    name: "PREMIUM",
    icon: <Crown className="w-4 h-4 text-purple-600" />,
    iconBg: "bg-purple-50 border-purple-200/60",
    price: "Let's Talk",
    priceSub: "custom quote",
    description:
      "Complex, bespoke full-stack web applications with custom architecture, third-party integrations, and ongoing support.",
    features: [
      "Next.js App Router + Supabase / MongoDB",
      "Complex database schemas & real-time features",
      "REST API or RPC backend",
      "Advanced auth & role-based access control",
      "Third-party integrations (payments, maps, etc.)",
      "Performance & security hardening",
      "Custom timeline & milestone-based delivery",
    ],
    delivery: "Estimated delivery: Custom timeline",
    ctaText: "Book a Discovery Call",
  },
];

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] relative overflow-hidden" ref={ref}>
      {/* Background Soft Pastel Glows */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-gradient-to-tr from-blue-100/40 via-cyan-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 -right-20 w-[500px] h-[500px] bg-gradient-to-bl from-purple-100/35 via-indigo-50/25 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-[450px] h-[450px] bg-cyan-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-center md:text-left gap-4">
          <div className="w-full text-center">
            {/* Eyebrow Label */}
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#3b82f6] uppercase font-mono block mb-3">
              FREELANCE SERVICES
            </span>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-[#172033] tracking-tight leading-[1.08] mb-3">
              Transparent{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] via-[#4f46e5] via-[#9333ea] to-[#ec4899] animate-text-blush inline-block">
                Pricing
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-[#64748b] text-sm sm:text-[15px] font-normal max-w-lg mx-auto leading-relaxed">
              No hidden fees. Clear deliverables. Professional results.
            </p>
          </div>

          {/* Decorative subtle handwritten tagline */}
          <div className="hidden lg:block select-none absolute right-4 top-2 pointer-events-none">
            <span className="text-[16px] font-serif italic text-[#818cf8]/80 tracking-wide rotate-[-3deg] inline-block font-medium">
              Code &rarr; Build &rarr; Deploy
            </span>
          </div>
        </div>

        {/* 3 Uniform Cards Grid matching Card 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-6 items-stretch pt-5">
          {PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col justify-between rounded-[24px] p-7 sm:p-8 transition-all duration-300 group ${
                plan.isPopular
                  ? "bg-white border-2 border-[#3b82f6]/50 shadow-[0_12px_45px_rgba(59,130,246,0.12)] lg:-translate-y-2 hover:shadow-[0_20px_55px_rgba(59,130,246,0.18)] hover:border-[#3b82f6]"
                  : "bg-white border border-[#E5EAF2] shadow-[0_4px_25px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.07)] hover:border-[#cbd5e1]"
              }`}
            >
              {/* Floating "MOST POPULAR" Badge on Standard Card */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#2563eb] to-[#8b5cf6] text-white text-[10px] font-bold tracking-wider shadow-md shadow-blue-500/25">
                    <Star className="w-2.5 h-2.5 fill-current" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Card Top: Small Icon + Category Name */}
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-8 h-8 rounded-lg ${plan.iconBg} border flex items-center justify-center shrink-0`}>
                    {plan.icon}
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.15em] text-[#64748b] uppercase font-mono">
                    {plan.name}
                  </span>
                </div>

                {/* Price Display: Let's Talk on ALL cards */}
                <div className="mb-1">
                  <h3 className="text-3xl sm:text-[36px] font-black text-[#172033] tracking-tight leading-tight">
                    {plan.price}
                  </h3>
                </div>

                {/* Sub-price label: custom quote on ALL cards */}
                <p className="text-[12px] text-[#94a3b8] mb-4 font-normal">
                  {plan.priceSub}
                </p>

                {/* Description */}
                <p className="text-[13px] text-[#475569] leading-relaxed mb-6 font-normal min-h-[44px]">
                  {plan.description}
                </p>

                {/* Feature List */}
                <div className="space-y-3 pt-5 border-t border-[#f1f5f9] mb-7">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 group/item">
                      <div className="w-4 h-4 rounded-full bg-[#10b981]/15 text-[#10b981] flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-200 group-hover/item:scale-110">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-[13px] text-[#334155] leading-snug font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Section: Delivery Time + CTA Button (Book a Discovery Call on ALL cards) */}
              <div>
                {/* Estimated Delivery */}
                <div className="flex items-center gap-2 text-[12px] text-[#64748b] mb-5 pt-4 border-t border-[#f1f5f9]">
                  <Calendar className="w-3.5 h-3.5 text-[#94a3b8]" />
                  <span>{plan.delivery}</span>
                </div>

                {/* CTA Button: Book a Discovery Call */}
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={scrollToContact}
                  className="w-full py-3.5 px-4 rounded-full border border-[#8b5cf6]/60 hover:border-[#8b5cf6] bg-white hover:bg-gradient-to-r hover:from-[#7c3aed] hover:to-[#9333ea] text-[#6d28d9] hover:text-white text-[13px] font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:shadow-lg hover:shadow-purple-500/25 relative overflow-hidden group after:absolute after:inset-0 after:translate-x-[-120%] hover:after:translate-x-[120%] after:bg-gradient-to-r after:from-transparent after:via-white/25 after:to-transparent after:transition-transform after:duration-700"
                >
                  <Calendar className="w-3.5 h-3.5 text-current transition-transform duration-200 group-hover:rotate-12" />
                  <span>Book a Discovery Call</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-xs text-[#94a3b8] mt-12 font-normal">
          All projects are quoted individually based on scope. Payment plans available.
        </p>
      </div>
    </section>
  );
}
