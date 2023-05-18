export default `
The \`ReactSearchTable\` component is a searchable table that allows users to filter the results based on an ID.

Functionality:
- Users can enter a part or all of an ID in the search input.
- Pressing the "Search" button will update the table to show only the results related to the search request.
- The table consists of 4 columns: Given name, Last name, Mobile number, and ID.
- The table initially displays 20 rows of dummy data.
- The search is case-sensitive and matches the entered text with the ID column.

Accessibility:
- The search input has a proper label associated with it.
- The search input has the role "searchbox" for assistive technologies.
- The number of results found is announced to screen reader users using the \`ariaAnnounce\` function.

Usage:
\`\`\`jsx
import React from 'react';
import ReactSearchTable from './ReactSearchTable';

const App = () => (
  <div>
    <ReactSearchTable />
  </div>
);

export default App;
\`\`\`
`;