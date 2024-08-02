/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode via a class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'source-sans-3': ['"Source Sans 3"', 'sans-serif'],
        jacquard: ['"Jacques Francois Shadow"', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
