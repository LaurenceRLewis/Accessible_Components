import React from "react";
import ReactComboboxBoth from "./ReactComboboxBoth";
import ReactComboboxBothDescription from "./ReactComboboxBothDescription";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
} from '@storybook/blocks';

export default {
  title: "Components/Combobox (Both)",
  component: ReactComboboxBoth,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Subtitle if needed</Subtitle>
          <Description markdown={ReactComboboxBothDescription} />
          <Primary />
          <ArgsTable story="Combobox (Both)" />
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
  },
};

const Template = (args) => <ReactComboboxBoth {...args} />;

export const ARIAComboboxBoth = Template.bind({});
ARIAComboboxBoth.storyName = "Combobox (Both)";
ARIAComboboxBoth.args = {
  showHelpText: "Yes",
};

// Standalone documentation page
export const Documentation = () => <ReactComboboxBothDescription />;
Documentation.parameters = {
  docsOnly: true,
};

// Rename the sidebar label for this story
ARIAComboboxBoth.storyName = "Combobox (Both) Build";