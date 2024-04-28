/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./tailwind.html"],
  theme: {
    extend: {
      fontFamily: {
        'Lora':['"Lora"', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('laut.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

