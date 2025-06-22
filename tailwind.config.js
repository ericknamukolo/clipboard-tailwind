/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        strongCyan: '#00B2A9',
        lightBlue: '#E5F6FF',
        darskGrayishBlue: '#2B3945',
        grayishBlue: '#A9B2C3',
      },
      fontFamily: {
        sans: ['Bai Jamguree', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
