/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // custom colors here
      primaryBlue: "#371694",
      profileBox: "#ECE6FF",
      white: "#FFFFFF",
    },

    screens: {
      // custom media query breakpoints
      xsm: "380px", // add a new breakpoint for 'xsm'
      sm: "480px", // Update existing breakpoint for 'sm'
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xl2: "1800px", // Add a new breakpoint for 'xl2'
    },

    fontFamily: {
      DMSans: ["DM Sans", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
