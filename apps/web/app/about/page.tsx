import { Zap, Code, Shield, ArrowRight, Heart, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PromoBanner from "@/components/layout/promo-banner";

export const metadata: Metadata = {
  title: "About — CodeDeploy SaaS & BaaS Platform",
  description:
    "Built by developers, for developers. Learn about our mission to make deployment fast, serverless, and effortless.",
};

const values = [
  {
    icon: Zap,
    title: "Extreme Speed",
    description:
      "Every millisecond matters. We obsess over build performance, edge delivery, and database query latency so your end users experience instant responses.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Code,
    title: "Developer Simplicity",
    description:
      "Infrastructure should be invisible. We eliminate complex YAML files and convoluted DevOps pipelines so you can focus on building your product.",
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    icon: Shield,
    title: "Enterprise Reliability",
    description:
      "99.99% uptime is our commitment. Our infrastructure is architected with multi-region failover, container sandboxing, and automated healthchecks.",
    gradient: "from-cyan-500 to-blue-600",
  },
];

const team = [
  {
    name: "Arjun Mehta",
    title: "Co-founder & CEO",
    bio: "Former SRE at Google. Built production systems serving billions of requests. Obsessed with developer tooling.",
    initials: "AM",
    color: "#4f46e5",
  },
  {
    name: "Leila Vasquez",
    title: "Co-founder & CTO",
    bio: "Distributed systems engineer. Previously led infrastructure at Stripe. Deep enthusiast of Rust & microVMs.",
    initials: "LV",
    color: "#7c3aed",
  },
  {
    name: "James Park",
    title: "Head of Product",
    bio: "Product engineer with 10 years designing developer platforms. Believes the best UX is invisible.",
    initials: "JP",
    color: "#0284c7",
  },
  {
    name: "Nadia Osei",
    title: "Lead Systems Engineer",
    bio: "Specializing in real-time edge telemetry and WebSocket infrastructure. Built CodeDeploy's low-latency log stream.",
    initials: "NO",
    color: "#059669",
  },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-200">
      <PromoBanner />
      <SiteHeader />

      <div className="flex-1">
        {/* Hero */}
        <section className="relative pt-36 pb-24 px-4 sm:px-6 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-500/15 dark:bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-xs font-semibold text-indigo-600 dark:text-indigo-300 mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Story &amp; Mission</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
              Built by developers,{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 dark:from-indigo-400 dark:via-violet-300 dark:to-cyan-400 bg-clip-text text-transparent">
                for developers.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We believe cloud deployment and backend infrastructure should never be the bottleneck. Every second spent waiting for a deploy is time lost building.
            </p>
          </div>
        </section>

        {/* Mission & Philosophy */}
        <section className="relative py-20 px-4 sm:px-6 border-t border-slate-200/80 dark:border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                  Our Mission
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                  CodeDeploy was born out of frustration. Developers were tired of spending hours debugging cryptic YAML configuration files, waiting on slow 40-minute build queues, and managing disparate database and queue vendors.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                  We engineered the unified platform we always needed: git-native instant deployments paired seamlessly with managed serverless Postgres and Redis worker queues.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-indigo-500 fill-indigo-500/20" />
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    Core Philosophy
                  </span>
                </div>
                <blockquote className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                  &ldquo;Deployment and backend services should be so fast and effortless that they feel like second nature.&rdquo;
                </blockquote>
                <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">— The CodeDeploy Engineering Team</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="relative py-24 px-4 sm:px-6 border-t border-slate-200/80 dark:border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-2">Our Values</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">The engineering principles that guide our product roadmap.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl p-7 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center text-white shadow-md mb-5`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{value.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="relative py-24 px-4 sm:px-6 border-t border-slate-200/80 dark:border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-2">Meet the Team</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">Distributed systems engineers, product designers, and open source builders.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold text-white mb-4 shadow-sm"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.initials}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{member.name}</h3>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{member.title}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Source Banner */}
        <section className="relative py-24 px-4 sm:px-6 border-t border-slate-200/80 dark:border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 p-8 sm:p-12 text-center shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 flex items-center justify-center mx-auto mb-5 shadow-sm">
                <GithubIcon className="w-7 h-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
                Open Source &amp; Transparent
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-xl mx-auto">
                We believe in developer transparency. CodeDeploy&apos;s CLI, SDK, and core worker abstractions are open source on GitHub. We build and ship in the open.
              </p>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 text-xs sm:text-sm font-semibold hover:opacity-90 shadow-sm transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Star on GitHub</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
