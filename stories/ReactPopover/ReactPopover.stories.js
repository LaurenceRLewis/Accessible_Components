import React from "react";
import Popover from "./ReactPopover";
import ReactPopoverDescription from "./ReactPopoverDescription";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
} from '@storybook/blocks';

export default {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Subtitle if needed</Subtitle>
          <Description markdown={ReactPopoverDescription} />
          <Primary />
          <ArgsTable story="Popover" />
        </>
      ),
    },
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

// Standalone documentation page
export const Documentation = () => <ReactPopoverDescription />;
Documentation.parameters = {
  docsOnly: true,
};

// Rename the sidebar label for this story
PopoverComponent.storyName = "Popover Build";