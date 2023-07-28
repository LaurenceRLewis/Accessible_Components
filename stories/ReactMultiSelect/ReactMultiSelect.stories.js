import React from 'react';
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
    buttonsPosition: {
      name: 'Buttons Position',
      control: {
        type: 'radio',
        options: ['top', 'bottom']
      },
      defaultValue: 'bottom',
      description: 'Choose the position for the buttons',
    },
    interactionMode: {
      name: 'Keep or Remove from list',
      control: {
        type: 'radio',
        options: ['Retain selected in list', 'Remove selected from list']
      },
      defaultValue: 'Keep selected in list',
      description: 'Choose the interaction mode for the options',
    },
  },
};

const Template = (args) => <ReactMultiSelect {...args} />;

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  buttonsPosition: 'bottom',
  interactionMode: 'Keep selected in list',
};