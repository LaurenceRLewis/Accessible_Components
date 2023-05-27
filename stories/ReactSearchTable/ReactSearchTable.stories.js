import React from 'react';
import ReactSearchTable from './ReactSearchTable';
import reactSearchTableDescription from './ReactSearchTableDescription';

export default {
  title: 'Tables/React Table with search function',
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