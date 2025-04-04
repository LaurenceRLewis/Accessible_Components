import React from "react";
import ReactComboboxList from "./ReactCombobox";
import ReactComboboxDescription from "./ReactComboboxDescription";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgTypes,
} from '@storybook/blocks';

export default {
  title: "Components/Combobox (List)",
  component: ReactComboboxList,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Subtitle if needed</Subtitle>
          <Description markdown={ReactComboboxDescription} />
          <Primary />
          <ArgTypes story="Combobox (List)" />
        </>
      ),
    },
  },
  argTypes: {
    showHelpText: {
      name: "Show help text",
      control: "radio",
      options: ["Yes", "No"],
      defaultValue: "No",
      description: "Display help text",
    },
    showToggleButton: {
      name: "Show toggle button",
      control: "boolean",
      defaultValue: true,
      description: "Toggle the visibility of the button",
    },
  },
};

const Template = (args) => <ReactComboboxList {...args} />;

export const ComboboxList = Template.bind({});
ComboboxList.storyName = "Combobox (List)";
ComboboxList.args = {
  showHelpText: "No",
  showToggleButton: true,
};

// Standalone documentation page
export const Documentation = () => <ReactComboboxDescription />;
Documentation.parameters = {
  docsOnly: true,
};

// Rename the sidebar label for this story
ComboboxList.storyName = "Combobox (List) Build";