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
            options: ['Yes', 'No'],
            control: { type: 'radio' }
        },
    }
};

const Template = (args) => <ReactComboboxList {...args} />;

export const ComboboxList = Template.bind({});
ComboboxList.storyName = "Combobox (List)";
ComboboxList.args = {
    showHelpText: 'No', 
};
