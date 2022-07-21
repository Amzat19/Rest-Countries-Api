/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        'customShadow': '0px 1px 8px 1px rgb(0 0 0 / 0.1)'
      },
      colors: {
        'darkBg': 'hsl(207, 26%, 17%)',
        'darkText': 'hsl(0, 0%, 100%)',
        'darkElem': 'hsl(209, 23%, 22%)',
      },
    },
  },
  plugins: [],
}