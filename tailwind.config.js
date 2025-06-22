//tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./templates/customers/*.liquid",
  ],
  theme: {
    extend: {
      screens: {
        'sm': "640px",
        'md': "768px",
        'lg': "1024px",
        'xl': "1280px",
        '2xl': "1536px"
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
