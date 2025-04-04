import React from "react";
import { useState, useRef } from "react";
import ReactHtmlDialog from "./ReactHtmlDialog";
import styles from "./ReactHtmlDialog.module.css";
import ReactHtmlDialogDescription from "./ReactHtmlDialogDescription";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgTypes,
} from '@storybook/blocks';

// Storybook configuration
export default {
  title: "Native HTML Components/Modal Dialog (HTML)",
  component: ReactHtmlDialog,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Subtitle if needed</Subtitle>
          <Description markdown={ReactHtmlDialogDescription} />
          <Primary />
          <ArgTypes story="Modal Dialog (HTML)" />
        </>
      ),
    },
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
      options: [
        "Focus is not set",
        "focus is set to the new div container",
        "focus is set to the dialog heading",
        "focus is set to the fake link",
        "focus is set to the close button",
      ],
      control: { type: "select" },
    },
    useAutoFocus: {
      name: "Use Autofocus Attribute",
      options: [true, false],
      control: { type: "boolean" },
      table: {
        disable: false,
      },
    },
  },
};

export const Dialog = ({
  showModal,
  ariaModal,
  ariaHidden,
  inert,
  focusManagement,
  useAutoFocus,
}) => {
  const [open, setOpen] = useState(false);
  const triggerButtonRef = useRef(null);

  return (
    <>
      <button
        ref={triggerButtonRef}
        onClick={() => setOpen(true)}
        className={styles.openDialog}
      >
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
        triggerButtonRef={triggerButtonRef}
      >
        Dialog content here
      </ReactHtmlDialog>
    </>
  );
};

Dialog.args = {
  showModal: "Yes",
  focusManagement: "Focus is not set",
  useAutoFocus: false,
  ariaModal: "remove",
  ariaHidden: "remove",
  inert: "No",
};

// Standalone documentation page
export const Documentation = () => <ReactHtmlDialogDescription />;
Documentation.parameters = {
  docsOnly: true,
};

// Rename the sidebar label for this story
Dialog.storyName = "Modal Dialog (HTML) Build";
