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
      control: { type: 'select' },
      options: ['Sort', "Don't Sort"],
      description: 'Enable or disable sorting for columns',
      defaultValue: 'Sort',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Sort' },
      },
    },
    includeScope: {
      name: "Set scope attribute",
      control: { type: 'boolean' },
      description: 'Include scope for table headers',
      defaultValue: true,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    iconVisibility: {
      name: "Persistent sort icon or on hover/focus",
      control: { type: 'select' },
      options: ['Show icons', 'Show on hover / focus'],
      description: 'Control visibility of the sorting icons',
      defaultValue: 'Show on hover / focus',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Show on hover / focus' },
      },
    },
  },
};

const Template = (args) => <ReactTableSortable {...args} />;

export const SortableTableColumns = Template.bind({});

SortableTableColumns.args = {
  sortable: 'Sort',
  includeScope: true,
  iconVisibility: 'Show on hover / focus',
};