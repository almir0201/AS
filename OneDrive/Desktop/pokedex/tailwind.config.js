/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        inputbg: '#F2F2F2',
        primary: '#F2B807',
        second: '#F28F16',
        third: '#F5DB13',
        danger: '#D93E30',
        gray: '#F6F7F9',
        dark: '#212121'
      },
      fontFamily: {
        sanspro: 'Source Sans Pro',
        karla: 'Karla'
      }
    }
  },
  plugins: []
};
