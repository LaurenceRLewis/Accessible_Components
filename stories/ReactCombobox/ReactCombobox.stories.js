import React from 'react';
import ReactCombobox from './ReactCombobox';
import reactComboboxDescription from './ReactComboboxDescription';

export default {
    title: 'Components/React Combobox',
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
        isTechnology: {
            options: ['HTML', 'ARIA'],
            control: { type: 'radio' }
        },
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
    isTechnology: 'ARIA',
    showHelpText: 'No', 
};