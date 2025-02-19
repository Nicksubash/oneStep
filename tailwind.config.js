/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}" 
  ],
  theme: {
    extend: {
      colors:{"my-theme":"#8b99b3"},
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
