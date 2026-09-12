"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Item {
  quote: string;
  name: string;
  title: string;
}

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: Item[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicated = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicated);
      });

      setAnimationProperties();
      setStart(true);
    }
  }, []);

  function setAnimationProperties() {
    if (!containerRef.current) return;
    const durationMap = { fast: "20s", normal: "40s", slow: "80s" };
    containerRef.current.style.setProperty(
      "--animation-duration",
      durationMap[speed]
    );
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "normal" : "reverse"
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[350px] max-w-full relative rounded-2xl border border-[oklch(1_0_0/7%)] flex-shrink-0 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.1 0.015 264), oklch(0.065 0.01 264))",
            }}
          >
            <blockquote>
              <span className="relative z-20 text-sm leading-[1.6] text-gray-300 font-normal">
                &ldquo;{item.quote}&rdquo;
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center gap-3">
                <div className="flex flex-col">
                  <span className="text-sm leading-[1.6] text-white font-semibold">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.title}
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-50%)); }
        }
        .animate-scroll {
          animation: scroll var(--animation-duration, 40s) linear var(--animation-direction, normal) infinite;
        }
      `}</style>
    </div>
  );
}
