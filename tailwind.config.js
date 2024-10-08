/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppinsRegular: ['Regular'],
        poppinsMedium: ['Medium'],
        poppinsBold: ['Bold'],
        poppinsSemiBold: ['SemiBold'],
        poppinsExtraBold: ['ExtraBold']
      },
      height: {
        '90vh': '90vh',
        '15': '3.5rem'
      },
      width: {
        '15': '3.5rem'
      }
    },
  },
  plugins: [],
}

