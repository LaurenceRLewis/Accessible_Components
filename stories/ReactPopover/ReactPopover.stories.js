import React from "react";
import Popover from "./ReactPopover";
import popoverDescription from "./ReactPopover.Description";

export default {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: popoverDescription,
      },
    },
    docsOnly: true,
  },
  argTypes: {
    withRole: {
      name: 'Include role="region"',
      control: "boolean",
      defaultValue: false,
    },
    ariaLabel: {
      name: "Aria-label value",
      control: "text",
      defaultValue: "",
    },
    nameAriaLabelledBy: {
      name: "Aria-labelledby enabled",
      control: "boolean",
      defaultValue: false,
    },
    useArrowKeys: {
      name: "Use arrow key navigation",
      control: "boolean",
      defaultValue: false,
    },
    dismissOnClickOutside: {
      name: "Dismiss on outside click",
      control: "boolean",
      defaultValue: true,
    },
    contentType: {
      name: "Content Type",
      control: "select",
      options: ["Menu", "Help with Reference link", "Content only (tooltip)"],
      defaultValue: "Help with Reference link",
    },
  },
};

const Template = (args) => <Popover {...args} />;

export const PopoverComponent = Template.bind({});

PopoverComponent.args = {
  withRole: true,
  ariaLabel: "",
  nameAriaLabelledBy: true,
  useArrowKeys: false,
  dismissOnClickOutside: true,
  contentType: "Help with Reference link", // Default value
};
