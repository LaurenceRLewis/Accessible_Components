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
    argTypes: {
        version: {
            options: ['HTML', 'ARIA'],
            control: { type: 'radio' }
        },
        autocomplete: {
            options: ['list', 'both'],
            control: { type: 'radio' }
        }
    }
};

const Template = (args) => <ReactCombobox {...args} />;

export const Combobox = Template.bind({});
Combobox.args = {
    version: 'HTML',
    autocomplete: 'list'
};
Combobox.storyName = "Datalist";

export const AriaCombobox = Template.bind({});
AriaCombobox.args = {
    version: 'ARIA',
    autocomplete: 'both'
};
AriaCombobox.storyName = "ARIA Combobox";