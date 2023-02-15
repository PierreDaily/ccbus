/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'bus-green': 'rgb(39, 174, 96)',
        'grey-light': 'rgba(222, 222, 230, 1)',
        'black-light': 'rgba(73, 80, 87, 1)',
        'dark-green': '#417293'
      },
      width: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [],
}
