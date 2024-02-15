/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        50: '#FFEDF0',
        75: '#FFB3C1',
        100: '#FF94A7',
        200: '#FF6581',
        300: '#FF4667',
        400: '#B33148',
        500: '#9C2B3F',
      },
      secondary: {
        50: '#EBF9F6',
        75: '#ACE8DA',
        100: '#8ADFCA',
        200: '#8ADFCA',
        300: '#35C7A4',
        400: '#258B73',
        500: '#207964',
      },
      neutral: {
        50: '#FCFCFC',
        75: '#F1F2F4',
        100: '#ECECEF',
        200: '#E4E4E8',
        300: '#DEDFE3',
        400: '#9B9C9F',
        500: '#87888A',
      },
      black: '#181B2A',
      white: '#FFFFFF'
    },
  extend: {},
  },
  plugins: [],
}

