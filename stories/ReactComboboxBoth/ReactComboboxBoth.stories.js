import React from 'react';
import ReactComboboxBoth from './ReactComboboxBoth';
import reactComboboxBothDescription from './ReactComboboxBothDescription';

export default {
  title: 'Components/React Combobox (Both)',
  component: ReactComboboxBoth,
  parameters: {
      docs: {
          description: {
              component: reactComboboxBothDescription,
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

const Template = (args) => <ReactComboboxBoth {...args} />;

export const ARIAComboboxBoth = Template.bind({});
ARIAComboboxBoth.storyName = "Combobox (Both)";
ARIAComboboxBoth.args = {
    showHelpText: 'Yes', 
};