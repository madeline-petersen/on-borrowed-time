module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gray: {
        '10': '#F4F4F4',
        '20': '#E0E0E0',
        '30': '#C6C6C6',
        '40': '#A8A8A8',
        '50': '#8D8D8D',
        '60': '#6F6F6F',
        '70': '#525252',
        '80': '#393939',
        '90': '#262626',
        '100': '#161616'
      },
      black: '#090909'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};