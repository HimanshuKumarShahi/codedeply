"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "CodeDeploy cut our deployment time by 80%. Absolutely incredible platform. We went from 45-minute deploys to under a minute.",
    name: "Rohan Sharma",
    title: "Senior Engineer @ Razorpay",
    initials: "RS",
    color: "#6366f1",
    stars: 5,
  },
  {
    quote: "The real-time logs changed everything for our team. We can actually see what's happening during a build and debug instantly.",
    name: "Priya Nair",
    title: "CTO @ StartupXYZ",
    initials: "PN",
    color: "#8b5cf6",
    stars: 5,
  },
  {
    quote: "Finally a deployment tool that just works. No YAML hell, no complex configuration. Just push and it's live.",
    name: "Alex Chen",
    title: "Full-stack Developer",
    initials: "AC",
    color: "#06b6d4",
    stars: 5,
  },
  {
    quote: "We migrated from Jenkins in 2 days. Never looked back. CodeDeploy is everything Jenkins should have been.",
    name: "Sarah Johnson",
    title: "DevOps Lead @ TechCorp",
    initials: "SJ",
    color: "#10b981",
    stars: 5,
  },
  {
    quote: "Ship fast or die. CodeDeploy helps me ship fast. As a solo founder, it's like having a DevOps team without the headcount.",
    name: "Marcus Williams",
    title: "Solo Founder",
    initials: "MW",
    color: "#f59e0b",
    stars: 5,
  },
  {
    quote: "The GitHub integration is seamless. Push, deployed. Done. It literally couldn't be simpler. Absolute game changer.",
    name: "Aditya Kumar",
    title: "Backend Engineer",
    initials: "AK",
    color: "#ec4899",
    stars: 5,
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-80 backdrop-blur-xl bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 mx-3">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">&ldquo;{testimonial.quote}&rdquo;</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
          style={{ backgroundColor: testimonial.color }}
        >
          {testimonial.initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-[#f1f5f9]">{testimonial.name}</div>
          <div className="text-xs text-[#64748b]">{testimonial.title}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#030712]" />
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/10 text-xs text-violet-300 font-medium mb-6">
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#f1f5f9]">
            Loved by developers{" "}
            <span style={{ background: 'linear-gradient(135deg, #a5b4fc, #818cf8, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>worldwide</span>
          </h2>
        </motion.div>

        {/* Row 1: scroll left */}
        <div className="relative overflow-hidden mb-4">
          <div
            className="flex"
            style={{
              animation: 'scroll-left 40s linear infinite',
              width: 'max-content',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.animationPlayState = 'paused'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.animationPlayState = 'running'; }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Row 2: scroll right */}
        <div className="relative overflow-hidden">
          <div
            className="flex"
            style={{
              animation: 'scroll-right 40s linear infinite',
              width: 'max-content',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.animationPlayState = 'paused'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.animationPlayState = 'running'; }}
          >
            {[...testimonials.slice(3), ...testimonials.slice(3)].map((t, i) => (
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
