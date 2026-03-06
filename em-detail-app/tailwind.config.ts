/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,css}', // include css files
  ],
  theme: {
    extend: {
      colors: {
        'baby-pink': '#f7f7f7',  // your custom color
        primary: '#e63946',
        secondary: '#457b9d',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
