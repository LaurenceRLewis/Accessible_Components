const description = `
ReactTableSubHeader is a table component that supports two header rows. The second header row can have cells that span multiple columns, allowing for more complex table structures. This component is useful for displaying data with hierarchical headers or subcategories.

## Props

| Prop Name                  | Type                        | Description                                                                                                                                                                                           |
| -------------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| colspan                    | array of numbers (required) | An array of numbers representing the colspan for each header cell in the first header row.                                                                                                           |
| subColspan                 | array of numbers (required) | An array of numbers representing the colspan for each header cell in the second header row.                                                                                                          |
| headers                    | array of objects (required) | An array of objects representing the header cells in both header rows. Each object should have the properties \`id\`, \`name\`, and \`subName\`.                                                    |
| data                       | array of arrays (required)   | An array of arrays representing the table data rows.                                                                                                                                                  |
| headerBackgroundColor      | string (optional)           | The background color for the header cells. Defaults to 'inherit'.                                                                                                                                     |
| headerTextColor            | string (optional)           | The text color for the header cells. Defaults to 'inherit'.                                                                                                                                           |
| tdFontWeight               | number (optional)           | The font weight for the table data cells. Should be either 400 (normal) or 700 (bold). Defaults to 400.                                                                                              |

## Methods

ReactTableSubHeader does not provide any methods.

## Example

\`\`\`jsx
import React from 'react';
import ReactTableSubHeader from './ReactTableSubHeader';

const MyComponent = () => {
  const headers = [
    { id: 'test-product', name: 'Test Product', subName: 'Sub Product' },
    // ... Add more header objects here
  ];

  const subHeaderRow = [
    { id: 'sub-product', colspan: 3, name: 'Sub Product' },
    // ... Add more subheader objects here
  ];

  const data = [
    // ... Add data rows here
  ];

  return (
    <ReactTableSubHeader
      colspan={[1, 1, 1, 1, 1, 1, 1, 1]}
      subColspan={[0, 3, 4, 0, 0, 0, 0, 1]}
      headers={headers}
      data={data}
    />
  );
};
\`\`\`

The ReactTableSubHeader component provides a powerful way to create tables with complex header structures, enhancing the organization and readability of the data.
`;

export default description;