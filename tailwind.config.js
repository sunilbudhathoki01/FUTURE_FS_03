/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nikeBlack: "#111111",
        nikeRed: "#E10600",
        nikeGray: "#9CA3AF",
      },
      fontSize: {
        hero: "clamp(2.5rem, 6vw, 5rem)",
      },
    },
  },
  plugins: [],
};
