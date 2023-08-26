// .storybook/preview.js

/** @type { import('@storybook/react').Preview } */

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
      order: ['Accessible Components Library', 'Building Blocks', 'Components', 'Combined Components', 'Native HTML Components', 'Tables', 'Experimental'],
    },
  },
};