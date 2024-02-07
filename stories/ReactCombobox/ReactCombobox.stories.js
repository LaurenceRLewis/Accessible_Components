import React from 'react';
import ReactComboboxList from './ReactCombobox';
import reactComboboxDescription from './ReactComboboxDescription';

export default {
    title: 'Components/Combobox (List)',
    component: ReactComboboxList,
    parameters: {
        docs: {
            description: {
                component: reactComboboxDescription,
            },
        },
        docsOnly: true,
    },
    argTypes: {
        showHelpText: {
            name: 'Show help text',
            control: "radio",
            options: ['Yes', 'No'],
            defaultValue: 'No',
            description: "Display help text",
          },
          showToggleButton: {
            name: 'Show toggle button',
            control: 'boolean',
            defaultValue: true,
            description: "Toggle the visibility of the button",
        },
    }
};

const Template = (args) => <ReactComboboxList {...args} />;

export const ComboboxList = Template.bind({});
ComboboxList.storyName = "Combobox (List)";
ComboboxList.args = {
    showHelpText: 'No', 
    showToggleButton: true,
};
