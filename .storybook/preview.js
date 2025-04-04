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
      order: [
        'Accessible Components Library',
        'Building Blocks',
        'Components',
        'Combined Components',
        'Native HTML Components',
        'Tables',
        'Experimental'
      ],
    },
  },
  viewport: {
    viewports: {
      smallMobile: {
        name: 'Small Mobile',
        styles: {
          width: '320px',
          height: '568px',
        },
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      desktopHD: {
        name: 'HD Desktop',
        styles: {
          width: '1440px',
          height: '900px',
        },
      },
    },
    defaultViewport: 'responsive',
  },
};
