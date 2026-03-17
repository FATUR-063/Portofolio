# FDS Portfolio

Portfolio website **Faturahman Dwi Saputra** — dibangun dengan Next.js 14, Tailwind CSS v3, Framer Motion, dan TypeScript.

---

## Tech Stack

| Layer      | Library / Tool          | Alasan                                                              |
|------------|-------------------------|---------------------------------------------------------------------|
| Framework  | Next.js 14 (App Router) | SSR/SSG, file-based routing, metadata API, production-ready         |
| Language   | TypeScript              | Type safety, autocomplete, mencegah bug runtime                     |
| Styling    | Tailwind CSS v3         | Utility-first, konsisten dengan design token, zero dead CSS         |
| Animation  | Framer Motion v11       | Declarative animation, AnimatePresence, useInView                   |
| Utility    | clsx + tailwind-merge   | Conditional classes tanpa conflict                                  |
| Linting    | ESLint + eslint-config-next | Enforce best practices Next.js                                  |

---

## Struktur Project

```
src/
├── app/
│   ├── layout.tsx        # Root layout — metadata SEO, font variables
│   ├── page.tsx          # Entry point — assembles semua section components
│   └── globals.css       # Tailwind directives + custom utilities (dot-grid, thumb gradients)
│
├── lib/
│   ├── data.ts           # SINGLE SOURCE OF TRUTH — semua konten portofolio ada di sini
│   └── utils.ts          # cn() helper: clsx + tailwind-merge
│
└── components/
    ├── ui/               # Reusable, generic components
    │   ├── RevealOnScroll.tsx   # Framer Motion scroll-triggered fade+slide wrapper
    │   └── SectionLabel.tsx     # ALL-CAPS label dengan leading dash line
    │
    └── sections/         # Page-level section components (satu file = satu section)
        ├── SplashScreen.tsx     # Full-screen loading splash dengan AnimatePresence
        ├── Navbar.tsx           # Sticky nav + active section via IntersectionObserver
        ├── Hero.tsx             # Staggered entrance animation, code card, dot-grid
        ├── About.tsx            # Bio, blockquote highlight, stats, skill tags
        ├── Projects.tsx         # Project cards dengan shimmer hover effect
        ├── Contact.tsx          # Dark section dengan dot-grid overlay
        └── Footer.tsx           # Simple footer
```

---

## Cara Menjalankan

```bash
# 1. Install dependencies
npm install

# 2. Development server
npm run dev
# → http://localhost:3000

# 3. Build production
npm run build
npm run start
```

---

## Design Decisions

### Warna
Semua warna didefinisikan sebagai Tailwind custom token di `tailwind.config.ts`:
- `bg` / `bg-2` — cream off-white, bukan putih dingin
- `accent` / `accent-2` — navy yang warm
- `ink` / `ink-2` / `ink-3` — hitam warm dengan 3 level opacity

### Typography
- **DM Serif Display** — display/heading, italic untuk aksen emosional
- **DM Sans** — body, clean dan readable

### Animasi
- `RevealOnScroll` — generic wrapper pakai `useInView` dari Framer Motion, bisa dipakai di mana saja dengan prop `delay`
- Hero entrance pakai `staggerChildren` variants — tiap child animasi berurutan otomatis
- `AnimatePresence` di `SplashScreen` — handle exit animation sebelum komponen di-unmount

### Data Management
Semua konten ada di `src/lib/data.ts`. Untuk update isi website (nama, project, skills), cukup edit file itu saja — tidak perlu sentuh component.

---

## Deploy ke Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# atau push ke GitHub, lalu connect repo di vercel.com
```
