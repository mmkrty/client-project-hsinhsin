/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prime: "#FF6464",
        secondary: "#F8C4B4",
      },
    },
  },
  plugins: [],
};
