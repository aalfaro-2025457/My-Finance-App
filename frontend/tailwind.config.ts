/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        lakers: {
          purple: "#552583",
          "purple-dark": "#3B185F",
          "purple-light": "#6B30A4",
          gold: "#FDB927",
          "gold-hover": "#E0A01E",
          black: "#000000",
        },
      },
    },
  },
  plugins: [],
};