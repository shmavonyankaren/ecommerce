/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-image': "url('/src/assets/BackgroundImage.avif')",
        'background-contact-image': "url('/src/assets/ContactBack.jpg')",
        'background-cart-image': "url('/src/assets/BackgroundForCart.webp')",
      },
    }
  },
  plugins: [],
}