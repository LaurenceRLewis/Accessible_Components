const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-docs" // 🛠 fix: remove stray apostrophe here
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: false // ✅ enable Docs support, disable automatic tables
  },
  typescript: {
    reactDocgen: "react-docgen-typescript"
  },
  webpackFinal: async (config) => {
    config.module.rules = config.module.rules.filter(
      (rule) => !(rule.test && rule.test.toString().includes('mdx'))
    );
  
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              [
                require.resolve('@babel/preset-react'),
                { runtime: 'automatic' },
              ],
            ],
          },
        },
        {
          loader: require.resolve('@mdx-js/loader'),
          options: {
            jsx: true,
          },
        },
      ],
    });

    return config;
  }
};

export default config;
