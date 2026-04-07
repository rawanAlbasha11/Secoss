export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        // 🎯 Base (هادئة)
        background: "#f8fafc",
        surface: "#ffffff",

        textPrimary: "#1f2937",
        textSecondary: "#6b7280",

        // 💠 Accent (ألوانك - استخدام خفيف)
        accent: "#1718e1",
        accentBg: "rgb(63 63 255 / 36%)",

        accentSoft: "rgb(7 205 205)",
        accentSoftBg: "#84feff66",
      },

      boxShadow: {
        // كارد عادي
        card: "0 4px 12px rgba(0,0,0,0.05)",

        // 🔥 هوفر ثابت (المهم)
        cardHover: "0 10px 30px accentSoftBg",

        // خفيف
        soft: "0 2px 8px rgba(0,0,0,0.04)",
      },

      borderRadius: {
        xl2: "1rem",
        xl3: "1.5rem",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease forwards",
      },
    },
  },

  plugins: [],
};
