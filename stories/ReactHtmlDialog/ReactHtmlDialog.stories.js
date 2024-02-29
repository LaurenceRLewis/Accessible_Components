import React from "react";
import { useState, useRef } from 'react';
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
      name: "Use aria-modal",
      options: ["true", "false", "remove"],
      control: { type: "radio" },
    },
    ariaHidden: {
      name: "Set aria-hidden true on background elements",
      options: ["true", "false", "remove"],
      control: { type: "radio" },
    },
    inert: {
      name: "Set inert on background elements",
      options: ["Yes", "No"],
      control: { type: "radio" },
    },
    focusManagement: {
      name: "Focus Management",
      options: ["Focus is not set", "focus is set to the new div container", "focus is set to the dialog heading", "focus is set to the first focusable element inside the dialog"],
      control: { type: "select" },
      table: {
        disable: false,
      }
    },
    useAutoFocus: {
      name: "Use Autofocus Attribute",
      options: [true, false],
      control: { type: "boolean" },
      table: {
        disable: false,
      }
    },
  },
};

export const Dialog = ({ showModal, ariaModal, ariaHidden, inert, focusManagement, useAutoFocus }) => {
  const [open, setOpen] = useState(false);
  const triggerButtonRef = useRef(null); // Add this line

  return (
      <>
          <button ref={triggerButtonRef} onClick={() => setOpen(true)} className={styles.openDialog}>
              Open Dialog
          </button>
          <ReactHtmlDialog
              open={open}
              setOpen={setOpen}
              showModal={showModal}
              heading="Dialog Heading"
              ariaModal={ariaModal}
              ariaHidden={ariaHidden}
              inert={inert}
              focusManagement={focusManagement}
              useAutoFocus={useAutoFocus}
              triggerButtonRef={triggerButtonRef} // Pass the ref here
          >
              Dialog content here
          </ReactHtmlDialog>
      </>
  );
};

// Default story arguments
Dialog.args = {
  showModal: "Yes",
  focusManagement: "Focus is not set", 
  useAutoFocus: false,
  ariaModal: "remove",
  ariaHidden: "remove",
  inert: "No",
};