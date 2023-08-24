/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{index.html, app.js}"],
  theme: {
    extend: {
      colors: {
        dimgray: '#797270',
        frenchgray: '#a7a7a9',
        ashgray: '#b0c0bc',
        teagreen: '#c1edcc',
        taupe: '#453f3c'
      },
    },
  },
  plugins: [],
}

