/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-webpack5-compiler-swc"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: false, // 🛑 Turn off built-in autodocs/mdx parsing
  typescript: {
    reactDocgen: "react-docgen-typescript"
  },
  webpackFinal: async (config) => {
    // Remove any built-in MDX rules
    config.module.rules = config.module.rules.filter(
      (rule) => !(rule.test && rule.test.toString().includes('mdx'))
    );
  
    // Re-add MDX loader with JSX + automatic runtime
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
