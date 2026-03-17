import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function SectionLabel({ children, className, light }: SectionLabelProps) {
  return (
    <p className={cn(
      "flex items-center gap-2 text-[11px] font-medium tracking-[0.12em] uppercase mb-2",
      "before:block before:w-5 before:h-px",
      light
        ? "text-white/45 before:bg-white/30"
        : "text-ink-3 dark:text-dark-ink3 before:bg-ink-3 dark:before:bg-dark-ink3",
      className
    )}>
      {children}
    </p>
  );
}
