/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'vue-green': '#41b883',
        'primary-background': '#ecf8f3',
      },
    },
  },
  plugins: [],
}
