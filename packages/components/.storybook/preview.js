import '../styles/globals.scss'

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: {
            order: ['Atoms', ['About'], 'Molecules', ['About'], 'Organisms', ['About']]
        }
    }
}