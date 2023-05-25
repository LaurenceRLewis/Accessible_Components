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
        isTechnology: {
            options: ['HTML', 'ARIA'],
            control: { type: 'radio' }
        },
    }
};

const Template = (args) => <ReactCombobox {...args} />;

export const ARIACombobox = Template.bind({});
ARIACombobox.storyName = "Combobox";
ARIACombobox.args = {
    isTechnology: 'ARIA',
};

// export const HTMLDatalistCombobox = Template.bind({});
// HTMLDatalistCombobox.storyName = "HTML Datalist Combobox";
// HTMLDatalistCombobox.args = {
//     isTechnology: 'HTML',
// };
