const WindiCSS = require('vite-plugin-windicss');
//const svgrPlugin = require('vite-plugin-svgr');

module.exports = {
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    config.plugins = [
      ...config.plugins,
      // macrosPlugin.default(),
      WindiCSS.default(),
      //svgrPlugin({
      //  svgrOptions: {
      //    icon: true,
      //  },
      //})
    ];

    // return the customized config
    return config;
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "storybook-addon-react-router-v6",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  }
}