/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'merriweather': ['Merriweather', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('https://www.deviantart.com/vityar83/art/Cabin-Inside-509384980')"
      }
    },
  },
  plugins: [],
}
