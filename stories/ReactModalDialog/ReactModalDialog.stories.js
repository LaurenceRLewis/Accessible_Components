import React from 'react';
import ReactModalDialog from './ReactModalDialog';
import reactModalDialogDescription from './ReactModalDialogDescription';

export default {
  title: 'Components/React Modal Dialog',
  component: ReactModalDialog,
  parameters: {
    docs: {
      description: {
        component: reactModalDialogDescription,
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

const Template = (args) => <ReactModalDialog {...args} />;

export const ModalDialog = Template.bind({});
ModalDialog.args = {
  modal: true,
  dialogType: 'standard',
};