/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightYellow: "#E0CE2E",
        normalBlue:  "#0556A1",
        darkBlue: "#02041A",
        diveGreen: "#02D2AD",
      },
    },
  },
  plugins: [],
};
