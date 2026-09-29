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
        porcelain: "#0B0F1A",
        linen: "#131826",
        sand: "#C6FF3D",
        taupe: "#8892A6",
        olive: "#4DD8FF",
        ink: "#E8ECF5"
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial", "sans-serif"],
        editorial: ["var(--font-editorial)", "monospace"],
        body: ["var(--font-body)", "Inter", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0,0,0,0.4)",
        line: "inset 0 0 0 1px rgba(232,236,245,0.1)",
        glow: "0 0 0 1px rgba(198,255,61,0.4), 0 0 40px rgba(198,255,61,0.08)"
      }
    }
  },
  plugins: []
};

export default config;
