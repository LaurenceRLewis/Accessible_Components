import React from 'react';
import ReactGrid from './ReactGrid';
import ReactGridDescription from './ReactGridDescription';

export default {
  title: 'Work in progress/ReactGrid',
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

export const Default = Template.bind({});
Default.args = {
  // Pass default props to your component here if any
};