module.exports = {
    purge: [
        // This is not present inside the default configuration
        // but it's good to build your production application
        // Read more about this here: https://tailwindcss.com/docs/installation#building-your-css
        './pages/**/*.@(js|jsx|ts|tsx)',
        './common/**/*.@(js|jsx|ts|tsx)'
    ],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                palette: {
                    0: '#FAF8D4',
                    50: '#EBDCCB',
                    100: '#C3BAAA',
                    150: '#91818A',
                    200: '#B2A3B5'
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}