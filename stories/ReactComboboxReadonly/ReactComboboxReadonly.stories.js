import React from 'react';
import ReactComboboxReadonly from './ReactComboboxReadonly';
import ReactComboboxReadonlyDescription from './ReactComboboxReadonlyDescription';

export default {
  title: 'Components/Combobox (Readonly)',
  component: ReactComboboxReadonly,
  parameters: {
    docs: {
      description: {
        component: ReactComboboxReadonlyDescription,
      },
    },
    docsOnly: true,
  },
  argTypes: {
    buttonsPosition: {
      name: 'Buttons Position',
      control: {
        type: 'radio',
        options: ['top', 'bottom']
      },
      defaultValue: 'bottom',
      description: 'Choose the position for the buttons',
    },
    interactionMode: {
      name: 'Keep or Remove from list',
      control: {
        type: 'radio',
        options: ['Retain selected in list', 'Remove selected from list']
      },
      defaultValue: 'Keep selected in list',
      description: 'Choose the interaction mode for the options',
    },
    ariaMultiselectable: {
      name: 'Multiselectable',
      control: {
        type: 'boolean'
      },
      defaultValue: true,
      description: 'Allow multiple options to be selected at once',
    },
  },
};

const Template = (args) => <ReactComboboxReadonly {...args} ariaMultiselectable={args.ariaMultiselectable} />;

export const ComboboxReadonly = Template.bind({});
ComboboxReadonly.args = {
  buttonsPosition: 'bottom',
  interactionMode: 'Keep selected in list',
};