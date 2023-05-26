import React from 'react';
import ReactSheetDialog from './ReactSheetDialog';
import reactSheetDialogDescription from './ReactSheetDialogDescription';

export default {
  title: 'Components/React Modal Dialog',
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
      defaultValue: "standard",
    },
    
  },
};

const Template = (args) => <ReactSheetDialog {...args} />;

export const ModalDialog = Template.bind({});
ModalDialog.args = {
  modal: true,
  dialogType: 'standard',
};