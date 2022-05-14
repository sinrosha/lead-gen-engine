module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'black-bg': '#20222e',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      sen: ['Sen', 'sans-serif']
    }
  },
  plugins: [],
}
