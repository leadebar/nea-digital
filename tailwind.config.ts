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
        porcelain: "#FFF4E3",
        linen: "#EAE1FF",
        sand: "#FFD166",
        taupe: "#8B7BB8",
        olive: "#FF5A5F",
        ink: "#1B1035"
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        editorial: ["var(--font-editorial)", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(27,16,53,0.1)",
        line: "inset 0 0 0 1px rgba(27,16,53,0.1)",
        pop: "6px 6px 0 0 #1B1035"
      }
    }
  },
  plugins: []
};

export default config;
