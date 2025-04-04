import React from "react";
import ReactTableSortable from "./ReactTableSortable";
import ReactTableSortableDescription from "./ReactTableSortableDescription";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
} from '@storybook/blocks';

export default {
  title: "Tables/Table (Sort function)",
  component: ReactTableSortable,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Subtitle if needed</Subtitle>
          <Description markdown={ReactTableSortableDescription} />
          <Primary />
          <ArgsTable story="Table (Sort function)" />
        </>
      ),
    },
  },
  argTypes: {
    sortable: {
      name: "Enable column sorting",
      control: "select",
      options: ["Sort", "Don't Sort"],
      description: "Enable or disable sorting for columns",
      value: "Sort",
    },
    includeScope: {
      name: "Set scope attribute",
      control: "boolean",
      description: "Include scope for table headers",
      value: true,
    },
    iconVisibility: {
      name: "Persistent sort icon or on hover/focus",
      control: "select",
      options: ["Show icons", "Show on hover / focus"],
      description: "Control visibility of the sorting icons",
      value: "Show on hover / focus",
    },
    customCaptionText: {
      name: "Caption help text",
      control: "text",
      description: "Optional text to be included in table caption",
      value: "Table sorted by, ",
    },
    initialSortColumnID: {
      name: "Initial Sort Column ID",
      control: "number",
      description: "Default column to sort",
      value: 0,
    },
    addRoleStatus: {
      name: "Add the Status Role to the Caption help text.",
      control: "select",
      options: ["Status Role", "No Role"],
      description: "Add role attribute to span",
      value: "No role",
    },
    ariaDescription: {
      name: "Aria description for sortable columns",
      control: "text",
      description: "Description of sortable table columns for screen readers",
      value: "Sortable column",
    },
    includeAriaDescription: {
      name: "Include aria-description",
      control: "boolean",
      description:
        "Toggle whether to include aria-description on sortable buttons",
      value: true, // Default to true
    },
    showDescriptionAll: {
      name: "Show description for all sorting states",
      control: "select",
      options: ["Yes", "No"],
      description:
        "Control whether aria-description is applied only when aria-sort is none or for all sorting actions",
      value: "No", // Default to "No"
    },
  },
};

const Template = (args) => <ReactTableSortable {...args} />;

export const SortableTableColumns = Template.bind({});

SortableTableColumns.args = {
  sortable: "Sort",
  includeScope: true,
  iconVisibility: "Show icons",
  addRoleStatus: "No role",
  ariaDescription: "Sortable column",
  includeAriaDescription: true,
  showDescriptionAll: "No", // Set default to "No"
};

// Standalone documentation page
export const Documentation = () => <ReactTableSortableDescription />;
Documentation.parameters = {
  docsOnly: true,
};

// Rename the sidebar label for this story
SortableTableColumns.storyName = "Table (Sort function) Build";