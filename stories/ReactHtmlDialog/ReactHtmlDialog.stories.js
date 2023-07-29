import React from "react";
import { useState } from "react";
import ReactHtmlDialog from "./ReactHtmlDialog";
import styles from "./ReactHtmlDialog.module.css";
import ReactHtmlDialogDescription from "./ReactHtmlDialogDescription";

// Storybook configuration
export default {
  title: "Native HTML Components/Modal Dialog (HTML)",
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
      name: "Modal or non-modal",
      options: ["Yes", "No"],
      control: { type: "radio" },
    },
    ariaModal: {
      name: "Use aria-modal true",
      options: ["true", "false", "remove"],
      control: { type: "radio" },
    },
    ariaHidden: {
      name: "Set aria-hidden true on background elements",
      options: ["true", "false", "remove"],
      control: { type: "radio" },
    },
    inert: {
      name:"Set inert on background elements",
      options: ["Yes", "No"],
      control: { type: "radio" },
    },
  },
};

// Default story
export const Dialog = ({ showModal, ariaModal, ariaHidden, inert }) => {
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
Dialog.args = {
  showModal: "Yes",
  ariaModal: "remove",
  ariaHidden: "remove",
  inert: "No",
};
