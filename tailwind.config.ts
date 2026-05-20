import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        porcelain: "#F8F6F3",
        linen: "#E9E2DA",
        sand: "#CDBBA3",
        taupe: "#A89782",
        olive: "#4F503D",
        ink: "#1F1F21"
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        editorial: ["var(--font-editorial)", "Bebas Neue", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(31,31,33,0.08)",
        line: "inset 0 0 0 1px rgba(31,31,33,0.09)"
      }
    }
  },
  plugins: []
};

export default config;
