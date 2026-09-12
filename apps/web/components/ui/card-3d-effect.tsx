"use client";
import {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
} from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MouseEnterContextValue {
  isMouseEntered: boolean;
  rotateX: number;
  rotateY: number;
}

const MouseEnterContext = createContext<MouseEnterContextValue>({
  isMouseEntered: false,
  rotateX: 0,
  rotateY: 0,
});

export function CardContainer({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rx = ((e.clientY - centerY) / (rect.height / 2)) * -15;
    const ry = ((e.clientX - centerX) / (rect.width / 2)) * 15;
    setRotateX(rx);
    setRotateY(ry);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsMouseEntered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsMouseEntered(false);
    setRotateX(0);
    setRotateY(0);
  }, []);

  return (
    <MouseEnterContext.Provider value={{ isMouseEntered, rotateX, rotateY }}>
      <div
        className={cn("flex items-center justify-center", containerClassName)}
        style={{ perspective: "1200px" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          ref={containerRef}
          className={cn("relative transition-all duration-200 ease-linear", className)}
          animate={{
            rotateX,
            rotateY,
          }}
          transition={{ duration: 0.15, ease: "linear" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </motion.div>
      </div>
    </MouseEnterContext.Provider>
  );
}

export function CardBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]", className)}
    >
      {children}
    </div>
  );
}

export function CardItem({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  [key: string]: unknown;
}) {
  const { isMouseEntered } = useContext(MouseEnterContext);

  return (
    <motion.div
      animate={{
        transform: isMouseEntered
          ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
          : "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={className}
    >
      <Tag {...rest}>{children}</Tag>
    </motion.div>
  );
}
