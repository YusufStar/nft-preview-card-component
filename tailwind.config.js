/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      "main-bg": "hsl(217, 54%, 11%)",
      "card-bg": "hsl(216, 50%, 16%)",
      "text": "hsl(215, 51%, 70%)",
      "eth": "hsl(178, 100%, 50%)",
    },
    extend: {},
  },
  plugins: [],
}
