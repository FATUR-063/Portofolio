// ─── PORTFOLIO DATA ───────────────────────────────────────────────
// Single source of truth. To update content, edit this file only.

export const profile = {
  name: "Faturahman Dwi Saputra",
  initials: "FDS",
  tagline: "Build hal yang beneran jalan, Bukan asal-asalan.",
  description:
    "Frontend + Backend developer - dari UI yang rapi sampai API yang bersih. Familiar dengan React, Next.js, dan Node.js. Senang kalau kodenya bisa dibaca orang lain.",
  status: "Open to Capstone Project 2026",
  university: "Sistem Informasi UAD",
  contact: {
    email: "2300016063@webmail.uad.ac.id",
    github: "FATUR-063",
    githubUrl: "https://github.com/FATUR-063",
    whatsapp: "+62 852-5427-3449",
    whatsappUrl: "https://wa.me/6285254273449",
  },
  stats: [
    { value: "3+", label: "Projects" },
    { value: "2",  label: "Roles" },
    { value: "2+", label: "Tahun Coding" },
  ],
} as const;

export const about = {
  headline: ["Curious.", "Collaborative.","Innovative."],
  paragraphs: [
    "Hai Fatur di sini, mahasiswa Sistem Informasi UAD yang mulai coding bukan karena tuntutan kurikulum, tapi karena satu pertanyaan: <strong>gimana caranya sesuatu bisa \"hidup\" di browser?</strong>",
    "Dari situ, saya mulai ngulik React, lanjut ke backend, dan sekarang nyaman di keduanya — dari bikin tampilan yang enak dipakai sampai API yang efisien di balik layar.",
    "Di luar coding, saya suka ngobrol soal arsitektur sistem dan UI/UX, karena percaya produk yang baik lahir dari dua hal: <strong>teknis yang solid dan tampilan yang manusiawi.</strong>",
  ],
  highlight: {
    text: "Waktu ngerjain <strong>Sampay</strong>, saya dapet pelajaran berharga: kode yang bagus bukan yang paling canggih, tapi yang paling mudah dipahami orang lain. Dan hal itu yang selalu saya pegang sampai sekarang.",
  },
} as const;

export type SkillGroup = {
  label: string;
  skills: { name: string; highlight?: boolean }[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      { name: "React", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "Flutter", highlight: true },
      { name: "Tailwind CSS" },
      { name: "Dart"},
      { name: "HTML / CSS" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "REST API" },
      { name: "FastAPI"},
    ],
  },
  {
    label: "Database & DevOps",
    skills: [
      { name: "Git", highlight: true },
      { name: "Supabase", highlight: true },
      { name: "MySQL" },
      { name: "Docker" },
      { name: "New Relic" },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  role: string;
  impact: string;        // one-line result/impact
  description: string;
  stack: string[];
  thumbClass: string;
  icon: string;
  liveUrl?: string;
  demoNote?: string;
};

export const projects: Project[] = [
  {
    id: "sampay",
    title: "Sampay",
    role: "Frontend Developer",
    impact: "Dipakai nyata oleh mahasiswa UNESA untuk operasional bank sampah.",
    description:
      "Modernisasi proses bisnis bank sampah — dari request penjemputan sampah ke rumah, tracking, hingga penjualan produk daur ulang.",
    stack: ["React (Vite)", "Tailwind CSS", "Vercel"],
    thumbClass: "thumb-sampay",
    icon: "♻️",
    liveUrl: "https://sampayy-app.vercel.app/",
  },
  {
    id: "fin",
    title: "Fix It Now (FIN)",
    role: "Fullstack Developer",
    impact: "Dibangun tim 4 orang, lulus sebagai proyek terbaik matkul DPSI.",
    description:
      "Platform pelaporan & monitoring fasilitas kampus — katalog kondisi fasilitas, sistem rating, dan dashboard real-time.",
    stack: ["Next.js", "Tailwind", "Node.js", "Supabase"],
    thumbClass: "thumb-fin",
    icon: "🏛️",
    demoNote: "Demo tersedia via foto",
  },
  {
    id: "bugetting",
    title: "Bugetting",
    role: "Mobile Developer",
    impact: "Fitur 'Worth It' jadi highlight — ide orisinal dari tim.",
    description:
      "Aplikasi finansial personal dengan pencatatan pemasukan/pengeluaran, manajemen tabungan, dan fitur Worth It — kalkulasi apakah suatu pembelian sepadan.",
    stack: ["Flutter", "Dart"],
    thumbClass: "thumb-bugetting",
    icon: "💰",
    demoNote: "Demo tersedia via foto",
  },
];
