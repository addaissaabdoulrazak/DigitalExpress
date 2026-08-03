/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D66610',
        'primary-dark': '#EA8C43',
        'primary-light': '#EA8C43',
        accent: '#FF9800',
        'gray-light': '#0F172A',
        'gray-text': '#CBD5E1',
        dark: '#FFFFFF',
        surface: '#1F2933',
        'surface-elevated': '#273549',
        'surface-soft': '#1a1f2e',
        border: '#374151',
        'footer-dark': '#111827',
      },
      fontFamily: {
        sans: ['Poppins', 'Montserrat', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        '1300': '1300px',
      },
      animation: {
        'slideDown': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
