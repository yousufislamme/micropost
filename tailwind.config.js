const { keyframes } = require('@emotion/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        loginText: {
          '0%, 100%': { transform: 'translate(0px)' },
          '50%': { transform: 'translate(80%)' },
        }
      },
      animation: {
        'blob': 'blob 3.5s infinite',
        'loginText': 'loginText 5s infinite'

      },
    },
  },
  plugins: [],
}
