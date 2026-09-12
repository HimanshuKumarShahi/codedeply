"use client";
import { motion } from "framer-motion";
import { Zap, Terminal, Globe, Users, Shield } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

const features = [
  {
    icon: Zap,
    title: "Instant Deploys",
    description: "Git push and your app is live in seconds. Zero configuration, maximum velocity. Our build pipeline is optimized for speed.",
    gradient: "from-violet-500 to-purple-600",
    glow: "rgba(139,92,246,0.3)",
    span: "col-span-2",
  },
  {
    icon: GithubIcon,
    title: "GitHub Integration",
    description: "Connect your repos with one click. Auto-deploy on every push, PR previews, and branch deployments out of the box.",
    gradient: "from-slate-600 to-slate-700",
    glow: "rgba(100,116,139,0.3)",
    span: "",
  },
  {
    icon: Terminal,
    title: "Real-time Logs",
    description: "Watch your build happen live. Stream logs directly to your browser with zero latency. Debug in real time.",
    gradient: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.3)",
    span: "",
  },
  {
    icon: Globe,
    title: "Custom Domains",
    description: "Your domain, your brand. Automatic SSL, CDN delivery, and DNS management included.",
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(6,182,212,0.3)",
    span: "",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Deploy together seamlessly. Role-based access, shared environments, and deployment approvals.",
    gradient: "from-orange-500 to-red-500",
    glow: "rgba(249,115,22,0.3)",
    span: "",
  },
  {
    icon: Shield,
    title: "99.9% Uptime SLA",
    description: "Always on, always fast. Enterprise-grade infrastructure with global edge network and automatic failover.",
    gradient: "from-indigo-500 to-violet-600",
    glow: "rgba(99,102,241,0.3)",
    span: "",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030712]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/10 text-xs text-violet-300 font-medium mb-6">
            Features
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            <span className="text-[#f1f5f9]">Everything you need to </span>
            <span style={{ background: 'linear-gradient(135deg, #a5b4fc, #818cf8, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>ship faster</span>
          </h2>
          <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
            Built for modern development workflows. From prototype to production in minutes.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className={`group relative rounded-2xl p-6 backdrop-blur-xl bg-white/[0.03] border border-white/[0.07] hover:border-violet-500/30 hover:bg-white/[0.05] transition-all duration-300 cursor-default ${
                  feature.span
                }`}
                style={{
                  gridColumn: feature.span === 'col-span-2' ? 'span 2 / span 2' : undefined,
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {/* Card glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 30px ${feature.glow}` }}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg`}
                  style={{ boxShadow: `0 0 20px ${feature.glow}` }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-[#f1f5f9] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{feature.description}</p>

                {/* Hover arrow */}
                <div className="mt-4 flex items-center gap-1 text-xs text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
