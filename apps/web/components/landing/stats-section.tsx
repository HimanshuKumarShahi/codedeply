"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Activity, ShieldCheck, Zap, Globe2 } from "lucide-react";

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
  {
    value: 50000,
    suffix: "+",
    label: "Deployments / day",
    prefix: "",
    description: "Multi-tenant microVM containers",
    icon: Zap,
  },
  {
    value: 99.99,
    suffix: "%",
    label: "Edge Uptime SLA",
    prefix: "",
    description: "Redundant cluster failover",
    isDecimal: true,
    icon: ShieldCheck,
  },
  {
    value: 18,
    suffix: "s",
    label: "Average Deploy Latency",
    prefix: "< ",
    description: "Turborepo distributed caching",
    icon: Activity,
  },
  {
    value: 32,
    suffix: " Regions",
    label: "Global Edge Network",
    prefix: "",
    description: "Sub-20ms p95 global latency",
    icon: Globe2,
  },
];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const count0 = useCounter(50000, 2, isInView);
  const count2 = useCounter(18, 1.5, isInView);
  const count3 = useCounter(32, 1.5, isInView);

  const displayValues = [count0, 99.99, count2, count3];

  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-background border-y border-slate-200/80 dark:border-white/[0.08]">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-950/40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-slate-200/80 dark:lg:divide-white/[0.08]">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex flex-col items-center justify-center text-center px-4 sm:px-8 py-2"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>

                <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1.5 tracking-tight text-slate-900 dark:text-white">
                  <span className="text-indigo-600 dark:text-indigo-400">{stat.prefix}</span>
                  <span>{stat.isDecimal ? stat.value : displayValues[i].toLocaleString()}</span>
                  <span className="text-slate-600 dark:text-slate-400 font-bold text-2xl sm:text-3xl">
                    {stat.suffix}
                  </span>
                </div>

                <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
