export default `
The \`ReactTableCheckbox\` is a functional component that renders a table with a checkbox for each row. This allows the user to select rows individually.

The table's header includes five columns: "Select Row", "Status", "DOB", "Age", and "Organization". The first column, "Select Row", contains checkboxes for each row. By selecting a checkbox, the user is effectively selecting that row.

The table body includes rows of data. Each row corresponds to an individual's information, including their email (represented as "Status"), date of birth (DOB), age, and organization. Each row is given a unique key corresponding to their ID, ensuring React can efficiently re-render the table when changes are made.

The checkbox input in each row is labeled by the "Select Row" header, the individual's email ("Status"), and the organization, providing the necessary context for assistive technologies such as screen readers.

This table component is versatile and can handle a variety of data types and structures. It can be easily adapted for different use-cases where row selection functionality is required.

## Usage

\`\`\`jsx
import React from 'react';
import ReactTableCheckbox from './ReactTableCheckbox';

<ReactTableCheckbox />
\`\`\`
`;