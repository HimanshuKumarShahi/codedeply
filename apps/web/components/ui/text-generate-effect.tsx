"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

export function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
}: TextGenerateEffectProps) {
  const [scope, setScope] = useState(false);
  const wordsArray = words.split(" ");

  useEffect(() => {
    setScope(true);
  }, []);

  const renderWords = () => {
    return (
      <motion.div>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={`${word}-${idx}`}
            className="dark:text-white text-black opacity-0"
            variants={{
              visible: {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
              },
            }}
            initial={{
              opacity: 0,
              filter: filter ? "blur(10px)" : "none",
            }}
            animate={scope ? "visible" : "hidden"}
            transition={{
              duration,
              delay: idx * 0.1,
              ease: "easeOut",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
}

export function TextGenerateEffectByChar({
  words,
  className,
  filter = true,
  duration = 0.03,
}: TextGenerateEffectProps) {
  const chars = words.split("");

  return (
    <div className={cn("font-bold", className)}>
      <div className="dark:text-white text-black leading-snug tracking-wide inline">
        {chars.map((char, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, filter: filter ? "blur(8px)" : "none" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.4,
              delay: idx * duration,
              ease: "easeOut",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
