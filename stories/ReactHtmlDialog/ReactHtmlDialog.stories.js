import React from 'react';
import { useState } from 'react';
import ReactHtmlDialog from './ReactHtmlDialog';
import styles from './ReactHtmlDialog.module.css';
import ReactHtmlDialogDescription from "./ReactHtmlDialogDescription";

export default {
  title: 'Native HTML Components/React HTML Dialog',
  component: ReactHtmlDialog,
  parameters: {
    docs: {
      description: {
        component: ReactHtmlDialogDescription,
      },
    },
    docsOnly: true,
  },
  argTypes: {
    showModal: {
      options: ['Yes', 'No'],
      control: { type: 'radio' },
    },
  },
};

export const Default = ({showModal}) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Dialog</button>
      <ReactHtmlDialog open={open} showModal={showModal} heading="Dialog Heading">
        Dialog content here
        <div className={styles.close}>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      </ReactHtmlDialog>
    </div>
  );
};

Default.args = {
  showModal: 'Yes',
};