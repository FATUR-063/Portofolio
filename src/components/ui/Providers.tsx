"use client";

import { ThemeProvider } from "next-themes";

/**
 * Client-side providers wrapper.
 * next-themes requires "use client" — we keep this separate
 * so layout.tsx stays a Server Component.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"       // toggles .dark class on <html>
      defaultTheme="system"   // respects OS preference on first visit
      enableSystem
      disableTransitionOnChange={false}
    >
      {children}
    </ThemeProvider>
  );
}
