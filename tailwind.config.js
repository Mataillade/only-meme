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
        primary : {
          DEFAULT: "#4FD8E0",
          300: "rgba(79, 216, 224, 0.37)",
        },
        secondary : {
          DEFAULT : "#436475",
          50 : "rgba(42, 163, 239, 0.07)",
        },
      }
    },

  },
  plugins: [],
}
