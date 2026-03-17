import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        bg: { DEFAULT: "#F7F6F2", 2: "#EEECEA" },
        surface: "#FFFFFF",
        ink: { DEFAULT: "#1A1916", 2: "#5A5852", 3: "#9A988F" },
        accent: { DEFAULT: "#1D2B4F", 2: "#2E4080" },
        line: "#D8D6CF",
        tag: { bg: "#E8E6E0", txt: "#3A3830" },
        brand: { green: "#1B6B45", "green-bg": "#E6F2EC" },
        // dark mode tokens
        dark: {
          bg:      "#0F0E0C",
          bg2:     "#1A1916",
          surface: "#1F1E1B",
          line:    "#2E2C28",
          ink:     "#F0EEE8",
          ink2:    "#A8A49C",
          ink3:    "#5C5A54",
        },
      },
      borderRadius: { card: "20px" },
      animation: {
        "pulse-dot":   "pulse-dot 2.2s ease-in-out infinite",
        blink:         "blink 1s step-end infinite",
        "splash-fill": "splash-fill 1.6s 0.3s cubic-bezier(0.4,0,0.2,1) forwards",
        "scroll-prog": "none",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%":      { opacity: "0.45", transform: "scale(0.65)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0" },
        },
        "splash-fill": {
          "0%":   { width: "0%" },
          "60%":  { width: "75%" },
          "85%":  { width: "92%" },
          "100%": { width: "100%" },
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
