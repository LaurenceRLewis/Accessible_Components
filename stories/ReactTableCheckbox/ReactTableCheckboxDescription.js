const description = `
ReactTableCheckbox is a table component that displays data with checkboxes in the table cells. It allows users to select rows by checking the corresponding checkboxes. This component is useful in scenarios where users need to perform batch actions on selected rows or apply filters based on selected rows.

## Features

- Displaying data in a table format with checkboxes in each row.
- Allowing users to select rows by checking the checkboxes.
- Enabling certain checkboxes to be set as disabled on render.
- Associating checkboxes with table cells using ARIA attributes.
- Accessible and keyboard-friendly interaction.

## Usage

The ReactTableCheckbox component receives an array of data objects and renders them in a table. Each row has a checkbox in the first cell, and the remaining cells display the corresponding data fields. Certain checkboxes can be set as disabled through the disabledCheckboxes prop.

### Download build files
- **[Development files](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactTableCheckbox)

## Props

ReactTableCheckbox accepts one prop:

- **disabledCheckboxes:** A string of comma-separated checkbox IDs that should be disabled on render.

## Accessibility

The ReactTableCheckbox component ensures accessibility by using ARIA attributes to associate the checkboxes with their corresponding table cells. The checkboxes have unique IDs, and the table cells have IDs that are referenced by the checkboxes' \`aria-labelledby\` attributes. This allows screen readers and assistive technologies to provide accurate information about the checkbox selections.

The ReactTableCheckbox component provides a convenient way to display tabular data with checkboxes and enables easy selection of rows for further processing or filtering.
`;

export default description;