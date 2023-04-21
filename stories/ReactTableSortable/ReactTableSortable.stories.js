import React from 'react';
import ReactTableSortableControl from './ReactTableSortableControl';

export default {
  title: 'Components/ReactTableSortable',
  component: ReactTableSortableControl,
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
    tabs: {
      table: { disable: true },
    },
  },
};

const Template = (args) => <ReactTableSortableControl {...args} />;

export const Default = Template.bind({});

// Update the args to pass the sortable prop directly
Default.args = {
  sortable: 'Sort',
};
