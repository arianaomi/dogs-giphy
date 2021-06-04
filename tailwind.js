module.exports = {
  important: true,
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif']
    },
    extend: {
      colors: {
        cyan: '#9cdbff'
      },
      margin: {
        '96': '24rem',
        '128': '32rem'
      },
      width: {
        '45': '45%',
        '240': '240px'
      },
      height: {
        '240': '240px'
      },
      fontSize: {
        'md': '24px'
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  },
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
}
