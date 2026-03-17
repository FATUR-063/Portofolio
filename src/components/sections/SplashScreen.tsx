"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/lib/data";

export function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 2200);
    return () => { clearTimeout(t); document.body.style.overflow = ""; };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[9999] bg-bg dark:bg-dark-bg flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          <div
            className="absolute inset-0 dot-grid text-ink/20 dark:text-dark-ink/10 opacity-50 pointer-events-none"
            style={{
              maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
            }}
          />
          <div className="relative z-10 flex flex-col items-center gap-5 text-center">
            <motion.div
              className="font-serif text-[52px] leading-none tracking-[-2px] text-accent dark:text-white"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              FD<em className="italic text-accent-2">S</em>
            </motion.div>
            <motion.p
              className="text-[12.5px] tracking-[0.12em] uppercase text-ink-3 dark:text-dark-ink3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {profile.name}
            </motion.p>
            <motion.div
              className="w-40 h-[2px] bg-line dark:bg-dark-line rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              <div className="h-full bg-accent dark:bg-white/70 rounded-full animate-[splash-fill_1.6s_0.3s_cubic-bezier(0.4,0,0.2,1)_forwards] w-0" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
