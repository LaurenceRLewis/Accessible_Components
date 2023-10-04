const description = `
ReactTableSortable is a table component that displays data in a sortable format. It allows users to click on the header buttons to sort the table by ascending or descending order based on the selected column. This component is useful for displaying data that needs to be easily sorted and organized.

## Features

- Displaying data in a table format with sortable columns.
- Allowing users to sort the table by clicking on the header buttons.
- Providing visual indicators for the sorting order.
- Customizable sorting behavior based on column data types.
- Accessible and keyboard-friendly interaction.
- Option to include \`scope="col"\` attribute on header cells.
- Configurable visibility of sorting icons.
- Optional inclusion of \`aria-pressed\` attribute to enhance accessibility.

## Usage

The ReactTableSortable component receives the data to be displayed in the table and renders it with sortable columns. Each column header contains a button that can be clicked to trigger the sorting action.

## Props

ReactTableSortable accepts the following props:

- \`sortable\` (string, default: 'Sort'): Determines whether sorting is enabled or disabled for the columns. Possible values are 'Sort' and "Don't Sort".
- \`includeScope\` (boolean, default: true): Determines whether to include \`scope="col"\` attribute on header cells.
- \`iconVisibility\` (string, default: 'Show on hover / focus'): Determines the visibility of the sort icons. Possible values are 'Show icons' and 'Show on hover / focus'.
- \`ariaPressed\` (string, default: 'Yes'): Determines whether to include \`aria-pressed\` attribute for the sorting buttons. Possible values are 'Yes' and 'No'.

## Accessibility

The ReactTableSortable component ensures accessibility by providing proper ARIA attributes and visual indicators for the sorting functionality. The header buttons have accessible labels and ARIA attributes to indicate the sorting order (ascending or descending). When \`ariaPressed\` is set to 'Yes', the buttons will also include the \`aria-pressed\` attribute to signify their state to assistive technologies.

## Download build files
- **[Development files](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactTableSortable)**

## Example

\`\`\`jsx
import React from 'react';
import ReactTableSortable from './ReactTableSortable';

const MyComponent = () => {
  const tableData = [
    // Data array
  ];

  return (
    <ReactTableSortable sortable="Sort" includeScope={true} iconVisibility="Show on hover / focus" ariaPressed="No" tableData={tableData} />
  );
};
\`\`\`

The Sortable Table component provides a flexible and user-friendly way to display and sort tabular data, enhancing the usability and organization of the information.

## Resources
- **[Consider adding aria-pressed to the aria-sort button #2817](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactTableSortablehttps://github.com/w3c/aria-practices/issues/2817)**
`;

export default description;