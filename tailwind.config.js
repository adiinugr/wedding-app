module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Parisienne", "cursive"],
      body: ["Raleway", "sans-serif"],
    },
  },
  variants: {
    extend: {
      ringColor: ["hover", "active"],
      opacity: ["disabled"],
      backgroundColor: ["active"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
