/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D60FF',
        darkBlue: '#343C6A',
        lightBg: '#F5F7FA',
        cardBlue: '#1A1A3A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Apple-style clean font
      }
    },
  },
  plugins: [],
}