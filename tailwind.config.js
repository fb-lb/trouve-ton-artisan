/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    screens: {
      'medium': '769px',
      'large': '1024px'
    },
    fontFamily: {
      'graphik': ['Graphik', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#f1f8fc',
        'secondary': '#0074c7',
        'tertiray': '#00497c',
        'dark': '#384050',
        'success': '#82b864',
        'danger': '#cd2c2e'
      }
    },
  },
  plugins: [],
}

