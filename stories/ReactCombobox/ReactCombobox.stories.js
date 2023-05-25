import React from 'react';
import ReactCombobox from './ReactCombobox';
import reactComboboxDescription from './ReactComboboxDescription';

export default {
    title: 'Work in progress/React Combobox',
    component: ReactCombobox,
    parameters: {
        docs: {
          description: {
            component: reactComboboxDescription,
          },
        },
        docsOnly: true,
      },
  };

const Template = (args) => <ReactCombobox {...args} />;

export const Combobox = Template.bind({});
Combobox.storyName = "Combobox";