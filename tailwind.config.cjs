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
      screens: {
        "-2xl": { max: "1536px" },
        // => @media (max-width: 1536px) { ... }

        "-xl": { max: "1280px" },
        // => @media (max-width: 1280px) { ... }

        "-lg": { max: "1024px" },
        // => @media (max-width: 1024px) { ... }

        "-md": { max: "768px" },
        // => @media (max-width: 768px) { ... }

        "-sm": { max: "640px" },
        // => @media (max-width: 640px) { ... }
      },
    },
  },
  plugins: [],
};
