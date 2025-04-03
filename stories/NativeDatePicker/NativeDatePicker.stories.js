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

  // Commented-out props
  /*
  argTypes: {
    timeZone: {
      name: 'Time Zone',
      control: {
        type: 'select',
      },
      options: {
        'Australia - Queensland': 'Australia/Brisbane',
        'Australia - NSW': 'Australia/Sydney',
        'Australia - Victoria': 'Australia/Melbourne',
        'Australia - SA': 'Australia/Adelaide',
        'Australia - WA': 'Australia/Perth',
        'Australia - Tasmania': 'Australia/Hobart',
        'Australia - NT': 'Australia/Darwin',
        'USA - East Coast': 'America/New_York',
        'USA - West Coast': 'America/Los_Angeles',
      },
      defaultValue: 'Australia/Brisbane',
      description: 'IANA time zone used for formatting.',
    },
    locale: {
      name: 'Locale',
      control: {
        type: 'select',
      },
      options: {
        'English (Australia)': 'en-AU',
        'English (US)': 'en-US',
        'French (France)': 'fr-FR',
        'German': 'de-DE',
        'Chinese': 'zh-CN',
        'Japanese': 'ja-JP',
        'Spanish': 'es-ES',
      },
      defaultValue: 'en-AU',
      description: 'Locale used for formatting date and time.',
    },
  },
  */
};

const Template = (args) => <NativeDatePicker {...args} />;

export const HTMLDatepicker = Template.bind({});
HTMLDatepicker.args = {
  // timeZone: 'Australia/Brisbane',
  // locale: 'en-AU',
};
