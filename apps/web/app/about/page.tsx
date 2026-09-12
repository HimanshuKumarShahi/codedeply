import { Zap, Code, Shield, ArrowRight, Heart } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "About — CodeDeploy",
  description: "Built by developers, for developers. Learn about our mission to make deployment fast and simple.",
};

const values = [
  {
    icon: Zap,
    title: "Speed",
    description: "Every millisecond matters. We obsess over build performance, edge delivery, and deploy latency so your users get the fastest possible experience.",
    gradient: "from-yellow-500 to-orange-500",
    glow: "rgba(245,158,11,0.3)",
  },
  {
    icon: Code,
    title: "Simplicity",
    description: "Deployment should be boring. We hide the complexity so you can focus on what matters — writing great code and shipping great products.",
    gradient: "from-violet-500 to-purple-600",
    glow: "rgba(139,92,246,0.3)",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "99.9% uptime isn't a goal, it's a minimum. Our infrastructure is built with redundancy, automatic failover, and global edge nodes.",
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(6,182,212,0.3)",
  },
];

const team = [
  {
    name: "Arjun Mehta",
    title: "Co-founder & CEO",
    bio: "Former SRE at Google. Built production systems serving billions of requests. Obsessed with developer experience.",
    initials: "AM",
    color: "#6366f1",
  },
  {
    name: "Leila Vasquez",
    title: "Co-founder & CTO",
    bio: "Distributed systems engineer. Previously led infrastructure at Stripe. Loves Rust and coffee in equal measure.",
    initials: "LV",
    color: "#8b5cf6",
  },
  {
    name: "James Park",
    title: "Head of Product",
    bio: "Product designer turned PM. 10 years building developer tools. Believes the best UX is invisible.",
    initials: "JP",
    color: "#06b6d4",
  },
  {
    name: "Nadia Osei",
    title: "Lead Engineer",
    bio: "Full-stack engineer specializing in real-time systems. Built the live logging pipeline that powers CodeDeploy.",
    initials: "NO",
    color: "#10b981",
  },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#030712]">
      <SiteHeader />

      <div className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-24 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,102,241,0.2) 0%, transparent 60%)' }} />
          <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/10 text-xs text-violet-300 font-medium mb-6">
              About Us
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6">
              <span style={{ background: 'linear-gradient(135deg, #a5b4fc, #818cf8, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Built by developers,</span>
              <br />
              <span className="text-[#f1f5f9]">for developers</span>
            </h1>
            <p className="text-xl text-[#64748b] max-w-2xl mx-auto leading-relaxed">
              We believe deployment should never be the bottleneck. Every second spent waiting for a deploy is a second not spent building.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="relative py-20 px-4 sm:px-6 border-t border-white/[0.07]">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#f1f5f9] mb-6">
                  Our mission
                </h2>
                <p className="text-[#64748b] leading-relaxed mb-4">
                  CodeDeploy was born out of frustration. We were tired of spending hours configuring CI/CD pipelines, debugging YAML files, and watching 45-minute build queues.
                </p>
                <p className="text-[#64748b] leading-relaxed mb-4">
                  We built the deployment platform we always wanted — one that gets out of your way and lets you focus on shipping great software.
                </p>
                <p className="text-[#64748b] leading-relaxed">
                  Today, CodeDeploy powers tens of thousands of deployments every day, helping developers from solo founders to large engineering teams ship faster and with more confidence.
                </p>
              </div>
              <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-violet-400" fill="currentColor" />
                  <span className="text-sm font-semibold text-violet-400">Our philosophy</span>
                </div>
                <blockquote className="text-2xl font-bold text-[#f1f5f9] leading-snug">
                  &ldquo;Deployment should be so fast and effortless that it feels like a superpower.&rdquo;
                </blockquote>
                <p className="mt-4 text-sm text-[#64748b]">— The CodeDeploy Team</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="relative py-24 px-4 sm:px-6 border-t border-white/[0.07]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-black text-[#f1f5f9] mb-3">Our values</h2>
              <p className="text-[#64748b]">The principles that guide everything we build.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="group backdrop-blur-xl bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:border-violet-500/30 hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4 shadow-lg`}
                      style={{ boxShadow: `0 0 20px ${value.glow}` }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#f1f5f9] mb-2">{value.title}</h3>
                    <p className="text-sm text-[#64748b] leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="relative py-24 px-4 sm:px-6 border-t border-white/[0.07]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-black text-[#f1f5f9] mb-3">Meet the team</h2>
              <p className="text-[#64748b]">The people building the future of deployment.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:border-violet-500/20 transition-all duration-300"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold text-white mb-4"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.initials}
                  </div>
                  <h3 className="text-base font-bold text-[#f1f5f9] mb-0.5">{member.name}</h3>
                  <p className="text-xs text-violet-400 font-medium mb-3">{member.title}</p>
                  <p className="text-xs text-[#64748b] leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Source */}
        <section className="relative py-24 px-4 sm:px-6 border-t border-white/[0.07]">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.07] rounded-2xl p-10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center mx-auto mb-6">
                <GithubIcon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-black text-[#f1f5f9] mb-4">Open Source at Heart</h2>
              <p className="text-[#64748b] leading-relaxed mb-6 max-w-xl mx-auto">
                We believe in the power of open source. CodeDeploy&apos;s CLI, SDK, and core builder are all open source on GitHub. We build in public, ship in public, and welcome contributions from the community.
              </p>
              <Link
                href="https://github.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-[#f1f5f9] text-sm font-semibold hover:bg-white/[0.1] transition-all duration-300"
              >
                <GithubIcon className="w-4 h-4" />
                View on GitHub
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="relative py-24 px-4 sm:px-6 border-t border-white/[0.07]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-[#f1f5f9] mb-4">
              Want to work with us?
            </h2>
            <p className="text-[#64748b] mb-8">
              We&apos;re always looking for talented people who care about developer experience. Check out our open roles.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300"
              >
                View Open Roles
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.07] text-[#f1f5f9] text-sm font-semibold hover:bg-white/[0.04] transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
