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
        accent:"rgba(239, 203, 29, 1)",
      },
      container: {
        center:true,
        // padding: {
        //   DEFAULT: '1rem',
        //   sm: '4rem',
        //   lg: '8rem',
        //   xl: '10rem',
        //   '2xl': '14rem',
        // },
      },
    },
  },
  plugins: [],
};
