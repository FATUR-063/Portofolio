import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/lib/data";
import { Providers } from "@/components/ui/Providers";

export const metadata: Metadata = {
  title: `${profile.name} — Portfolio`,
  description: `${profile.description} | ${profile.university}`,
  keywords: ["Frontend Developer", "Backend Developer", "React", "Next.js", "Node.js"],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Portfolio`,
    description: profile.description,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
