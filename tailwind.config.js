/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}" 
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#8b2555", // Maroon - main accent (e.g., buttons, headings)
          navy: "#1f1f54",    // Deep blue - strong backgrounds, footer
          light: "#f5f5f5",   // Light neutral background
        },
        "my-theme": "#8b99b3",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
