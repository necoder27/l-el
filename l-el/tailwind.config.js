/** @type {import('tailwindcss').Config} */
const { screens } = require('tailwindcss/defaultTheme')
export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      'xs': '375px',
      ...screens,
    },
  },
  plugins: [],
}

