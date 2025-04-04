import React from "react";
import ReactComboboxReadonly from "./ReactComboboxReadonly";
import ReactComboboxReadonlyDescription from "./ReactComboboxReadonlyDescription";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
} from '@storybook/blocks';

export default {
  title: "Experimental/Combobox (Readonly)",
  component: ReactComboboxReadonly,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Subtitle if needed</Subtitle>
          <Description markdown={ReactComboboxReadonlyDescription} />
          <Primary />
          <ArgsTable story="Combobox (Readonly)" />
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
    ariaMultiselectable: {
      name: "Multiselectable",
      control: {
        type: "boolean",
      },
      defaultValue: true,
      description: "Allow multiple options to be selected at once",
    },
  },
};

const Template = (args) => (
  <ReactComboboxReadonly
    {...args}
    ariaMultiselectable={args.ariaMultiselectable}
  />
);

export const ComboboxReadonly = Template.bind({});
ComboboxReadonly.args = {
  buttonsPosition: "bottom",
  interactionMode: "Keep selected in list",
  ariaMultiselectable: true,
};

// Standalone documentation page
export const Documentation = () => <ReactComboboxReadonlyDescription />;
Documentation.parameters = {
  docsOnly: true,
};

// Rename the sidebar label for this story
ComboboxReadonly.storyName = "Combobox (Readonly) Build";