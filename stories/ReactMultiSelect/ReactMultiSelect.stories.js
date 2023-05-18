import React from 'react';
//import { Description } from '@storybook/addon-docs/blocks';
import ReactMultiSelect from './ReactMultiSelect';
import reactMultiSelectDescription from './ReactMultiSelectDescription';

export default {
  title: 'Work in progress/React Multi-Select',
  component: ReactMultiSelect,
  parameters: {
    docs: {
      description: {
        component: reactMultiSelectDescription,
      },
    },
    docsOnly: true,
  },
  argTypes: {
    selectionModel: {
      control: {
        type: 'radio',
        options: ['default', 'alternative']
      },
      defaultValue: 'default',
      description: 'Choose the selection model for the listbox',
    },
  },
};

const Template = (args) => <ReactMultiSelect {...args} />;

export const Primary = Template.bind({});