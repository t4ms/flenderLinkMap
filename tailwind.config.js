module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      border: '1px #fff solid',
      margin: '100px',
      padding: '100px',
    },
    extend: {
      fontFamily: {
          'sans': ['Open Sans', 'sans-serif'],
          'display': ['Open Sans', 'sans-serif'],
          'body': ['"Open Sans"', ],
      },
      colors:{
        'fgDefault':{
          black:'#030c01',
          lighter: '#a7d4b5',
          light: '#6bbaa6',
          medium: '#417886',
          dark: '#374151',
          darker: '#1F2937',         
        },
        'fgValentia':{
          DEFAULT: '#0d1c03',
          200: '#62ac2f',
          400: '#479435',
          600: '#3c8032',
          800: '#0a2805',
        }
      }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
