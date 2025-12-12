export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  safelist: [
    // Prevent Tailwind purge removing important classes
    "h-16", "h-20", "h-24", "h-[105px]",
    "text-[13px]", "text-[14px]", "text-[15px]",
    "tracking-wide", "tracking-wider",
    "px-6", "px-8",
    "uppercase",
    "font-semibold",
    "font-bold"
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },

      colors: {
        haldiCream: "#FAF3E6",
        haldiRed: "#C1272D",
        haldiGold: "#D6AF72",
      },

      letterSpacing: {
        "wide-sm": "0.035em",
        "wide-md": "0.06em",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

      animation: {
        marquee: "marquee 14s linear infinite",
      },
    },
  },

  plugins: [],
};
