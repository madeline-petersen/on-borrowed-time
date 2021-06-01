module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        '1984':
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./images/test-0.png')",
        '1989':
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./images/test-1.png')",
        '1997':
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./images/test-2.png')",
        '2003':
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./images/test-0.png')",
        '2014':
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./images/test-1.png')",
        '2019':
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./images/test-2.png')",
        '2020':
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./images/test-0.png')"
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
      black: '#000008'
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
