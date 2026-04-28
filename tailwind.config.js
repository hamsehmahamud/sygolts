/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sygo: {
          blue: '#4CC9F0',
          pink: '#F72585',
          purple: '#7209B7',
          yellow: '#FFD60A',
          green: '#4361EE',
          'pastel-blue': '#E0FBFC',
          'pastel-green': '#F0FFF4',
          'pastel-yellow': '#FFF9DB',
          'pastel-purple': '#F3E8FF',
          'on-surface': '#2D3142',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '20px',
        'full': '9999px',
        'irregular-1': '2rem 1rem 4rem 1.5rem',
        'irregular-2': '1.5rem 3rem 1rem 2rem',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #7209B7, #F72585)',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(247, 37, 133, 0.4)' },
          '50%': { boxShadow: '0 0 20px 10px rgba(247, 37, 133, 0)' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'slide-in-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'slide-in-up': 'slide-in-up 0.6s ease-out forwards',
        'scroll-left': 'scroll-left 30s linear infinite',
      }
    },
  },
  plugins: [],
}
