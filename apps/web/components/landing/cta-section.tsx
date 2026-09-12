"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030712]" />
      
      {/* Radial glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-violet-600/15 rounded-full blur-[120px]" />
      </div>

      {/* Animated beam lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-px h-[400px] origin-top"
            style={{
              transform: `rotate(${deg}deg) translateX(-50%)`,
              background: `linear-gradient(to bottom, transparent, rgba(99,102,241,${i % 3 === 0 ? '0.15' : '0.05'}), transparent)`,
            }}
          />
        ))}
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            <span className="text-[#f1f5f9]">Ready to</span>{" "}
            <span style={{ background: 'linear-gradient(135deg, #a5b4fc, #818cf8, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>deploy faster?</span>
          </h2>

          <p className="text-lg sm:text-xl text-[#64748b] mb-10 max-w-xl mx-auto">
            Join 10,000+ developers shipping with confidence. Start in seconds.
          </p>

          {/* Moving border button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative group"
            >
              {/* Gradient border animation */}
              <div
                className="absolute -inset-0.5 rounded-xl opacity-75 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'linear-gradient(-45deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)',
                  backgroundSize: '400% 400%',
                  animation: 'gradient-rotate 4s ease infinite',
                  filter: 'blur(4px)',
                }}
              />
              <Link
                href="/auth/sign-in"
                className="relative flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl text-[#f1f5f9] font-semibold text-base hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          <p className="mt-6 text-sm text-[#64748b]">
            No credit card required. Free forever for hobby projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
