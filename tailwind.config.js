/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // senin proje yapına göre düzenle
  ],
  theme: {
    extend: {
      fontFamily: {
        ntf: ['"NTF Grand"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}