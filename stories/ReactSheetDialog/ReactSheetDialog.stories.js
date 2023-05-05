import React from 'react';
import ReactSheetDialog from './ReactSheetDialog';

export default {
  title: 'Components/ReactSheetDialog',
  component: ReactSheetDialog,
  argTypes: {
    modal: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
  },
};

const Template = (args) => <ReactSheetDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  modal: true,
};
