/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary : "#4FD8E0",
        secondary : {
          DEFAULT : "#436475",
          50 : "rgba(42, 163, 239, 0.04)",
        },
      }
    },

  },
  plugins: [],
}
