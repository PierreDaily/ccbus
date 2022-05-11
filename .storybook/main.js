const { mergeConfig } = require('vite');
const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "storybook-builder-vite"
  },
  async viteFinal(config, { configType }) {
    // return the customized config
    console.log(config)
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