import React from 'react';
import ReactSearchTable from './ReactSearchTable';
import reactSearchTableDescription from './ReactSearchTableDescription';

export default {
  title: 'Tables/React Table with Search',
  component: ReactSearchTable,
  parameters: {
    docs: {
      description: {
        component: reactSearchTableDescription,
      },
    },
    docsOnly: true,
  },
  argTypes: {
    version: {
      control: { type: "select" },
      options: {
        'HTML': 'HTML',
        'ARIA': "ARIA",
      },
      defaultValue: "ARIA",
    },
  },
};

const Template = (args) => <ReactSearchTable {...args} />;

export const SearchTable = Template.bind({});
SearchTable.args = {
  version: 'ARIA',
};