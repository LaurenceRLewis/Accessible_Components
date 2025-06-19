import React from "react";
import ReactCombobox from "./ReactCombobox";
import ReactComboboxDescription from "./ReactComboboxDescription";
import { Title, Subtitle, Description, Primary, ArgTypes } from "@storybook/blocks";

export default {
  title: "Components/Combobox (List)",
  component: ReactCombobox,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>ARIA Combobox with aria-autocomplete="list"</Subtitle>
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
      description: "Display help text below the label",
    },
    showToggleButton: {
      name: "Show toggle button",
      control: "boolean",
      defaultValue: true,
      description: "Toggle button to show/hide the options",
    },
    showAllOptionsAfterSelection: {
      name: "Show all options after selection",
      control: "radio",
      options: ["Yes", "No"],
      defaultValue: "Yes",
      description:
        "If Yes, opening the listbox after selecting shows all options again, otherwise shows only the selected value.",
    },
  },
};

const Template = (args) => <ReactCombobox {...args} />;

export const ComboboxList = Template.bind({});
ComboboxList.storyName = "Combobox (List)";
ComboboxList.args = {
  showHelpText: "No",
  showToggleButton: true,
  showAllOptionsAfterSelection: "Yes",
};

export const Documentation = () => <ReactComboboxDescription />;
Documentation.parameters = { docsOnly: true };
