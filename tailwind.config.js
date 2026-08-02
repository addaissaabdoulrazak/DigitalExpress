/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1976D2',
        'primary-dark': '#1565C0',
        'primary-light': '#42A5F5',
        accent: '#FF9800',
        'gray-light': '#F5F7FA',
        'gray-text': '#555555',
        dark: '#222222',
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
