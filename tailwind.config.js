/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        

        "sm-425": {"max":"430px"},
        "sm-375": {"max":"380px"},
        "sm-320": {"max": "325px"},


      },

    },
  },
  plugins: [],
}

