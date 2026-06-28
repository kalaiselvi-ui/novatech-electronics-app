/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // 💡 Add your global e-commerce brand variables here!
      colors: {
        primary: "#003366",
        secondary: "#14B8A6",

        background: "#F8FAFC",
        card: "#FFFFFF",

        textPrimary: "#1F2937",
        textSecondary: "#6B7280",

        footer: "#121212",
        border: "#E5E7EB",

        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
