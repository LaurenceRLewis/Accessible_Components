// ReactHtmlDialog.stories.js
import React from 'react';
import { useState } from 'react';
import ReactHtmlDialog from './ReactHtmlDialog';
import styles from './ReactHtmlDialog.module.css';

export default {
  title: 'Native HTML Components/React HTML Dialog',
  component: ReactHtmlDialog,
  argTypes: {
    showModal: {
      options: ['Yes', 'No'],
      control: { type: 'radio' },
    },
    ariaHidden: {
      options: ['true', 'false', 'remove'],
      control: { type: 'radio' },
    },
    inert: {
      options: ['Yes', 'No'],
      control: { type: 'radio' },
    },
  },
};

export const Default = ({ showModal, ariaHidden, inert }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Dialog</button>
      <ReactHtmlDialog open={open} showModal={showModal} ariaHidden={ariaHidden} inert={inert} heading="Dialog Heading">
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
  ariaHidden: 'remove',
  inert: 'No',
};