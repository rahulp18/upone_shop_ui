/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        georgia: ["Georgian", "sans-serif"],
        rubik: ["Rubik Mono One", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
};