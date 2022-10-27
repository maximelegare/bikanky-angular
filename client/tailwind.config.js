/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors:{
        transparentGray:"rgba(30, 41, 59, 0.4)",
        transparentAccent:"rgba(239, 203, 29, 0.4)",
        transparentHover:"#f3ecc7",
        accent:"rgba(239, 203, 29, 1)",
      },
      container: {
        center:true,
        padding: {
          DEFAULT: '1rem',
          sm: '4rem',
          lg: '6rem',
          xl: '8rem',
          '2xl': '10rem',
        },
      },
    },
  },
  plugins: [],
};
