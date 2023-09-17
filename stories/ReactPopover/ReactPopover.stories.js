import React from "react";
import Popover from "./ReactPopover";
import popoverDescription from './ReactPopover.Description';

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
      name: 'Aria-label value',
      control: "text",
      defaultValue: "",
    },
    useArrowKeys: {
      name: 'Use arrow key navigation',
      control: "boolean",
      defaultValue: false,
    },
    dismissOnClickOutside: {
      name: 'Dismiss on outside click',
      control: "boolean",
      defaultValue: false,
    },
    contentType: { // New prop
      name: 'Content Type',
      control: "select",  // Dropdown select control
      options: [  // These options will appear in the dropdown
        'ActiveContentOnly',
        'HelpWithReferenceLink',
        'StaticContentOnly'
      ],
      defaultValue: 'ActiveContentOnly',  // Default value
    }
  },
};

const Template = (args) => <Popover {...args} />;

export const DefaultPopover = Template.bind({});

DefaultPopover.args = {
  withRole: false,
  ariaLabel: "",
  useArrowKeys: false,
  dismissOnClickOutside: true,
  contentType: 'HelpWithReferenceLink',  // Default value
};