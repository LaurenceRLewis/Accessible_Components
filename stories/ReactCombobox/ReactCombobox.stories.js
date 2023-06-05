import React from 'react';
import ReactCombobox from './ReactCombobox';
import reactComboboxDescription from './ReactComboboxDescription';

export default {
    title: 'Work in progress/React Combobox (List)',
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
        showHelpText: {
            options: ['Yes', 'No'],
            control: { type: 'radio' }
        },
    }
};

const Template = (args) => <ReactCombobox {...args} />;

export const ARIACombobox = Template.bind({});
ARIACombobox.storyName = "Combobox";
ARIACombobox.args = {
    showHelpText: 'No', 
};
