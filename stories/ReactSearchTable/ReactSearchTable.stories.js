import React from 'react';
import ReactSearchTable from './ReactSearchTable';
import reactSearchTableDescription from './ReactSearchTableDescription';

export default {
  title: 'Tables/Table (Search function)',
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
    containerRole: {
      control: { type: 'select' },
      options: {
        '(HTML) No role': undefined,
        '(ARIA) Has role search': 'search',
      },
      defaultValue: 'search',
    },
    inputType: {
      control: { type: 'select' },
      options: {
        'type=search': 'search',
        'type=text': 'text',
      },
      defaultValue: 'search',
    },
    inputRole: {
      control: { type: 'select' },
      options: {
        '(HTML) No role': undefined,
        '(ARIA) Has role searchbox': 'searchbox',
      },
      defaultValue: undefined,
    },
  },
};

// export const TableWithSearchFunction = (args) => <ReactSearchTable {...args} />;
const Template = (args) => <ReactSearchTable {...args} />;

export const searchTable = Template.bind({});
searchTable.args = {
  inputType: 'search',
  containerRole: 'search',
  inputRole: undefined,
};