"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function BackgroundGradient({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0 50%", "100% 50%", "0 50%"] },
  };

  return (
    <div className={cn("relative p-[1px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
          background: animate
            ? "conic-gradient(from 0deg at 50% 50%, #6366f1, #8b5cf6, #06b6d4, #0ea5e9, #6366f1)"
            : "conic-gradient(from 0deg at 50% 50%, #6366f1, #8b5cf6, #06b6d4)",
        }}
        className={cn(
          "absolute inset-0 rounded-[inherit] z-[1] opacity-60 group-hover:opacity-100 blur-sm transition-opacity duration-500",
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
          background: animate
            ? "conic-gradient(from 0deg at 50% 50%, #6366f1, #8b5cf6, #06b6d4, #0ea5e9, #6366f1)"
            : "conic-gradient(from 0deg at 50% 50%, #6366f1, #8b5cf6, #06b6d4)",
        }}
        className={cn(
          "absolute inset-0 rounded-[inherit] z-[1]",
        )}
      />
      <div
        className={cn(
          "relative z-10 bg-[oklch(0.065_0.01_264)] rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
