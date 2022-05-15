module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'black-bg': '#20222e',
                'light-green': '#3ccf91',
                "light-grey": "hsla(0, 0%, 100%, .8)"
            },
        },
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            sen: ['Sen', 'sans-serif']
        }
    },
    plugins: [],
}