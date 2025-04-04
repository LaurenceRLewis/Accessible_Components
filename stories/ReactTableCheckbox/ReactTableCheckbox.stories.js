import React from "react";
import ReactTableCheckbox from "./ReactTableCheckbox";
import ReactTableCheckboxDescription from "./ReactTableCheckboxDescription";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
} from '@storybook/blocks';

export default {
  title: "Tables/Table (Checkboxs in cells)",
  component: ReactTableCheckbox,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Subtitle if needed</Subtitle>
          <Description markdown={ReactTableCheckboxDescription} />
          <Primary />
          <ArgsTable story="Table (Checkboxs in cells)" />
        </>
      ),
    },
  },
  argTypes: {
    disabledCheckboxes: {
      name: "Set checkbox as disabled (starts at position 0)",
      control: "text",
    },
    defaultCheckedBoxes: {
      name: "Set checkbox as checked (starts at position 0)",
      control: "text",
    },
  },
};

const Template = (args) => <ReactTableCheckbox {...args} />;

export const TableWithCheckbox = Template.bind({});
TableWithCheckbox.args = {
  disabledCheckboxes: "", // disable checkboxes with these ids
  defaultCheckedBoxes: "", // set checkboxes with these ids as checked by default
};

// Standalone documentation page
export const Documentation = () => <ReactTableCheckboxDescription />;
Documentation.parameters = {
  docsOnly: true,
};

// Rename the sidebar label for this story
TableWithCheckbox.storyName = "Table (Checkboxs in cells) Build";