/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slateGray: "#6c757d",
        brightRed: "#cb0b0a",
        deepPlum: "#1b4332",
      },
      boxShadow: {
        default: "rgba(0, 0, 0, 0.09) 0px 3px 12px;",
      },
    },
  },
  plugins: [],
};
