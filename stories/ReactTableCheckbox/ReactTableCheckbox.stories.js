import React from "react";
import ReactTableCheckbox from "./ReactTableCheckbox";
import reactTableCheckboxDescription from './ReactTableCheckboxDescription';

export default {
  title: "Tables/ReactTableCheckbox",
  component: ReactTableCheckbox,
  parameters: {
    docs: {
      description: {
        component: reactTableCheckboxDescription,
      },
    },
    docsOnly: true,
  },
};

const Template = (args) => <ReactTableCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {};
