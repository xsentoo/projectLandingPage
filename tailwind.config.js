/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#2D1A60', // Dark violet
          800: '#3A2273',
          700: '#472A86',
          600: '#5A359F',
          500: '#6E42B8',
          400: '#845DCE',
          300: '#9A78E5',
          200: '#B19AEB',
          100: '#CABCF2',
        },
        accent: {
          500: '#FF36D9', // Neon pink
          400: '#FF5AE2',
          300: '#FF7EEB',
          200: '#FFA3F2',
          100: '#FFC8F9',
        },
        dark: {
          900: '#0F0A19', // Almost black
          800: '#1A1326',
          700: '#251B33',
          600: '#302440',
          500: '#3B2C4D',
          400: '#4D3D5F',
          300: '#5F4E72',
          200: '#706084',
          100: '#817197',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scanline': 'scanline 5s linear infinite',
        'slide-up': 'slideUp 0.5s ease forwards',
        'slide-down': 'slideDown 0.5s ease forwards',
        'slide-left': 'slideLeft 0.5s ease forwards',
        'slide-right': 'slideRight 0.5s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 2px rgba(255, 54, 217, 0.7))' },
          '100%': { filter: 'drop-shadow(0 0 8px rgba(255, 54, 217, 0.9))' },
        },
        scanline: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};