"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  targetOpacity: number;
  speed: number;
  glowColor: string;
}

const GLOW_COLORS = [
  "rgba(99,102,241,",
  "rgba(139,92,246,",
  "rgba(6,182,212,",
  "rgba(255,255,255,",
];

function createStar(width: number, height: number): Star {
  const color = GLOW_COLORS[Math.floor(Math.random() * GLOW_COLORS.length)];
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 1.5 + 0.5,
    opacity: Math.random(),
    targetOpacity: Math.random(),
    speed: Math.random() * 0.015 + 0.005,
    glowColor: color,
  };
}

export function GlowingStarsBackgroundCard({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animFrameRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    starsRef.current.forEach((star) => {
      star.opacity += (star.targetOpacity - star.opacity) * star.speed;
      if (Math.abs(star.opacity - star.targetOpacity) < 0.01) {
        star.targetOpacity = Math.random() * 0.8 + 0.1;
      }

      const grd = ctx.createRadialGradient(
        star.x, star.y, 0,
        star.x, star.y, star.size * 3
      );
      grd.addColorStop(0, `${star.glowColor}${star.opacity})`);
      grd.addColorStop(1, `${star.glowColor}0)`);

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = `${star.glowColor}${Math.min(star.opacity * 1.5, 1)})`;
      ctx.fill();
    });

    animFrameRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    canvas.width = rect.width || 400;
    canvas.height = rect.height || 300;

    const STAR_COUNT = Math.floor((canvas.width * canvas.height) / 3000);
    starsRef.current = Array.from({ length: STAR_COUNT }, () =>
      createStar(canvas.width, canvas.height)
    );

    animFrameRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [draw]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden rounded-2xl bg-[oklch(0.065_0.01_264)] border border-[oklch(1_0_0/7%)]",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function GlowingStarsTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-2xl font-bold text-white tracking-tight",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function GlowingStarsDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-sm text-gray-400 leading-relaxed mt-2",
        className
      )}
    >
      {children}
    </p>
  );
}
