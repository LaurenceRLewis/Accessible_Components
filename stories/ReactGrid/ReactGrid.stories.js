import React from 'react';
import ReactGrid from './ReactGrid';
import ReactGridDescription from './ReactGridDescription';

export default {
  title: 'Components/Grid',
  component: ReactGrid,
  parameters: {
    docs: {
      description: {
        component: ReactGridDescription,
      },
    },
    docsOnly: true,
  },
};

const Template = (args) => <ReactGrid {...args} />;

export const Grid = Template.bind({});
Grid.args = {
  // Pass default props to your component here if any
};