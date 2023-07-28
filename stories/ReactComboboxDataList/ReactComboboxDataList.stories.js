import React from 'react';
import ReactComboboxDataList from './ReactComboboxDataList';
import reactComboboxDataListDescription from './ReactComboboxDataListDescription';

export default {
    title: 'Native HTML Components/Combobox (HTML Datalist)',
    component: ReactComboboxDataList,
    parameters: {
        docs: {
            description: {
                component: reactComboboxDataListDescription,
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

const Template = (args) => <ReactComboboxDataList {...args} />;

export const HTMLComboboxDataList = Template.bind({});
HTMLComboboxDataList.storyName = "Combobox (HTML Datalist)";
HTMLComboboxDataList.args = {
    showHelpText: 'No', 
};