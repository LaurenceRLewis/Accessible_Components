import React from 'react';
import ReactSheetDialog from './ReactSheetDialog';
import reactSheetDialogDescription from './ReactSheetDialogDescription';

export default {
  title: 'Components/ReactSheetDialog',
  component: ReactSheetDialog,
  parameters: {
    docs: {
      description: {
        component: reactSheetDialogDescription,
      },
    },
    docsOnly: true,
  },
  argTypes: {
    modal: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    dialogType: {
      control: { type: "select" },
      options: {
        'Standard Modal Dialog': 'standard',
        'Sheet Dialog': "sheet",
      },
      defaultValue: "sheet",
    },
    
  },
};

const Template = (args) => <ReactSheetDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  modal: true,
  dialogType: 'sheet',
};