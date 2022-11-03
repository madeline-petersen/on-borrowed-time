module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        '1984':
          "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url('./images/Homepage_1984.jpg')",
        '1989':
          "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url('./images/Homepage_1989.jpg')",
        '1997':
          "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url('./images/Homepage_1997.jpg')",
        '2003':
          "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url('./images/Homepage_2003.jpg')",
        '2014':
          "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url('./images/Homepage_2014.jpg')",
        '2019':
          "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url('./images/Homepage_2019.jpg')",
        '2020':
          "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url('./images/Homepage_2020.jpg')",
        '1984-home':
          "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url('./images/Homepage_1984.jpg')",
        '1989-home':
          "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url('./images/Homepage_1989.jpg')",
        '1997-home':
          "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url('./images/Homepage_1997.jpg')",
        '2003-home':
          "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url('./images/Homepage_2003.jpg')",
        '2014-home':
          "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url('./images/Homepage_2014.jpg')",
        '2019-home':
          "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url('./images/Homepage_2019.jpg')",
        '2020-home':
          "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url('./images/Homepage_2020.jpg')"
      })
    },
    colors: {
      white: '#FFFFFF',
      gray: {
        '10': '#F4F4F4',
        '20': '#E0E0E0',
        '30': '#CBCAC4', // untitled sans site
        '40': '#A8A8A8',
        '50': '#8D8D8D',
        '60': '#6F6F6F',
        '70': '#525252',
        '80': '#393939',
        '90': '#262626',
        '100': '#161616'
      },
      blue: {
        '10': '#C6E0FF',
        '50': '#D6E6F7',
        '70': '#00244e'
      },
      black: '#000000',
      yellow: '#E8E5D2',
      red: '#26282B',
      brown: '#453439',
      purple: '#9C8CB5'
    },
    screens: {
      sm: '375px',
      md: '756px',
      lg: '1056px',
      xl: '1440px',
      xxl: '1800px'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
