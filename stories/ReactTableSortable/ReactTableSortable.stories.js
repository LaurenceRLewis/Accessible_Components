import React from 'react';
import ReactTableSortable from './ReactTableSortable';
import reactTableSortableDescription from './ReactTableSortableDescription';

export default {
  title: 'Tables/React Table Sortable',
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
      control: { type: 'boolean' },
      description: 'Include scope for table headers',
      defaultValue: true,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    iconVisibility: {
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