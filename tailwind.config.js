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
        about: ['"Quicksand", sans-serif'],
        project : ['"Josefin Sans", sans-serif'],
        msh : ['"Sirin Stencil", sans-serif'],
      },

      keyframes: {
        'rotate-left': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'color-cycle': {
          '0%': { color: '#fee2e2' },   // red-100
          '25%': { color: '#bbf7d0' },  // green-100
          '50%': { color: '#bfdbfe' },  // blue-100
          '75%': { color: '#fbcfe8' },  // pink-100
          '100%': { color: '#fee2e2' }, // back to red-100
        },
      },
      animation: {
        'rotate-left': 'rotate-left 20s linear infinite',
        'color-cycle': 'color-cycle 4s linear infinite',
      },
    },
  },
  plugins: [],
};
