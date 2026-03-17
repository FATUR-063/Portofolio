import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel }   from "@/components/ui/SectionLabel";
import { profile }        from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="relative py-[80px] md:py-[100px] bg-accent overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 z-0 pointer-events-none dot-grid text-white/10" />
      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-8">
        <RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <SectionLabel light>Get In Touch</SectionLabel>
              <h2 className="font-serif text-[clamp(28px,3.5vw,40px)] leading-[1.15] tracking-[-0.5px] text-white">
                Mari <em className="italic text-white/55">berkolaborasi</em>
              </h2>
              <p className="mt-4 text-[15px] text-white/65 leading-[1.75]">
                Saya terbuka untuk peluang Capstone Project 2026 sebagai Frontend Developer
                maupun Backend Developer. Let&apos;s build something real, together.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${profile.contact.email}`}
                className="flex items-center gap-3.5 bg-white/7 border border-white/10 rounded-xl px-[18px] py-3.5 no-underline text-white transition-all duration-200 hover:bg-white/14 hover:translate-x-1.5 hover:border-white/22">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="14" height="10" rx="1.5"/><path d="M1 5l7 5 7-5"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.06em] text-white/45">Email</div>
                  <div className="text-[12.5px] sm:text-[13.5px] text-white break-all">{profile.contact.email}</div>
                </div>
              </a>
              <a href={profile.contact.githubUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3.5 bg-white/7 border border-white/10 rounded-xl px-[18px] py-3.5 no-underline text-white transition-all duration-200 hover:bg-white/14 hover:translate-x-1.5 hover:border-white/22">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.06em] text-white/45">GitHub</div>
                  <div className="text-[13.5px] text-white">{profile.contact.github}</div>
                </div>
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
