import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          light: "hsl(var(--secondary-light))",
          dark: "hsl(var(--secondary-dark))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontSize: {
        display: ["3.815rem", { lineHeight: "1.2", fontWeight: "600" }],
        h1: ["3.052rem", { lineHeight: "1.2", fontWeight: "600" }],
        h2: ["2.441rem", { lineHeight: "1.2", fontWeight: "600" }],
        h3: ["1.953rem", { lineHeight: "1.3", fontWeight: "500" }],
        h4: ["1.563rem", { lineHeight: "1.4", fontWeight: "500" }],
        h5: ["1.25rem", { lineHeight: "1.5", fontWeight: "500" }],
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        small: ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
      },
      spacing: {
        section: "6rem",
        container: "2rem",
      },
      height: {
        hero: "calc(100vh - 5rem)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to right bottom, hsl(var(--primary) / 0.9), hsl(var(--primary-dark) / 0.95))",
        "card-gradient":
          "linear-gradient(to bottom right, hsl(var(--primary-light) / 0.1), hsl(var(--primary) / 0.1))",
        image: "url('/images/hero-bg.jpg')",
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "fade-down": "fadeDown 0.5s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          xs: "475px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-animate"),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-motion"),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-intersect"),
  ],
} satisfies Config;
