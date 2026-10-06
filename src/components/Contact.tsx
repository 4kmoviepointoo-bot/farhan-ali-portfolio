"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Mail,
  User,
  MessageSquare,
  Clock,
  ArrowRight,
  Briefcase,
  ChevronDown,
  Check,
} from "lucide-react";

const BUDGET_OPTIONS = [
  "$15 – $100",
  "$100 – $250",
  "$250 – $500",
  "$500 – $1,000",
  "$1,000 – $2,500",
  "$2,500+",
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "",
    details: "",
  });

  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [budgetError, setBudgetError] = useState(false);
  const budgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (budgetRef.current && !budgetRef.current.contains(event.target as Node)) {
        setIsBudgetOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.budget) {
      setBudgetError(true);
      setIsBudgetOpen(true);
      return;
    }
    setBudgetError(false);
    setErrorMessage("");
    setLoading(true);

    try {
      const accessKey =
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
        "4adf83fe-bc4f-4994-9dfa-4c260851895f";
      if (accessKey) {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: form.name,
            email: form.email,
            budget: form.budget,
            message: form.details,
            subject: `Farhan Ali Portfolio: New Message from ${form.name} (${form.budget})`,
            from_name: `${form.name} via Farhan Ali Portfolio`,
          }),
        });

        const data = await response.json();
        if (!data.success) {
          throw new Error(data.message || "Failed to send message. Please try again.");
        }
      } else {
        // Fallback simulation when access key is yet to be provided
        await new Promise((r) => setTimeout(r, 1000));
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again or email directly.";
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] relative overflow-hidden"
      ref={ref}
    >
      {/* Background Soft Pastel Ambient Glows */}
      <div className="absolute top-1/4 -left-24 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100/40 via-cyan-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[450px] h-[450px] bg-cyan-100/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[550px] h-[550px] bg-gradient-to-tl from-purple-100/35 via-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Top Header Row with Hand-drawn phrase on upper-right */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-14 gap-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {/* Pill Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-[11px] font-bold font-mono tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              <span>GET IN TOUCH</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-[#172033] tracking-tight leading-[1.08] mb-4">
              Let&apos;s Build Something
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#4F46E5] via-[#9333EA] to-[#EC4899] animate-text-blush inline-block">
                Great Together.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-[#64748B] text-sm sm:text-[15px] max-w-lg font-normal leading-relaxed">
              Have a project in mind? Tell me about it — I typically respond within 24 hours.
            </p>
          </motion.div>

          {/* Decorative subtle handwritten-style phrase */}
          <div className="hidden lg:block select-none pt-2 pr-6">
            <span className="text-[17px] font-serif italic text-[#818CF8]/85 tracking-wide rotate-[-3deg] inline-block font-medium drop-shadow-xs">
              Let&apos;s Create
              <br />
              Something Amazing
            </span>
          </div>
        </div>

        {/* 2-Column Responsive Layout: Left 40% (Info Cards), Right 60% (Form Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ======================================================== */}
          {/* LEFT COLUMN: 3 Clean Information Cards */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-4.5 space-y-4"
          >
            {/* CARD 1 — EMAIL (Clickable link) */}
            <motion.a
              href="mailto:f.a.develpor@gmail.com"
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-[22px] p-5 sm:p-6 border border-[#E2E8F0] hover:border-[#93C5FD] shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.08)] transition-all duration-200 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE]/60 flex items-center justify-center text-[#2563EB] shrink-0 transition-transform group-hover:scale-105">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#94A3B8] uppercase font-mono block">
                    EMAIL
                  </span>
                  <span className="text-sm sm:text-[15px] font-bold text-[#172033] group-hover:text-[#2563EB] transition-colors break-all">
                    f.a.develpor@gmail.com
                  </span>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#F8FAFC] group-hover:bg-[#EFF6FF] border border-[#E2E8F0] group-hover:border-[#BFDBFE] flex items-center justify-center text-[#94A3B8] group-hover:text-[#2563EB] transition-all shrink-0">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </motion.a>

            {/* CARD 2 — RESPONSE TIME */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-[22px] p-5 sm:p-6 border border-[#E2E8F0] hover:border-[#86EFAC] shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_30px_rgba(16,185,129,0.08)] transition-all duration-200 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0]/60 flex items-center justify-center text-[#059669] shrink-0 transition-transform group-hover:scale-105">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#94A3B8] uppercase font-mono block">
                    RESPONSE TIME
                  </span>
                  <span className="text-sm sm:text-[15px] font-bold text-[#172033]">
                    Within 24 hours
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CARD 3 — AVAILABLE FOR WORK */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-[22px] p-5 sm:p-6 border border-[#E2E8F0] hover:border-[#C4B5FD] shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_30px_rgba(139,92,246,0.08)] transition-all duration-200 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#F5F3FF] border border-[#DDD6FE] flex items-center justify-center shrink-0 mt-0.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-bold tracking-wider text-[#172033] uppercase font-mono">
                    AVAILABLE FOR WORK
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed font-normal">
                  Currently accepting new freelance projects. Specialized in Next.js, React, Node.js, and Supabase.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Contact Form inside Premium White Card */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[26px] p-7 sm:p-9 border border-[#E2E8F0] shadow-[0_10px_35px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_45px_rgba(15,23,42,0.06)] transition-all duration-300">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 flex flex-col items-center justify-center text-center gap-3.5"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-1">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-[#172033] tracking-tight">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-[#64748B] max-w-sm leading-relaxed">
                    Thank you for reaching out. I&apos;ve received your message and will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", budget: "", details: "" });
                    }}
                    className="mt-4 px-5 py-2 rounded-full border border-slate-200 hover:border-slate-300 text-xs font-semibold text-slate-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-semibold text-[#334155] flex items-center gap-1.5"
                      >
                        <User className="w-3.5 h-3.5 text-[#64748B]" />
                        <span>Name</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Smith"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full bg-[#FFFFFF] border border-[#E2E8F0] focus:border-[#3B82F6] focus:ring-3 focus:ring-blue-100 rounded-xl px-4 py-3 text-sm text-[#172033] placeholder:text-[#94A3B8] transition-all duration-200 outline-none"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold text-[#334155] flex items-center gap-1.5"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#64748B]" />
                        <span>Email</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full bg-[#FFFFFF] border border-[#E2E8F0] focus:border-[#3B82F6] focus:ring-3 focus:ring-blue-100 rounded-xl px-4 py-3 text-sm text-[#172033] placeholder:text-[#94A3B8] transition-all duration-200 outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 2: Budget Range */}
                  <div className="flex flex-col gap-1.5" ref={budgetRef}>
                    <label
                      htmlFor="budget-trigger"
                      className="text-xs font-semibold text-[#334155] flex items-center gap-1.5"
                    >
                      <Briefcase className="w-3.5 h-3.5 text-[#64748B]" />
                      <span>Budget Range</span>
                    </label>

                    <div className="relative">
                      {/* Hidden input for budget */}
                      <input
                        type="hidden"
                        name="budget"
                        value={form.budget}
                      />

                      {/* Dropdown Trigger Button */}
                      <button
                        id="budget-trigger"
                        type="button"
                        onClick={() => {
                          setIsBudgetOpen((prev) => !prev);
                          if (budgetError) setBudgetError(false);
                        }}
                        className={`w-full bg-[#FFFFFF] border rounded-xl px-4 py-3 text-sm text-left flex items-center justify-between cursor-pointer transition-all duration-200 outline-none ${
                          budgetError
                            ? "border-rose-400 ring-3 ring-rose-100"
                            : isBudgetOpen
                            ? "border-[#3B82F6] ring-3 ring-blue-100 shadow-sm"
                            : "border-[#E2E8F0] hover:border-[#CBD5E1]"
                        }`}
                      >
                        <span
                          className={
                            form.budget
                              ? "text-[#172033] font-medium"
                              : "text-[#94A3B8]"
                          }
                        >
                          {form.budget || "Select your budget..."}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isBudgetOpen
                              ? "rotate-180 text-[#2563EB]"
                              : "text-[#94A3B8]"
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu Popup */}
                      <AnimatePresence>
                        {isBudgetOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -4, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -4, scale: 0.98 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="absolute top-full left-0 right-0 mt-2 z-50 bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl shadow-[0_12px_36px_rgba(15,23,42,0.1)] py-2 overflow-hidden"
                          >
                            {BUDGET_OPTIONS.map((opt) => {
                              const isSelected = form.budget === opt;
                              return (
                                <button
                                  key={opt}
                                  type="button"
                                  onClick={() => {
                                    setForm((prev) => ({ ...prev, budget: opt }));
                                    setBudgetError(false);
                                    setIsBudgetOpen(false);
                                  }}
                                  className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between transition-colors cursor-pointer ${
                                    isSelected
                                      ? "bg-[#EFF6FF] text-[#2563EB] font-semibold"
                                      : "text-[#334155] hover:bg-[#F8FAFC] hover:text-[#2563EB] font-medium"
                                  }`}
                                >
                                  <span>{opt}</span>
                                  {isSelected && (
                                    <Check className="w-4 h-4 text-[#2563EB]" />
                                  )}
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {budgetError && (
                      <p className="text-[12px] text-rose-500 font-medium mt-0.5">
                        Please select a budget range.
                      </p>
                    )}
                  </div>

                  {/* Row 3: Project Details Textarea */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="details"
                      className="text-xs font-semibold text-[#334155] flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#64748B]" />
                      <span>Project Details</span>
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      required
                      rows={5}
                      placeholder="Tell me about your project — what you need, your timeline, and any specific requirements..."
                      value={form.details}
                      onChange={handleChange}
                      className="w-full bg-[#FFFFFF] border border-[#E2E8F0] focus:border-[#3B82F6] focus:ring-3 focus:ring-blue-100 rounded-xl px-4 py-3 text-sm text-[#172033] placeholder:text-[#94A3B8] transition-all duration-200 outline-none resize-y min-h-[120px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.94 }}
                    className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#9333EA] hover:from-[#1D4ED8] hover:to-[#7E22CE] text-white text-sm font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed mt-1 relative overflow-hidden group after:absolute after:inset-0 after:translate-x-[-120%] hover:after:translate-x-[120%] after:bg-gradient-to-r after:from-transparent after:via-white/25 after:to-transparent after:transition-transform after:duration-700"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  {errorMessage && (
                    <p className="text-xs text-rose-600 bg-rose-50 border border-rose-200 rounded-xl px-4 py-2.5 text-center font-medium">
                      {errorMessage}
                    </p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
