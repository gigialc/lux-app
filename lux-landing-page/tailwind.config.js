/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5E6D3',
        navy: '#14213D',
        gold: '#FFD700',
        'gold-light': '#FFE55C',
        burgundy: '#800020',
        'burgundy-light': '#A30025',
      },
    },
  },
  plugins: [],
};
