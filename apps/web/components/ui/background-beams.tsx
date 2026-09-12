"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function BackgroundBeams({ className }: { className?: string }) {
  const beams = [
    { angle: 0,   id: "b0",  dur: "6s",  delay: "0s" },
    { angle: 30,  id: "b1",  dur: "7s",  delay: "0.5s" },
    { angle: 60,  id: "b2",  dur: "5.5s",delay: "1s" },
    { angle: 90,  id: "b3",  dur: "8s",  delay: "0.2s" },
    { angle: 120, id: "b4",  dur: "6.5s",delay: "1.5s" },
    { angle: 150, id: "b5",  dur: "7.5s",delay: "0.8s" },
    { angle: 180, id: "b6",  dur: "5s",  delay: "0.3s" },
    { angle: 210, id: "b7",  dur: "9s",  delay: "1.2s" },
    { angle: 240, id: "b8",  dur: "6s",  delay: "0.6s" },
    { angle: 270, id: "b9",  dur: "7s",  delay: "1.8s" },
    { angle: 300, id: "b10", dur: "5.5s",delay: "0.4s" },
    { angle: 330, id: "b11", dur: "8.5s",delay: "1.0s" },
  ];

  const cx = 50;
  const cy = 50;
  const len = 90;

  function endPoint(angle: number) {
    const rad = (angle * Math.PI) / 180;
    return {
      x: cx + len * Math.cos(rad),
      y: cy + len * Math.sin(rad),
    };
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="bg-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.15" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>

          {beams.map(({ id, angle }) => {
            const ep = endPoint(angle);
            return (
              <linearGradient
                key={id}
                id={`grad-${id}`}
                x1={`${cx}%`}
                y1={`${cy}%`}
                x2={`${ep.x}%`}
                y2={`${ep.y}%`}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                <stop offset="30%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#06b6d4" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </linearGradient>
            );
          })}
        </defs>

        <ellipse cx="50" cy="50" rx="50" ry="50" fill="url(#bg-glow)" />

        {beams.map(({ id, angle, dur, delay }) => {
          const ep = endPoint(angle);
          return (
            <line
              key={id}
              x1={cx}
              y1={cy}
              x2={ep.x}
              y2={ep.y}
              stroke={`url(#grad-${id})`}
              strokeWidth="0.3"
              style={{
                animation: `beam-pulse ${dur} ease-in-out ${delay} infinite alternate`,
                transformOrigin: `${cx}px ${cy}px`,
              }}
            />
          );
        })}

        {beams.map(({ id, angle, dur, delay }) => {
          const ep = endPoint(angle);
          return (
            <line
              key={`wide-${id}`}
              x1={cx}
              y1={cy}
              x2={ep.x}
              y2={ep.y}
              stroke={`url(#grad-${id})`}
              strokeWidth="1.2"
              style={{
                animation: `beam-pulse ${dur} ease-in-out ${delay} infinite alternate`,
                opacity: 0.15,
                transformOrigin: `${cx}px ${cy}px`,
              }}
            />
          );
        })}
      </svg>

      <style>{`
        @keyframes beam-pulse {
          0%   { opacity: 0.05; }
          50%  { opacity: 0.7;  }
          100% { opacity: 0.1;  }
        }
      `}</style>
    </div>
  );
}
