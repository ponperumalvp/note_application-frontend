/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "black",
        secondary: "white",
        br1: "#1C1F26",
        tc1: "white",
        tc2: "black",
        bgClr1: "#1C1F26",
        bgclr2: "#0E1217",
        textClr: "white",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.4xl") },
        h2: { fontSize: theme("fontSize.3xl") },
        h3: { fontSize: theme("fontSize.2xl") },
        h4: { fontSize: theme("fontSize.xl") },
        h5: { fontSize: theme("fontSize.lg") },
        h6: { fontSize: theme("fontSize.base") },
      });
    }),
  ],
};
