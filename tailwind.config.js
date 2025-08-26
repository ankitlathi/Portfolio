/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
    'spin-slow': 'spin 10s linear infinite',
    },
    keyframes: {
        pulseFont: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' }, // increases size by 20%
        },
        pulseLogo: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' }, // increases size by 20%
        },
      },
      animation: {
        pulseFont: 'pulseFont 2.5s ease-in-out infinite',
        pulseLogo: 'pulseFont 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

