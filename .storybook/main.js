const path = require('path');
const { mergeConfig } = require('vite');
module.exports = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/vue3-vite",
    "options": {}
  },
  "docs": {
    "autodocs": "tag"
  },
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      resolve: {
        alias: { foo: 'bar',
        // "@lib/*": ["app/lib/*"]
        // '@': "D:\\Documents\\ccbus-ts\\src\\",
        "@/assets": path.resolve(__dirname, "..", "src", "assets")
        // '@': path.join(config.root, 'src') },
        // '@': path.join(__dirname) },
      },}
    });
  },
}