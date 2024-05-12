/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'hide': 'hide 6s ease-in',
      },
      keyframes: {
        hide: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        }
      }
    },
  },
  plugins: [],
}

