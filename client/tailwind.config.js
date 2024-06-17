/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'dark-brown': '#332219',
        'brown': '#61372F',
        'light-brown': '#D4AD79',
        'alloy': '#F6A453',
        'dark-alloy': '#886455',
        'lightish': '#E4CFBB',
        'background': '#F0F0F0',
        'white': '#FFFFFF',
        'black': '#090909',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
