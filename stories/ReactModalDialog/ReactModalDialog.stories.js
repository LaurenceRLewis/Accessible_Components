import React from 'react';
import ReactModalDialog from './ReactModalDialog';
import reactModalDialogDescription from './ReactModalDialogDescription';

export default {
  title: 'Components/Modal Dialog (ARIA)',
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
      name: 'Modal or Non-modal',
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    dialogType: {
      name: 'Standard modal or side sheet',
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