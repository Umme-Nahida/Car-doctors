/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropOpacity: {
        15: '.15',
      }
    },
  },
  plugins: [require("daisyui")],
}

