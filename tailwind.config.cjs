/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        vueGreen: '#41b883',
        primaryBackground: '#ecf8f3',
        firebase: '#fcca3f',
        tailwind: '#07b6d5'
      },
    },
  },
  plugins: [],
}
