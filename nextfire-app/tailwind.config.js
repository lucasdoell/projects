const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#eef0f1',
        'text-primary': '#08090a',
        'blue-primary': '#3b49df',
        'red-primary': '#df3b3b',
        'green-primary': '#3bdf72',
        'gray-primary': '#b5bdc4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
