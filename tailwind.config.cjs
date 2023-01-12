/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#217BF4",
        dimBlue: "#F1F6FD",
        darkerPrimary: '#E5F0FD',
        paragraph: "#656464",
        heading: "#0A093D",
      },
      fontFamily: {
        quicksand: ["quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};