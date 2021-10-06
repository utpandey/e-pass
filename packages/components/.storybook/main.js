module.exports = {
    "stories": [
        "../common/components/**/*.stories.mdx",
        "../common/components/**/*.stories.@(js|jsx|ts|tsx)",
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)",
        "../pages/*.stories.mdx",
        "../pages/*.stories.js",
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        '@storybook/addon-viewport',
        '@storybook/addon-centered',
        '@storybook/addon-a11y',
        '@storybook/addon-knobs/register',
        {
            name: '@storybook/addon-storysource',
            options: {
                loaderOptions: {
                    injectStoryParameters: true,
                    prettierConfig: { printWidth: 80, singleQuote: false }
                },
            }
        }
    ],
    webpackFinal: async(config) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "postcss-loader",
                // Add the sass loader to process scss files
                "sass-loader",
            ],
        })

        return config
    },
}