import React from 'react';
import ReactSearchTable from './ReactSearchTable';
import reactSearchTableDescription from './ReactSearchTableDescription';

export default {
  title: 'Work in progress/ReactSearchTable',
  component: ReactSearchTable,
  parameters: {
    docs: {
      description: {
        component: reactSearchTableDescription,
      },
    },
    docsOnly: true,
  },
};

export const TableWithSearchFunction = () => <ReactSearchTable />;