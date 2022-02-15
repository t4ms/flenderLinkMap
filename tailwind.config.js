module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
    },
    extend: {
      fontFamily: {
          'sans': ['Montserrat', 'sans-serif'],
          'display': ['Montserrat', 'sans-serif'],
          'body': ['"Montserrat"', ],
      },
      colors:{
        'fgDefault':{
          black:'#070C08',
          lighter: '#a7d4b5',
          light: '#6bbaa6',
          medium: '#417886',
          dark: '#374151',
          darker: '#1F2937',         
        },
        'green':{
          black: '#070C08',
          darker: '#131C13',
          dark: '#162718',
          medium: '#357300',
          light: '#479900',
          lighter: '#59BF00',
        },
        'brown':{
          black: '#070707',
          darker: '#402517',
          dark: '#4D2B1C',
          medium: '#663925',
          light: '#945437',
        },
        'yellow':{
          medium: '#DAA201',
          light: '#F3AD16',
          lighter: '#FFEC00',
        },  
        borderWidth: {
          DEFAULT: '1px',
          '0': '0',
          '2': '2px',
         '3': '3px',
          '4': '4px',
         '6': '6px',
         '8': '8px',
        },
      },
         
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [
    // ...
  ],
}
