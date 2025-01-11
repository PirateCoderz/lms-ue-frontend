/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor:"#FFFFFF",
        bgColor:"#1C1B3B",
       },
       translate: ['group-hover'],
    },
  },
  plugins: [],
}