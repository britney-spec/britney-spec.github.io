import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#2D2D2D",
        navy: "#2F4156",
        ivory: "#FAF8F5",
        gold: "#C8A977",
        rose: "#E8D8D3"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 26px 70px rgba(47, 65, 86, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
