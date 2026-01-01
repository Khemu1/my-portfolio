import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      colors: {
        // Modern color palette
        primary: {
          DEFAULT: "#0a0a0f", // Dark navy blue instead of pure black
          50: "#f5f6fa",
          100: "#e9ebf5",
          200: "#d4d8e9",
          300: "#afb5d6",
          400: "#848dbf",
          500: "#6670a8",
          600: "#51598e",
          700: "#424874",
          800: "#393e61",
          900: "#0a0a0f",
        },
        accent: {
          DEFAULT: "#7c3aed", // Vibrant purple (modern alternative to neon green)
          hover: "#6d28d9",
          light: "#a78bfa",
          dark: "#5b21b6",
        },
        secondary: {
          DEFAULT: "#06b6d4", // Cyan for secondary accents
          hover: "#0891b2",
        },
        surface: {
          DEFAULT: "#1a1b26", // Slightly lighter background for cards/sections
          light: "#24283b",
          dark: "#16161e",
        },
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
        info: "#3b82f6",
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-in-out",
        "fade-out": "fade-out 0.3s ease-in-out",
        "slide-in-from-right": "slide-in-from-right 0.3s ease-out",
        "slide-out-to-right": "slide-out-to-right 0.3s ease-in",
        pulse: "pulse 1.5s infinite",
        "gradient-x": "gradient-x 3s ease infinite",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.7" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "accent-gradient": "linear-gradient(90deg, #7c3aed 0%, #06b6d4 100%)",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
