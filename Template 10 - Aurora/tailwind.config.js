/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        aurora: {
          void: '#040D0A',
          deep: '#0A1D1A',
          surface: '#122B27',
          surfaceLight: '#1A3833',
          cyan: '#8EEBE3',
          emerald: '#34D399',
          gold: '#E2C799',
          goldLight: '#FAF5EB',
          goldDark: '#B89762',
          silver: '#C2D6D3',
          muted: '#7A9994',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        serif: ['var(--font-amiri)', 'Georgia', 'serif'],
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        arabicSans: ['var(--font-cairo)', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'aurora-mesh': 'auroraMesh 15s ease infinite alternate',
        'light-sweep': 'lightSweep 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        auroraMesh: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.15) rotate(5deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' },
        },
        lightSweep: {
          '0%, 100%': { opacity: '0.3', transform: 'translateX(-20%)' },
          '50%': { opacity: '0.7', transform: 'translateX(20%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
