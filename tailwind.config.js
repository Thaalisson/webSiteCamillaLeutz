/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Para incluir todos os arquivos React
  theme: {
    extend: {
      colors: {
        primary: '#7f634b',
        secondary: '#9b7f67',
        accent: '#b19e8d',
        beige: '#ccb194',
        light: '#e1ceae',
        soft: '#e3dcd4',
      },
    },
  },
  plugins: [],
}
