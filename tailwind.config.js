/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js,php}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: "class", // or media & false
  theme: {
    extend: {
      colors: {
        facebook: "#3b5998",
        google: "#DB4437",
        twitter: "#1DA1F2",
        instagram: "#fdf497",
        whatsapp: "#075E54",
        linkedin: "#0072b1",
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    require("@tailwindcss/typography"),
    // require("@tailwindcss/forms")({
    //   strategy: "base", // only generate global styles
    // }),
  ],
};
