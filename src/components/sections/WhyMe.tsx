import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const reasons = [
  {
    icon: "⚡",
    title: "Ship, bukan cuma planning",
    desc: "Gue terbiasa bawa ide dari wireframe sampai deploy. Sampay dan FIN bukan side project diam-diam — keduanya dipakai orang nyata.",
  },
  {
    icon: "🔗",
    title: "Full-stack yang nyambung",
    desc: "Ngerti frontend bukan berarti buta backend. Gue bisa desain API-nya, implement-nya, lalu sambungin ke UI — tanpa harus nunggu orang lain.",
  },
  {
    icon: "📖",
    title: "Kode yang bisa dibaca",
    desc: "Kode bukan cuma buat mesin. Gue jaga readability, struktur folder, dan naming — karena startup butuh codebase yang bisa di-maintain jangka panjang.",
  },
] as const;

export function WhyMe() {
  return (
    <section className="py-16 md:py-20 border-t border-line dark:border-dark-line">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
        <RevealOnScroll className="text-center mb-10 md:mb-12">
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-ink-3 dark:text-dark-ink3 mb-2">
            Why me?
          </p>
          <h2 className="font-serif text-[clamp(24px,3vw,34px)] text-ink dark:text-dark-ink tracking-[-0.4px]">
            Kenapa <em className="italic text-accent-2">pilih gue</em>
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {reasons.map((r, i) => (
            <RevealOnScroll key={r.title} delay={i * 0.1}>
              <div className="group p-6 md:p-7 rounded-card border border-line dark:border-dark-line bg-surface dark:bg-dark-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(26,25,22,0.08)] dark:hover:shadow-[0_12px_36px_rgba(0,0,0,0.25)] hover:border-accent/20 dark:hover:border-white/10">
                <div className="text-[28px] mb-4">{r.icon}</div>
                <h3 className="font-serif text-[17px] text-ink dark:text-dark-ink mb-2 leading-tight">
                  {r.title}
                </h3>
                <p className="text-[13.5px] text-ink-2 dark:text-dark-ink2 leading-[1.7]">
                  {r.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
