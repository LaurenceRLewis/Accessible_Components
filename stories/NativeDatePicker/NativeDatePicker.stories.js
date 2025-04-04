import React from 'react';
import NativeDatePicker from './NativeDatePicker';
import NativeDatePickerDescription from './NativeDatePickerDescription';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgTypes,
} from '@storybook/blocks';

export default {
  title: 'Native HTML Components/HTML Datepicker',
  component: NativeDatePicker,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Native HTML input with locale-aware formatting</Subtitle>
          <Description markdown={NativeDatePickerDescription} />
          <Primary />
          <ArgTypes story="HTMLDatepicker" />
        </>
      ),
    },
  },
  argTypes: {
    mode: {
      name: 'Input Mode',
      control: { type: 'radio' },
      options: ['date', 'datetime'],
      description: 'Choose between date only or date and time input.',
    },
  },
};

const Template = (args) => <NativeDatePicker {...args} />;

export const HTMLDatepicker = Template.bind({});
HTMLDatepicker.args = {
  mode: 'date',
};

// Standalone documentation page
export const Documentation = () => <NativeDatePickerDescription />;
Documentation.parameters = {
  docsOnly: true,
};

// Rename the sidebar label for this story
HTMLDatepicker.storyName = "HTML Datepicker Build";