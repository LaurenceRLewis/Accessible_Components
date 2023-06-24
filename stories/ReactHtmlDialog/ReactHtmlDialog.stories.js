import React from "react";
import { useState } from "react";
import ReactHtmlDialog from "./ReactHtmlDialog";
import styles from "./ReactHtmlDialog.module.css";
import ReactHtmlDialogDescription from "./ReactHtmlDialogDescription";

// Storybook configuration
export default {
  title: "Native HTML Components/React HTML Dialog",
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
      options: ["Yes", "No"],
      control: { type: "radio" },
    },
    ariaModal: {
      options: ["true", "false", "remove"],
      control: { type: "radio" },
    },
    ariaHidden: {
      options: ["true", "false", "remove"],
      control: { type: "radio" },
    },
    inert: {
      options: ["Yes", "No"],
      control: { type: "radio" },
    },
  },
};

// Default story
export const Default = ({ showModal, ariaModal, ariaHidden, inert }) => {
  const [open, setOpen] = useState(false);

  // Event handler for opening the dialog
  const handleOpenDialog = () => {
    setOpen(true);
  };

  // Event handler for closing the dialog
  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenDialog} className={styles.openDialog}>Open Dialog</button>
      <ReactHtmlDialog
        open={open}
        showModal={showModal}
        heading="Dialog Heading"
        ariaModal={ariaModal}
        ariaHidden={ariaHidden}
        inert={inert}
      >
        Dialog content here
          <button className={styles.closeButton} onClick={handleCloseDialog}>
            Close
          </button>
      </ReactHtmlDialog>
    </>
  );
};

// Default story arguments
Default.args = {
  showModal: "Yes",
  ariaModal: "remove",
  ariaHidden: "remove",
  inert: "No",
};
