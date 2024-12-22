/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'vrg-green': '#166534',
      },
      backgroundColor: {
        'vrg-green': '#166534',
      },
      textColor: {
        'vrg-green': '#166534',
      },
    },
  },
  plugins: [],
}
