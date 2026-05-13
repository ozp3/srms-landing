import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#F2F4F7",
        surface: "#FFFFFF",
        elevated: "#E8EDF3",
        accent: "#005BAA",
        "accent-dark": "#003F7A",
        "text-primary": "#0D1B2E",
        "text-muted": "#7B8EAC",
        border: "#C8D3E0",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-accent":
          "linear-gradient(135deg, #005BAA 0%, #003F7A 100%)",
        "gradient-card":
          "linear-gradient(135deg, #FFFFFF 0%, #F2F4F7 100%)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 91, 170, 0.18)",
        "glow-lg": "0 0 40px rgba(0, 91, 170, 0.22)",
        card: "0 4px 24px rgba(13, 27, 46, 0.08)",
        "card-hover": "0 8px 32px rgba(13, 27, 46, 0.12)",
      },
      animation: {
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 91, 170, 0.12)" },
          "50%": { boxShadow: "0 0 35px rgba(0, 91, 170, 0.28)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
