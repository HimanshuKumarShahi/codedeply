"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Zap, Clock, ArrowRight, X } from "lucide-react";

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 42,
    seconds: 35,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="relative bg-[#1F1449] text-white text-xs py-2 px-4 z-50 border-b border-white/10 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left Side: Offer text + coupon */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#EB0052] text-white font-black text-[11px] uppercase tracking-wider animate-pulse">
            <Zap className="w-3 h-3 fill-current" /> Save 75%
          </span>
          <span className="font-bold text-white text-xs sm:text-sm">
            Cloud Deploys &amp; BaaS Flash Sale:
          </span>
          <span className="text-white/80 hidden md:inline text-xs">
            Free custom domains, automated Postgres backups &amp; 24/7 priority support.
          </span>
          <span className="inline-flex items-center px-2 py-0.5 rounded border border-indigo-400/40 bg-indigo-500/20 text-[11px] font-mono font-bold text-indigo-200">
            Coupon: <strong className="text-white ml-1">CODEDEPLOY</strong>
          </span>
        </div>

        {/* Right Side: Countdown + CTA */}
        <div className="flex items-center gap-3">
          {/* Hostinger signature countdown tiles */}
          <div className="flex items-center gap-1 font-mono text-[11px] font-bold text-white/90">
            <Clock className="w-3.5 h-3.5 text-indigo-300 mr-0.5" />
            <div className="flex items-center gap-1">
              <span className="bg-white/10 px-1.5 py-0.5 rounded border border-white/10">{pad(timeLeft.days)}d</span>
              <span>:</span>
              <span className="bg-white/10 px-1.5 py-0.5 rounded border border-white/10">{pad(timeLeft.hours)}h</span>
              <span>:</span>
              <span className="bg-white/10 px-1.5 py-0.5 rounded border border-white/10">{pad(timeLeft.minutes)}m</span>
              <span>:</span>
              <span className="bg-[#673DE6] px-1.5 py-0.5 rounded text-white font-extrabold">{pad(timeLeft.seconds)}s</span>
            </div>
          </div>

          {/* Claim Deal Link */}
          <Link
            href="#pricing"
            className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-[#673DE6] hover:bg-[#5025D1] text-white text-xs font-bold transition-all shadow-sm"
          >
            <span>Claim Deal</span>
            <ArrowRight className="w-3 h-3" />
          </Link>

          <button
            onClick={() => setIsVisible(false)}
            className="text-white/50 hover:text-white transition-colors ml-1 p-0.5"
            aria-label="Close promo banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
