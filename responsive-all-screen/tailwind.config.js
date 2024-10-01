/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',           // Correct path for the main HTML file
    './src/**/*.{js,ts,jsx,tsx}', // Matches all JS/TS/JSX/TSX files in the src directory
  ],
  theme: {
    screens: {
      'xs': '350px', 
      'sm': '414px',
      'md': '740px',
      'lg': '968px',
      'xl': '1024px',
      '2xl': '1280px',
      '3xl': '1440px', 
    },
    extend: {},
  },
  plugins: [],
}
