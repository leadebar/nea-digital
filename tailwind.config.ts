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
        porcelain: "#FFF8EC",
        linen: "#FCEFD9",
        sand: "#E3363E",
        taupe: "#B08A6A",
        olive: "#E3363E",
        ink: "#2B2320"
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Black", "sans-serif"],
        editorial: ["var(--font-editorial)", "Arial Black", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(43,35,32,0.1)",
        line: "inset 0 0 0 1px rgba(43,35,32,0.1)"
      }
    }
  },
  plugins: []
};

export default config;
