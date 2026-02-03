/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ebeaf1',
          100: '#d7d5e3',
          200: '#b9b6d0',
          300: '#9c97bb',
          400: '#6a6399',
          500: '#4c4484',
          600: '#393077', // brand primary
          700: '#302965',
          800: '#282253',
          900: '#1f1a41',
        },
        secondary: {
          50: '#f4edf4',
          100: '#e9dbea',
          200: '#d8c3da',
          300: '#caa8cc',
          400: '#af7cb2',
          500: '#9f62a3',
          600: '#955199', // brand secondary
          700: '#7f4482',
          800: '#68386b',
          900: '#522c54',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}

