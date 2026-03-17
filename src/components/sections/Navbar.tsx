"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/data";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_ITEMS = [
  { label: "About",    href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled]    = useState(false);
  const [activeSection, setActive] = useState("");

  // scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-50% 0px -50% 0px" }
    );
    ["about", "projects", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50",
      "bg-bg/90 dark:bg-dark-bg/90 backdrop-blur-xl",
      "border-b border-line dark:border-dark-line",
      "transition-shadow duration-300",
      scrolled && "shadow-[0_4px_24px_rgba(26,25,22,0.08)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
    )}>
      {/* scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent dark:bg-accent-2 origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-8 h-[60px] flex items-center justify-between">
        <Link href="/" className="font-serif text-[18px] text-accent dark:text-white tracking-[-0.3px] no-underline">
          {profile.initials}
        </Link>

        <div className="flex items-center gap-4 sm:gap-8">
          <ul className="hidden sm:flex gap-6 list-none">
            {NAV_ITEMS.map(({ label, href }) => {
              const id       = href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={href}>
                  <Link href={href} className={cn(
                    "relative pb-0.5 text-[13.5px] font-normal tracking-[0.02em] no-underline transition-colors duration-200",
                    "after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[1.5px] after:bg-accent dark:after:bg-white after:rounded-full after:transition-transform after:duration-250 after:origin-left",
                    isActive
                      ? "text-accent dark:text-white after:scale-x-100"
                      : "text-ink-2 dark:text-dark-ink2 after:scale-x-0 hover:text-accent dark:hover:text-white hover:after:scale-x-100"
                  )}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
