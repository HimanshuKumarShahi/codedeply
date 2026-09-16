"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  initials: string;
  color: string;
  stars: number;
  stackBadge: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "CodeDeploy cut our build and deploy time by 80%. Going from 45-minute Jenkins pipelines to under 20 seconds on CodeDeploy saved our engineering team dozens of hours every sprint.",
    name: "Rohan Sharma",
    title: "Staff Infrastructure Engineer",
    company: "Razorpay",
    initials: "RS",
    color: "#4f46e5",
    stars: 5,
    stackBadge: "Next.js + Turborepo",
  },
  {
    quote:
      "The integrated BaaS Postgres and BullMQ worker queues meant we didn't have to spin up three extra cloud services. Everything just connects seamlessly with our Git branches.",
    name: "Priya Nair",
    title: "VP of Engineering",
    company: "StartupXYZ",
    initials: "PN",
    color: "#7c3aed",
    stars: 5,
    stackBadge: "Postgres + Redis",
  },
  {
    quote:
      "Finally a deployment platform that treats BaaS as a first-class citizen. Instant PR branch preview environments with their own database forks have leveled up our QA process completely.",
    name: "Alex Chen",
    title: "Full-Stack Architect",
    company: "HyperScale Labs",
    initials: "AC",
    color: "#0284c7",
    stars: 5,
    stackBadge: "Node.js + Docker",
  },
  {
    quote:
      "The WebSocket live log streaming is ridiculously fast. When an edge build fails, you immediately see the stack trace in real time with zero buffering or lag.",
    name: "Sarah Johnson",
    title: "DevOps Lead",
    company: "Fintech Core",
    initials: "SJ",
    color: "#059669",
    stars: 5,
    stackBadge: "FastAPI + Go",
  },
  {
    quote:
      "As a solo founder, CodeDeploy is like having a dedicated DevOps and SRE team on call 24/7. Push to git, and the multi-region edge takes care of the rest.",
    name: "Marcus Williams",
    title: "Founder & CEO",
    company: "VibeCode",
    initials: "MW",
    color: "#d97706",
    stars: 5,
    stackBadge: "Remix + BaaS",
  },
  {
    quote:
      "Zero YAML headaches. The CLI auto-detects dependencies and provisions the environment automatically. Migrating our services took less than a single afternoon.",
    name: "Aditya Kumar",
    title: "Lead Platform Engineer",
    company: "CloudNative Inc",
    initials: "AK",
    color: "#db2777",
    stars: 5,
    stackBadge: "Python + Redis",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex-shrink-0 w-80 sm:w-96 rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl shadow-sm hover:shadow-lg transition-all mx-3 flex flex-col justify-between">
      <div>
        {/* Top bar: Trustpilot Green Stars + Stack Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5">
              {Array.from({ length: testimonial.stars }).map((_, i) => (
                <div key={i} className="w-4 h-4 rounded-[2px] bg-[#00B090] text-white flex items-center justify-center text-[10px] font-bold">
                  ★
                </div>
              ))}
            </div>
            <span className="text-[10px] font-bold text-[#00B090] ml-1">Verified</span>
          </div>

          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400">
            {testimonial.stackBadge}
          </span>
        </div>

        {/* Quote */}
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 font-normal">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-white/[0.06]">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold text-white shadow-sm shrink-0"
          style={{ backgroundColor: testimonial.color }}
        >
          {testimonial.initials}
        </div>
        <div className="min-w-0">
          <div className="text-sm font-bold text-slate-900 dark:text-white truncate">
            {testimonial.name}
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
            {testimonial.title} • <span className="font-semibold text-slate-700 dark:text-slate-300">{testimonial.company}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-background">
      {/* Background radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 px-4 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-xs text-indigo-600 dark:text-indigo-300 font-semibold mb-5 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Developer Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
            Loved by engineers{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 dark:from-indigo-400 dark:via-violet-300 dark:to-cyan-400 bg-clip-text text-transparent">
              worldwide
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            From high-growth YC startups to established tech companies, developers rely on CodeDeploy every day to ship production code.
          </p>
        </motion.div>

        {/* Row 1: Marquee Left */}
        <div className="relative overflow-hidden mb-5">
          <div
            className="flex"
            style={{
              animation: "scroll-left 45s linear infinite",
              width: "max-content",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.animationPlayState = "running";
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Row 2: Marquee Right */}
        <div className="relative overflow-hidden">
          <div
            className="flex"
            style={{
              animation: "scroll-right 45s linear infinite",
              width: "max-content",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.animationPlayState = "running";
            }}
          >
            {[...testimonials.slice(3), ...testimonials, ...testimonials.slice(0, 3)].map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
