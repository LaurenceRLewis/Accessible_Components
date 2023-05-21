const description = `
ReactTableCheckbox is a table component that displays data with checkboxes in the table cells. It allows users to select rows by checking the corresponding checkboxes. This component is useful in scenarios where users need to perform batch actions on selected rows or apply filters based on selected rows.

## Features

- Displaying data in a table format with checkboxes in each row.
- Allowing users to select rows by checking the checkboxes.
- Associating checkboxes with table cells using ARIA attributes.
- Accessible and keyboard-friendly interaction.

## Usage

The ReactTableCheckbox component receives an array of data objects and renders them in a table. Each row has a checkbox in the first cell, and the remaining cells display the corresponding data fields.

## Props

ReactTableCheckbox does not accept any props. It uses internal data and does not require external configuration.

## Accessibility

The ReactTableCheckbox component ensures accessibility by using ARIA attributes to associate the checkboxes with their corresponding table cells. The checkboxes have unique IDs, and the table cells have IDs that are referenced by the checkboxes' \`aria-labelledby\` attributes. This allows screen readers and assistive technologies to provide accurate information about the checkbox selections.

## Example

\`\`\`jsx
import React from 'react';
import ReactTableCheckbox from './ReactTableCheckbox';

const MyComponent = () => {
  const data = [
    { id: 0, name: 'John', age: 32 },
    { id: 1, name: 'Jane', age: 28 },
    { id: 2, name: 'Mike', age: 45 },
    // ...
  ];

  return (
    <ReactTableCheckbox data={data} />
  );
};
\`\`\`

The ReactTableCheckbox component provides a convenient way to display tabular data with checkboxes and enables easy selection of rows for further processing or filtering.
`;

export default description;