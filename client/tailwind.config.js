/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#c5d6f000",
        "secondary": "#D0E1F9",
        "tertiary": "#4D648D"
      }
    },
    screens: {
      'lg': {'max': '2023px'},
      

      'sm': {'max': '1000px'},
      
    }
  },
  plugins: [],
}