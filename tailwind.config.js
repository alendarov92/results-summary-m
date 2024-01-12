/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pale-blue": "hsl(221, 100%, 96%)",
        "slate-blue": {
          "light" :"hsl(252, 100%, 67%)",
          "dark" :"hsl(241, 81%, 54%)"
        },
        "slate-blue-circle": {
          "light" :"hsl(256, 72%, 46%, 1)",
          "dark" :"hsl(241, 72%, 46%, 0)"
        }
      },
    },
  },
  plugins: [],
}

