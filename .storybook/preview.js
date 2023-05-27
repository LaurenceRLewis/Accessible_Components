/** @type { import('@storybook/react').Preview } */

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const parameters = {
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Introduction', 'Components', 'Tables'],
    },
  },
};

export default preview;
