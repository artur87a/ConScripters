/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#b23a48",
        secondary: "#c8ff00",
        dark: "#292524",
        light: "#d5d6da",
      }
    },
  },
  plugins: [],
}