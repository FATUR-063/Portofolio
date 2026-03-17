"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

// Word-by-word reveal for headline
function WordReveal({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
          transition={{ duration: 0.55, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-[130px] pb-[90px] md:pt-[140px] md:pb-[110px]">
      {/* dot-grid */}
      <div
        className="absolute inset-0 z-0 dot-grid text-ink/20 dark:text-dark-ink/10 pointer-events-none"
        style={{
          maskImage: "radial-gradient(ellipse 70% 80% at 65% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 65% 50%, black 20%, transparent 100%)",
        }}
      />
      {/* ambient glow */}
      <div className="absolute -top-24 -right-36 w-[500px] h-[500px] md:w-[650px] md:h-[650px] rounded-full bg-[radial-gradient(circle,rgba(46,64,128,0.07)_0%,transparent_65%)] dark:bg-[radial-gradient(circle,rgba(46,64,128,0.15)_0%,transparent_65%)] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-8">
        {/* Mobile: single column | Desktop: two column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT ── */}
          <div>
            <motion.p {...fadeUp(0.1)} className="flex items-center gap-2 text-[11.5px] sm:text-[12px] font-medium tracking-[0.1em] uppercase text-brand-green mb-4 sm:mb-5">
              <span className="w-[7px] h-[7px] rounded-full bg-brand-green animate-pulse-dot shrink-0" />
              {profile.status}
            </motion.p>

            <h1 className="font-serif text-[clamp(36px,6vw,62px)] leading-[1.08] tracking-[-1.5px] text-ink dark:text-dark-ink mb-5">
              <WordReveal text="Saya build hal yang" />
              <br />
              <WordReveal text="beneran jalan." className="italic text-accent-2" />
            </h1>

            <motion.p {...fadeUp(0.65)} className="text-[15px] sm:text-[16px] text-ink-2 dark:text-dark-ink2 leading-[1.8] max-w-[440px] mb-8">
              <strong className="text-ink dark:text-dark-ink font-medium">Frontend + Backend developer</strong>
              {" "}— dari UI yang rapi sampai API yang bersih. Familiar dengan React, Next.js, dan Node.js.
              Suka kalau kodenya bisa dibaca orang lain.
            </motion.p>

            <motion.div {...fadeUp(0.75)} className="flex flex-wrap gap-3 items-center">
              <Link href="#projects" className="inline-flex items-center gap-2 bg-accent dark:bg-accent text-white px-5 py-3 rounded-lg text-[13.5px] font-medium no-underline transition-all duration-200 hover:bg-accent-2 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(29,43,79,0.3)]">
                Lihat Projects
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <a href={profile.contact.githubUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink-2 dark:text-dark-ink2 px-5 py-3 rounded-lg text-[13.5px] no-underline border border-line dark:border-dark-line transition-all duration-200 hover:border-accent dark:hover:border-white hover:text-accent dark:hover:text-white hover:bg-bg-2 dark:hover:bg-dark-bg2 hover:-translate-y-0.5">
                GitHub
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: code card (hidden on small mobile) ── */}
          <motion.div
            {...fadeUp(0.4)}
            className="hidden sm:block bg-surface dark:bg-dark-surface border border-line dark:border-dark-line rounded-card overflow-hidden shadow-[0_8px_40px_rgba(26,25,22,0.08)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.3)] transition-all duration-350 hover:-translate-y-1.5 hover:rotate-[0.4deg] hover:shadow-[0_22px_60px_rgba(26,25,22,0.13)] dark:hover:shadow-[0_22px_60px_rgba(0,0,0,0.4)]"
          >
            <div className="bg-bg-2 dark:bg-dark-bg2 px-3.5 py-2.5 flex items-center gap-1.5 border-b border-line dark:border-dark-line">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-1.5 text-[11.5px] text-ink-3 dark:text-dark-ink3 font-mono">profile.json</span>
            </div>
            <pre className="p-5 font-mono text-[12px] sm:text-[12.5px] leading-[1.8] text-ink dark:text-dark-ink overflow-x-auto">
              <span className="text-ink-3 dark:text-dark-ink3 italic">{"// Faturahman Dwi Saputra"}</span>{"\n"}
              {"{"}{"\n"}
              {"  "}<span className="text-brand-green">"role"</span>{": ["}{"\n"}
              {"    "}<span className="text-[#C7652C]">"Frontend Developer"</span>{","}{"\n"}
              {"    "}<span className="text-[#C7652C]">"Backend Developer"</span>{"\n"}
              {"  ],\n"}
              {"  "}<span className="text-brand-green">"stack"</span>{": {"}{"\n"}
              {"    "}<span className="text-brand-green">"frontend"</span>{": ["}<span className="text-[#C7652C]">"React"</span>{", "}<span className="text-[#C7652C]">"Next.js"</span>{", "}<span className="text-[#C7652C]">"Tailwind"</span>{"],\n"}
              {"    "}<span className="text-brand-green">"backend"</span>{"  : ["}<span className="text-[#C7652C]">"Node.js"</span>{", "}<span className="text-[#C7652C]">"Express"</span>{"],\n"}
              {"    "}<span className="text-brand-green">"db"</span>{"       : ["}<span className="text-[#C7652C]">"MySQL"</span>{", "}<span className="text-[#C7652C]">"Supabase"</span>{"]\n"}
              {"  "},{"}\n"}
              {"  "}<span className="text-brand-green">"projects"</span>{": "}<span className="text-[#7B5BCC]">3</span>{",\n"}
              {"  "}<span className="text-brand-green">"status"</span>{"  : "}<span className="text-[#C7652C]">"open_to_capstone"</span>
              <span className="inline-block w-[2px] h-[13px] bg-accent dark:bg-white/70 ml-[2px] align-middle animate-blink" />{"\n"}
              {"}"}
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
