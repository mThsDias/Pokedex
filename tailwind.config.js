/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'pokebola': "url('../img/pokebola.svg')",
      'bgteste': "url('../img/bgteste.jpg')"
    }
  },
}

