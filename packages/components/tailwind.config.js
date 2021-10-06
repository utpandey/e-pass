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
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}