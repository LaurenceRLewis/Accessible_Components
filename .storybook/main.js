// main.js
const config = {
  stories: ["../stories/**/*.mdx", "../stories/**/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "@storybook/addon-mdx-gfm",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // Add this custom option
  options: {
    menu: [
      {
        type: 'section',
        title: 'Introduction',
        expanded: true,
      },
      {
        type: 'section',
        title: 'Components',
      },
    ],
  },
};

export default config;
