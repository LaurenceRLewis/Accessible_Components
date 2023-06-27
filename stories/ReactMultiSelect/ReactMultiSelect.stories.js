import React from 'react';
//import { Description } from '@storybook/addon-docs/blocks';
import ReactMultiSelect from './ReactMultiSelect';
import reactMultiSelectDescription from './ReactMultiSelectDescription';

export default {
  title: 'Components/React Multi-Select',
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
    buttonsPosition: {
      control: {
        type: 'radio',
        options: ['top', 'bottom']
      },
      defaultValue: 'bottom',
      description: 'Choose the position for the buttons',
    },
  },
};

const Template = (args) => <ReactMultiSelect {...args} />;

export const MultiSelect = Template.bind({});