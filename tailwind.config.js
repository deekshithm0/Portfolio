/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar'

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      },
      transitionProperty: {
        'filter': 'filter',
        'top': 'top',
        'left': 'left',
      },
    },
    plugins: [tailwindScrollbar],
  }
}
