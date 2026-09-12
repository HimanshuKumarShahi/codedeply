"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function useCounter(end: number, duration: number = 2, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
}

const stats = [
  { value: 50000, suffix: "+", label: "Deployments/day", prefix: "", description: "Built for scale" },
  { value: 99.9, suffix: "%", label: "Uptime", prefix: "", description: "Always online", isDecimal: true },
  { value: 30, suffix: "s", label: "Avg deploy time", prefix: "< ", description: "Blazing fast" },
  { value: 10000, suffix: "+", label: "Developers", prefix: "", description: "And growing" },
];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const count0 = useCounter(50000, 2, isInView);
  const count2 = useCounter(30, 1.5, isInView);
  const count3 = useCounter(10000, 2, isInView);

  const displayValues = [count0, 99.9, count2, count3];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/[0.07]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center px-8 py-4"
            >
              <div className="text-4xl sm:text-5xl font-black mb-2" style={{ background: 'linear-gradient(135deg, #a5b4fc, #818cf8, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {stat.prefix}
                {stat.isDecimal ? stat.value : displayValues[i].toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-sm font-semibold text-[#f1f5f9] mb-1">{stat.label}</div>
              <div className="text-xs text-[#64748b]">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
