import React from "react";
import ReactMultiSelect from "./ReactMultiSelect";
import ReactMultiSelectDescription from "./ReactMultiSelectDescription";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgTypes,
} from '@storybook/blocks';

export default {
  title: "Components/Multi-Select Listbox",
  component: ReactMultiSelect,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Subtitle if needed</Subtitle>
          <Description markdown={ReactMultiSelectDescription} />
          <Primary />
          <ArgTypes story="Multi-Select Listbox" />
        </>
      ),
    },
  },
  argTypes: {
    buttonsPosition: {
      name: "Buttons Position",
      control: {
        type: "radio",
        options: ["top", "bottom"],
      },
      defaultValue: "bottom",
      description: "Choose the position for the buttons",
    },
    interactionMode: {
      name: "Keep or Remove from list",
      control: {
        type: "radio",
        options: ["Retain selected in list", "Remove selected from list"],
      },
      defaultValue: "Keep selected in list",
      description: "Choose the interaction mode for the options",
    },
  },
};

const Template = (args) => <ReactMultiSelect {...args} />;

export const MultiSelectListbox = Template.bind({});
MultiSelectListbox.args = {
  buttonsPosition: "bottom",
  interactionMode: "Keep selected in list",
};

// Standalone documentation page
export const Documentation = () => <ReactMultiSelectDescription />;
Documentation.parameters = {
  docsOnly: true,
};

// Rename the sidebar label for this story
MultiSelectListbox.storyName = "Multi-Select Listbox Build";