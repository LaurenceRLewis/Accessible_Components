import React from "react";
import ReactComboboxDataList from "./ReactComboboxDataList";
import ReactComboboxDataListDescription from "./ReactComboboxDataListDescription";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
} from '@storybook/blocks';

export default {
  title: "Native HTML Components/Combobox (HTML Datalist)",
  component: ReactComboboxDataList,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Subtitle if needed</Subtitle>
          <Description markdown={ReactComboboxDataListDescription} />
          <Primary />
          <ArgsTable story="Combobox (Both)" />
        </>
      ),
    },
  },
  argTypes: {
    showHelpText: {
      name: "Help text",
      options: ["Yes", "No"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <ReactComboboxDataList {...args} />;

export const HTMLComboboxDataList = Template.bind({});
HTMLComboboxDataList.storyName = "Combobox (HTML Datalist)";
HTMLComboboxDataList.args = {
  showHelpText: "No",
};

// Standalone documentation page
export const Documentation = () => <ReactComboboxDataListDescription />;
Documentation.parameters = {
  docsOnly: true,
};

// Rename the sidebar label for this story
HTMLComboboxDataList.storyName = "Combobox (HTML Datalist) Build";