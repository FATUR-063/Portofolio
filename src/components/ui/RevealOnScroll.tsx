"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;       // seconds
  yOffset?: number;     // px — how far to slide up from
  once?: boolean;       // only animate once (default true)
}

/**
 * Wraps children in a Framer Motion div that fades + slides up
 * when it enters the viewport.
 *
 * Usage:
 *   <RevealOnScroll delay={0.1}>
 *     <SomeCard />
 *   </RevealOnScroll>
 */
export function RevealOnScroll({
  children,
  className,
  delay = 0,
  yOffset = 28,
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
