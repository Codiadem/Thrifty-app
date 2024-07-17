/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // custom colors here
      primaryBlue: "#371694",
    },

    fontFamily: {
      DMSans: ["DM Sans", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
