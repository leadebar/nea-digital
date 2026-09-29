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
        porcelain: "#FBF3E7",
        linen: "#F3E4D2",
        sand: "#B5502E",
        taupe: "#8C6B52",
        olive: "#6E7B4F",
        ink: "#3A2A20"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        editorial: ["var(--font-editorial)", "Georgia", "serif"],
        script: ["var(--font-script)", "Georgia", "serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(58,42,32,0.12)",
        line: "inset 0 0 0 1px rgba(58,42,32,0.1)"
      }
    }
  },
  plugins: []
};

export default config;
