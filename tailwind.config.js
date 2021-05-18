module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: '#FFFFFF',
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
