import React from 'react';
import NativeDatePicker from './NativeDatePicker';
import NativeDatePickerDescription from './NativeDatePickerDescription';

export default {
  title: 'Native HTML Components/HTML Datepicker',
  component: NativeDatePicker,
  parameters: {
    docs: {
      description: {
        component: NativeDatePickerDescription,
      },
    },
  },
  argTypes: {
    mode: {
      name: 'Input Mode',
      control: { type: 'radio' },
      options: ['date', 'datetime'],
      defaultValue: 'date',
      description: 'Choose between date only or date and time input.',
    },
  },
};

const Template = (args) => <NativeDatePicker {...args} />;

export const HTMLDatepicker = Template.bind({});
HTMLDatepicker.args = {
  mode: 'date',
};
