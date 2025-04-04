import React from "react";
import ReactSearchTable from "./ReactSearchTable";
import reactSearchTableDescription from "./ReactSearchTableDescription";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
} from '@storybook/blocks';

export default {
  title: "Tables/Table (Search function)",
  component: ReactSearchTable,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Subtitle if needed</Subtitle>
          <Description markdown={ReactSearchTableDescription} />
          <Primary />
          <ArgsTable story="Table (Search function)" />
        </>
      ),
    },
  },
  argTypes: {
    containerRole: {
      name: "Set role on container",
      control: { type: "select" },
      options: {
        "(HTML) No role": undefined,
        "(ARIA) Has role search": "search",
      },
      defaultValue: "search",
    },
    inputType: {
      name: "Set type value",
      control: { type: "select" },
      options: {
        "type=search": "search",
        "type=text": "text",
      },
      defaultValue: "search",
    },
    inputRole: {
      name: "Set role on input",
      control: { type: "select" },
      options: {
        "(HTML) No role": undefined,
        "(ARIA) Has role searchbox": "searchbox",
      },
      defaultValue: undefined,
    },
  },
};

// export const TableWithSearchFunction = (args) => <ReactSearchTable {...args} />;
const Template = (args) => <ReactSearchTable {...args} />;

export const searchTable = Template.bind({});
searchTable.args = {
  inputType: "search",
  containerRole: "search",
  inputRole: undefined,
};

// Standalone documentation page
export const Documentation = () => <ReactSearchTableDescription />;
Documentation.parameters = {
  docsOnly: true,
};

// Rename the sidebar label for this story
searchTable.storyName = "Table (Search function) Build";