import React from 'react';
import ReactTableSortable from './ReactTableSortable';
import reactTableSortableDescription from './ReactTableSortableDescription';

export default {
  title: 'Tables/Table (Sort function)',
  component: ReactTableSortable,
  parameters: {
    docs: {
      description: {
        component: reactTableSortableDescription,
      },
    },
    docsOnly: true,
  },
  argTypes: {
    sortable: {
      name: "Enable column sorting",
      control: 'select',
      options: ['Sort', "Don't Sort"],
      description: 'Enable or disable sorting for columns',
      value: "Sort"
    },
    includeScope: {
      name: "Set scope attribute",
      control: 'boolean',
      description: 'Include scope for table headers',
      value: true,
    },
    iconVisibility: {
      name: "Persistent sort icon or on hover/focus",
      control: 'select',
      options: ['Show icons', 'Show on hover / focus'],
      description: 'Control visibility of the sorting icons',
      value: 'Show on hover / focus',
    },
    customCaptionText: {
      name: "Caption help text",
      control: 'text',
      description: 'Optional text to be included in table caption',
      value: 'Table sorted by, ',
    },
    initialSortColumnID: {
      name: "Initial Sort Column ID",
      control: 'number',
      description: 'Default column to sort',
      value: 0,
    },
    addRoleStatus: {
      name: "Add the Status Role to the Caption help text.",
      control: 'select',
      options: ['Status Role', 'No Role'],
      description: 'Add role attribute to span',
      value: 'No role',
    },
    ariaDescription: {
      name: "Aria description for sortable columns",
      control: 'text',
      description: 'Description of sortable table columns for screen readers',
      value: 'Sortable column',
    },
    includeAriaDescription: {
      name: "Include aria-description",
      control: 'boolean',
      description: 'Toggle whether to include aria-description on sortable buttons',
      value: true, // Default to true
    }
  },
};

const Template = (args) => <ReactTableSortable {...args} />;

export const SortableTableColumns = Template.bind({});

SortableTableColumns.args = {
  sortable: 'Sort',
  includeScope: true,
  iconVisibility: 'Show icons',
  addRoleStatus: 'No role',
  ariaDescription: 'Sortable column',
  includeAriaDescription: true,  // Set default to true
};
