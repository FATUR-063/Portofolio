import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-ink dark:bg-dark-bg py-7 text-center border-t border-white/5">
      <p className="text-[12.5px] text-white/30">
        © 2026 <span className="text-white/55">{profile.name}</span> — {profile.university}
      </p>
    </footer>
  );
}
