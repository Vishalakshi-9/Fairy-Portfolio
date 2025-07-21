const { default: daisyui } = require('daisyui');
const { default: themes } = require('daisyui/theme/object');
const { Playfair } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { // <-- fixed typo from 'color' to 'colors'
        sage: {
          100: '#e2f4dfff',
          500: '#a8bca1',
        },
        aqua: {
          100: '#e0f7fa',
          500: '#00bcd4',
        },
        rose: {
          200: '#f8bbd0',
        },
        gold: {
          500: '#ffd900ff',
        },
      },
      fontFamily: {
        Playfair: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        forestFairy: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#a8bca1",
          secondary: "#f8bbd0",
          accent: "#ffd700",
          neutral: "#333333",
          "base-100": "#edf4ec"
        }
      }
    ]
  }
}

