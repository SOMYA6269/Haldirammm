export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  safelist: [
    // NAVBAR HEIGHTS
    "h-[74px]",
    "h-[82px]",
    "h-[108px]",

    // ICON SIZES
    "w-6", "h-6",
    "w-7", "h-7",
    "w-[30px]", "h-[30px]",

    // TEXT SIZES
    "text-[10px]",
    "text-[15px]",
    "text-[17px]",
    "text-[14px]",

    // SPACING
    "gap-5",
    "gap-8",
    "gap-10",
    "px-10",
    "px-5",
    "py-2.5",
    "pl-5",
    "pr-12",

    // TRACKING
    "tracking-wide",
    "tracking-wider",

    // POSITION
    "-translate-x-1/2",
    "-translate-y-1/2",

    // CUSTOM WIDTHS
    "w-[300px]",
    "max-w-[1700px]",

    // ANNOUNCEMENT BAR
    "h-14",

    // FLEX + OTHERS USED IN NAVIGATION
    "uppercase",
    "font-semibold",
    "font-bold",
    "border-b-2",
    "border-transparent",
    "hover:border-red-600",
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

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

      animation: {
        marquee: "marquee 12s linear infinite",
      },
    },
  },

  plugins: [],
};
