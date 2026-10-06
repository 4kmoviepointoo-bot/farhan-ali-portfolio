import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "380px",
      },
      colors: {
        bg: {
          primary: "#0a0a0a",
          secondary: "#111111",
          card: "#161616",
          elevated: "#1a1a1a",
        },
        accent: {
          blue: "#3b82f6",
          "blue-dim": "#1d4ed8",
          cyan: "#06b6d4",
          subtle: "#1e3a5f",
        },
        border: {
          subtle: "#1f1f1f",
          DEFAULT: "#2a2a2a",
          highlight: "#3f3f3f",
        },
        text: {
          primary: "#f5f5f5",
          secondary: "#a3a3a3",
          muted: "#525252",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-size": "48px 48px",
      },
    },
  },
  plugins: [],
};

export default config;
