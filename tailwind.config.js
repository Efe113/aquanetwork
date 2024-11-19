/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'particle-float': 'float 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)', opacity: '0.8' },
          '50%': { transform: 'translateY(-20px)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
