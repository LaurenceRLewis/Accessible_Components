import React from "react";
import ReactTableCheckbox from "./ReactTableCheckbox";
import reactTableCheckboxDescription from './ReactTableCheckboxDescription';

export default {
  title: "Tables/React Table with Checkbox",
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
    disabledCheckboxes: { control: 'text' },
    defaultCheckedBoxes: { control: 'text' }
  }
};

const Template = (args) => <ReactTableCheckbox {...args} />;

export const TableWithCheckbox = Template.bind({});
TableWithCheckbox.args = {
  disabledCheckboxes: "1", // disable checkboxes with these ids
  defaultCheckedBoxes: "1,2" // set checkboxes with these ids as checked by default
};
