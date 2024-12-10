/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        cyan: "hsl(158, 36%, 37%)",
        green: "rgb(19 78 74)",
        cream: "hsl(30, 38%, 92%)",
        blue: {
          grayish: "hsl(228, 12%, 48%)",
          dark: "hsl(212, 21%, 14%)"
        },
      }
    },
  },
}
