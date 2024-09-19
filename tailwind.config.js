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
      }
    },
  },
  plugins: [],
}

