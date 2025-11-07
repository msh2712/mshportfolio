/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00ffff",
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        name: ['Unbounded', 'sans-serif'],
        about : ['"Quicksand", sans-serif']
      }, 
    },
  },
  plugins: [],
};
