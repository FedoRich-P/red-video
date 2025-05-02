module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: [
        'btn-primary',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#ad2528',
                bg: '#191b28',
                textColor: '#fff',
                border: '#2a3439'
            }
        },
    },
    plugins: [],
}
