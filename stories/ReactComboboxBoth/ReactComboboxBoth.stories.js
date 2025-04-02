import React from "react";
import ReactComboboxBoth from "./ReactComboboxBoth";
import reactComboboxBothDescription from "./ReactComboboxBothDescription";

export default {
  title: "Components/Combobox (Both)",
  component: ReactComboboxBoth,
  parameters: {
    docs: {
      description: {
        component: reactComboboxBothDescription,
      },
    },
    docsOnly: true,
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
