/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        secondary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        dark: {
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(124, 58, 237, 0.5)',
            opacity: 0.8
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(124, 58, 237, 0.8)',
            opacity: 1
          },
        },
        'pulse-light': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        'cyber-grid': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '30px 30px' },
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-light': 'pulse-light 2s ease-in-out infinite',
        'cyber-grid': 'cyber-grid 2s linear infinite',
        'text-shimmer': 'text-shimmer 3s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(transparent 95%, theme("colors.primary.500/0.1") 95%), linear-gradient(90deg, transparent 95%, theme("colors.primary.500/0.1") 95%)',
      },
    },
  },
  plugins: [],
};