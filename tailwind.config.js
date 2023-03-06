/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend:{
      colors: {
        "primary" : "#A555EC",
        "secondary" : "#F3CCFF",
        "third" : "#FFFFD0",
        "link" : "#1D77FF"
      }
    },
    container: {
      center: true
    }
   
  },
  plugins: [],
}
