/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.vue", // Main app entry point
    "./pages/**/*.{vue,js}", // All pages
    "./components/**/*.{vue,js}", // All components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
