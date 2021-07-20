module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        '1984': "url('./images/Homepage_1984.jpg')",
        '1989': "url('./images/Homepage_1989.jpg')",
        '1997': "url('./images/Homepage_1997.jpg')",
        '2003': "url('./images/Homepage_2003.jpg')",
        '2014': "url('./images/Homepage_2014.jpg')",
        '2019': "url('./images/Homepage_2019.jpg')",
        '2020': "url('./images/Homepage_2020.jpg')",
        '1984-home':
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url('./images/Homepage_1984.jpg')",
        '1989-home':
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url('./images/Homepage_1989.jpg')",
        '1997-home':
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url('./images/Homepage_1997.jpg')",
        '2003-home':
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url('./images/Homepage_2003.jpg')",
        '2014-home':
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url('./images/Homepage_2014.jpg')",
        '2019-home':
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url('./images/Homepage_2019.jpg')",
        '2020-home':
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url('./images/Homepage_2020.jpg')"
      })
    },
    colors: {
      white: '#FFFFFF',
      gray: {
        '10': '#F4F4F4',
        '20': '#E0E0E0',
        '30': '#BFBFBF', // untitled sans site
        '40': '#A8A8A8',
        '50': '#8D8D8D',
        '60': '#6F6F6F',
        '70': '#525252',
        '80': '#393939',
        '90': '#262626',
        '100': '#161616'
      },
      black: '#000008',
      yellow: '#F8F2BF',
      blue: '#8693AC',
      red: '#C6573E',
      brown: '#9E9081',
      purple: '#AEA4BE'
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
