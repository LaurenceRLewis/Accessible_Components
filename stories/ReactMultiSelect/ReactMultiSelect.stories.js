import React from 'react';
import ReactMultiSelect from './ReactMultiSelect';

export default {
  title: 'Components/ReactMultiSelect',
  component: ReactMultiSelect,
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

export const Primary = Template.bind({})
