import React from "react";
import ReactTableCheckbox from "./ReactTableCheckbox";
import reactTableCheckboxDescription from './ReactTableCheckboxDescription';

export default {
  title: "Tables/Table (Checkboxs in cells)",
  component: ReactTableCheckbox,
  parameters: {
    docs: {
      description: {
        component: reactTableCheckboxDescription,
      },
    },
    docsOnly: true,
  },
  argTypes: {
    disabledCheckboxes: { name: "Set checkbox as disabled (starts at position 0)", control: 'text' },
    defaultCheckedBoxes: { name: "Set checkbox as checked (starts at position 0)", control: 'text' }
  }
};

const Template = (args) => <ReactTableCheckbox {...args} />;

export const TableWithCheckbox = Template.bind({});
TableWithCheckbox.args = {
  disabledCheckboxes: "", // disable checkboxes with these ids
  defaultCheckedBoxes: "" // set checkboxes with these ids as checked by default
};
