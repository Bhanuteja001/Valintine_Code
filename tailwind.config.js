/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        love:["LoveFont","fredoka"],
         montserrat: ["Montserrat", "sans-serif"],
         poppins:["Poppins","san-serif"]
      }
    },
  },
  plugins: [],
}

