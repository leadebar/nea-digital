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
        porcelain: "#FBF6EF",
        linen: "#F1E9DD",
        sand: "#C1502E",
        taupe: "#8C8272",
        olive: "#7A8B6F",
        ink: "#2B2620"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        editorial: ["var(--font-editorial)", "Georgia", "serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(43,38,32,0.08)",
        line: "inset 0 0 0 1px rgba(43,38,32,0.09)"
      }
    }
  },
  plugins: []
};

export default config;
