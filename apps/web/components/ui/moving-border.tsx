"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function useAnimationFrame(callback: (time: number) => void) {
  const requestRef = useRef<number>(0);
  const startRef = useRef<number>(0);

  React.useEffect(() => {
    const animate = (time: number) => {
      if (!startRef.current) startRef.current = time;
      callback(time - startRef.current);
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [callback]);
}

export function MovingBorder({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  as: Tag = "button",
  ...props
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: React.ElementType;
  [key: string]: unknown;
}) {
  const pathRef = useRef<SVGRectElement>(null);
  const progressRef = useRef<number>(0);

  useAnimationFrame((time) => {
    const pathEl = pathRef.current;
    if (!pathEl) return;
    const totalLength = pathEl.getTotalLength
      ? pathEl.getTotalLength()
      : 2 * (pathEl.getBoundingClientRect().width + pathEl.getBoundingClientRect().height);
    progressRef.current = (time / duration) % 1;
    const pct = progressRef.current * totalLength;
    const point = (pathEl as unknown as SVGGeometryElement).getPointAtLength?.(pct);
    if (!point) return;
    const dotEl = pathEl.parentElement?.querySelector<SVGCircleElement>(".moving-dot");
    if (dotEl) {
      dotEl.setAttribute("cx", String(point.x));
      dotEl.setAttribute("cy", String(point.y));
    }
  });

  return (
    <Tag
      className={cn(
        "relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-xl",
        containerClassName
      )}
      {...props}
    >
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="moving-border-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="1" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect
            ref={pathRef}
            x="0"
            y="0"
            width="100"
            height="100"
            rx="4"
            ry="4"
            fill="none"
            stroke="none"
          />
          <circle
            className="moving-dot"
            r="8"
            fill="url(#moving-border-glow)"
            filter="url(#blur-filter)"
          />
          <filter id="blur-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </svg>
      </div>

      <div
        className={cn(
          "absolute inset-0 rounded-xl",
          borderClassName
        )}
        style={{
          background:
            "linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)",
          backgroundSize: "300% 100%",
          animation: `moving-border-gradient ${duration}ms linear infinite`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
          borderRadius: "inherit",
        }}
      />

      <div
        className={cn(
          "relative z-10 w-full h-full rounded-xl bg-[oklch(0.065_0.01_264)] flex items-center justify-center",
          className
        )}
      >
        {children}
      </div>

      <style>{`
        @keyframes moving-border-gradient {
          0%   { background-position: 0% 0%; }
          100% { background-position: 300% 0%; }
        }
      `}</style>
    </Tag>
  );
}
