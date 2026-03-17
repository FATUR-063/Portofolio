"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel }   from "@/components/ui/SectionLabel";
import { projects }       from "@/lib/data";

// Magnetic tilt card
function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const cardRef  = useRef<HTMLDivElement>(null);
  const mouseX   = useMotionValue(0);
  const mouseY   = useMotionValue(0);
  const rotateX  = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 20 });
  const rotateY  = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 20 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top)  / rect.height - 0.5);
  };
  const onMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <RevealOnScroll delay={index * 0.1}>
      <motion.div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group bg-surface dark:bg-dark-surface border border-line dark:border-dark-line rounded-card overflow-hidden flex flex-col h-full transition-shadow duration-300 hover:shadow-[0_20px_56px_rgba(26,25,22,0.13)] dark:hover:shadow-[0_20px_56px_rgba(0,0,0,0.35)] hover:border-accent/20 dark:hover:border-white/10"
      >
        {/* Thumbnail */}
        <div className={`relative h-[160px] sm:h-[180px] flex items-center justify-center overflow-hidden ${project.thumbClass}`}>
          <span className="text-[48px] sm:text-[52px] z-10 drop-shadow-md">{project.icon}</span>
          <div className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
        </div>

        {/* Body */}
        <div className="p-5 sm:p-[22px] flex-1 flex flex-col">
          <span className="inline-block w-fit text-[11px] font-medium tracking-[0.08em] uppercase text-brand-green bg-brand-green-bg px-2.5 py-0.5 rounded-full mb-3">
            {project.role}
          </span>
          <h3 className="font-serif text-[18px] sm:text-[20px] text-ink dark:text-dark-ink leading-[1.25] mb-1.5">
            {project.title}
          </h3>
          {/* Impact line */}
          <p className="text-[12px] font-medium text-accent dark:text-accent-2/90 mb-2.5 flex items-start gap-1.5">
            <span className="mt-[3px] shrink-0">✦</span>
            {project.impact}
          </p>
          <p className="text-[13px] sm:text-[13.5px] text-ink-2 dark:text-dark-ink2 leading-[1.65] flex-1 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className="text-[11px] sm:text-[11.5px] text-ink-2 dark:text-dark-ink2 bg-bg-2 dark:bg-dark-bg2 border border-line dark:border-dark-line px-2 py-0.5 rounded-md transition-colors duration-150 group-hover:bg-tag-bg dark:group-hover:bg-dark-bg group-hover:text-ink dark:group-hover:text-dark-ink">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 sm:px-[22px] py-3.5 border-t border-line dark:border-dark-line">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[12.5px] text-accent dark:text-accent-2/90 font-medium no-underline transition-[gap] duration-200 hover:gap-2.5">
              Live Demo
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 7h10M8 3l4 4-4 4"/>
              </svg>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1 text-[12px] text-ink-3 dark:text-dark-ink3">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="10" height="8" rx="1.5"/><path d="M5 4V3a2 2 0 014 0v1"/>
              </svg>
              {project.demoNote}
            </span>
          )}
        </div>
      </motion.div>
    </RevealOnScroll>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-[80px] md:py-[100px]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
        <RevealOnScroll className="mb-10 md:mb-14">
          <SectionLabel>Selected Work</SectionLabel>
          <h2 className="font-serif text-[clamp(28px,3.5vw,40px)] leading-[1.15] tracking-[-0.5px] text-ink dark:text-dark-ink">
            Projects yang<br />
            <em className="italic text-accent-2">pernah dibangun</em>
          </h2>
          <p className="text-[15px] text-ink-2 dark:text-dark-ink2 mt-2 max-w-[520px]">
            Proyek nyata — dari tugas kuliah, pesanan klien, hingga side project tim.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" style={{ perspective: "1000px" }}>
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
