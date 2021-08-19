const tailwindColors = require('tailwindcss/colors');

/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  purge: ['./src/**/*.jsx', './src/**/*.tsx'],
  darkMode: 'media',
  plugins: [],
  theme: {
    extend: {
      colors: {
        gray: tailwindColors.blueGray,
      },
    },
    zIndex: {
      0: 0,
      1: 1,
      infinity: 2147483647,
    },
  },
};
