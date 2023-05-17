import React from 'react';
import ReactCombobox from './ReactCombobox';
import reactComboboxDescription from './ReactComboboxDescription';

export default {
    title: 'Work in progress/ReactCombobox',
    component: ReactCombobox,
    parameters: {
        docs: {
          description: {
            component: reactComboboxDescription,
          },
        },
        docsOnly: true,
      },
    argTypes: {
      autocomplete: {
        options: ['list'],
        control: { type: 'radio' }
      }
    },
    args: {
      autocomplete: 'list'
    }
  };

const Template = (args) => <ReactCombobox {...args} />;

export const ListDefault = Template.bind({}); // Name changed to "ListDefault"
ListDefault.storyName = "List (Default)"; // This will change the display name in the Storybook UI