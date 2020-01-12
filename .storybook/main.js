module.exports = {
    stories: ['../components/**/*.stories.(js|mdx)'],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-knobs',
        '@storybook/addon-viewport/register',
        '@storybook/addon-actions/register',
        '@storybook/addon-links/register'
    ]
}