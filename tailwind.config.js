/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

const fontFamily = defaultTheme.fontFamily;
fontFamily['sans'] = [
  'Inter',
  'Roboto', // <-- Roboto is a default sans font now
  'system-ui',
  // <-- you may provide more font fallbacks here
];

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    fontFamily: fontFamily, 
    extend: {
      backgroundImage: {
        'hero': "linear-gradient(180deg,#019147,#a0e85d)",
      },
    },
  },
  plugins: [],
}