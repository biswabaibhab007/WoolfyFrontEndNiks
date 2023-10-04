/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        YoungSerif: ['Young Serif', "serif"],
        Croissant: ['Croissant One', 'cursive'],
        Raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

