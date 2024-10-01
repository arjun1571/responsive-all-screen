/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '414px',
      'md': '740px',
      'lg': '968px',
      'xl': '1024px',
      '2xl': '1280px',
    },
    extend: {
      screens: {
        'xs': '350px',
        '3xl': '1440px',

      },
    },
  },
  plugins: [],
}