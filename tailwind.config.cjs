/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prime: "#B73E3E", //DD5353,FF6464,B73E3E
        secondary: "#F8C4B4",
      },
      fontFamily: {
        cinzel: ['"Cinzel"', "serif"],
        fraunces: ['"Fraunces"', "serif"],
        "source-sans-pro": ['"Source Sans Pro"', "sans-serif"],
        pacifacto: ['"Pacifico"', "cursive"],
      },
    },
  },
  plugins: [],
};
