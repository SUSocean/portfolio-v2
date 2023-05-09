/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' }
        },
        'open-nav': {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' }
        },
        'close-nav': {
          '0%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(0)' }
        }
      },
      animation: {
        'open-menu': 'open-menu 0.2s ease-out forwards',
        'open-nav': 'open-nav 0.2s ease-out forwards',
        'close-nav': 'close-nav 0.2s ease-out forwards'
      }
    },
  },
  plugins: [],
}

