/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cobalt: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          glow: 'rgba(37, 99, 235, 0.25)',
        },
        obsidian: {
          950: '#07080a',
          900: '#0c0e12',
          850: '#101318',
          800: '#161a22',
          700: '#202531',
          600: '#313746',
        },
        paper: {
          DEFAULT: '#fbfbfa',
          light: '#ffffff',
          warm: '#f5f5f3',
          dark: '#ecebe8',
          ink: '#0b0d12',
          muted: '#525866',
          border: '#e4e3e0',
        }
      },
      fontFamily: {
        sans: ['"Manrope"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Manrope"', 'sans-serif'],
        mono: ['"DM Mono"', '"JetBrains Mono"', 'monospace'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'cobalt-glow': '0 0 35px -5px rgba(37, 99, 235, 0.35)',
        'cobalt-subtle': '0 4px 20px -2px rgba(37, 99, 235, 0.2)',
        'luxury-light': '0 20px 40px -15px rgba(0, 0, 0, 0.06)',
        'luxury-dark': '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [],
}
