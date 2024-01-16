/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'almost-black': '#18171F',
        'dark-grey': '#24232C',
        grey: '#817D92',
        green: '#A4FFAF',
        red: '#F64A4A',
        orange: '#FB7C58',
        yellow: '#F8CD65',
        'almost-white': '#E6E5EA',
      },
    },
    fontFamily: {
      sans: 'JetBrains Mono',
    },
  },
  plugins: [],
};
