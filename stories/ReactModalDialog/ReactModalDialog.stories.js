import React from "react";
import ReactModalDialog from "./ReactModalDialog";
import ReactModalDialogDescription from "./ReactModalDialogDescription";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgTypes,
} from '@storybook/blocks';

export default {
  title: "Components/Modal Dialog (ARIA)",
  component: ReactModalDialog,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Subtitle if needed</Subtitle>
          <Description markdown={ReactModalDialogDescription} />
          <Primary />
          <ArgTypes story="Modal Dialog (ARIA)" />
        </>
      ),
    },
  },
  argTypes: {
    modal: {
      name: "Modal or Non-modal",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    dialogType: {
      name: "Standard modal or side sheet",
      control: { type: "select" },
      options: {
        "Standard Modal Dialog": "standard",
        "Sheet Dialog": "sheet",
      },
      defaultValue: "standard",
    },
    backgroundAttribute: {
      name: "aria-label or inert",
      options: ["aria-hidden", "inert"],
      control: { type: "radio" },
      defaultValue: "aria-hidden",
      description:
        "Choose method to hide background elements from screen reader users",
    },
  },
};

const Template = (args) => <ReactModalDialog {...args} />;

export const ModalDialog = Template.bind({});
ModalDialog.args = {
  modal: true,
  dialogType: "standard",
  backgroundAttribute: "aria-hidden",
};

// Standalone documentation page
export const Documentation = () => <ReactModalDialogDescription />;
Documentation.parameters = {
  docsOnly: true,
};

// Rename the sidebar label for this story
ModalDialog.storyName = "Modal Dialog (ARIA) Build";