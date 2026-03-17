import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel }   from "@/components/ui/SectionLabel";
import { about, profile, skillGroups } from "@/lib/data";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="py-[80px] md:py-[100px] bg-surface dark:bg-dark-surface border-t border-line dark:border-dark-line">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── LEFT ── */}
          <RevealOnScroll>
            <SectionLabel>About Me</SectionLabel>
            <h2 className="font-serif text-[clamp(28px,3.5vw,40px)] leading-[1.15] tracking-[-0.5px] text-ink dark:text-dark-ink mb-5">
              {about.headline[0]}<br />
              <em className="italic text-accent-2">{about.headline[1]}</em>
            </h2>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] text-ink-2 dark:text-dark-ink2 leading-[1.85] mb-4"
                dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            <blockquote
              className="border-l-[3px] border-accent dark:border-accent-2 bg-bg dark:bg-dark-bg2 rounded-r-xl px-[18px] py-3.5 my-5 text-[14px] text-ink-2 dark:text-dark-ink2 leading-[1.75] italic"
              dangerouslySetInnerHTML={{ __html: about.highlight.text }}
            />
            <div className="grid grid-cols-3 mt-8 rounded-xl overflow-hidden border border-line dark:border-dark-line divide-x divide-line dark:divide-dark-line">
              {profile.stats.map(({ value, label }) => (
                <div key={label} className="bg-surface dark:bg-dark-surface py-5 text-center">
                  <div className="font-serif text-[28px] md:text-[30px] text-accent dark:text-white leading-none mb-1">{value}</div>
                  <div className="text-[11px] text-ink-3 dark:text-dark-ink3 uppercase tracking-[0.06em]">{label}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* ── RIGHT: skills ── */}
          <RevealOnScroll delay={0.1}>
            <h3 className="font-serif text-[20px] text-ink dark:text-dark-ink mb-5">Tech Stack</h3>
            {skillGroups.map((group) => (
              <div key={group.label} className="mb-6">
                <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-ink-3 dark:text-dark-ink3 mb-2.5 pb-1.5 border-b border-line dark:border-dark-line">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map(({ name, highlight }) => (
                    <span key={name} className={cn(
                      "px-3 py-1 rounded-full text-[12.5px] border cursor-default",
                      "transition-all duration-200 hover:-translate-y-0.5",
                      highlight
                        ? "bg-accent text-white border-accent font-medium hover:bg-accent-2 hover:border-accent-2"
                        : "bg-tag-bg dark:bg-dark-bg2 text-tag-txt dark:text-dark-ink2 border-line dark:border-dark-line hover:bg-bg-2 dark:hover:bg-dark-bg hover:border-ink-3"
                    )}>
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
