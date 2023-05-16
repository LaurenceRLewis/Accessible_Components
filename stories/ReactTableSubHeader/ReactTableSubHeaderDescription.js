export default `
The \`ReactTableSubHeader\` is a functional component that renders a table with main headers and additional subheaders. It provides customisability in terms of the number of columns each header and subheader should span, as well as the colour and weight of the text within the headers and table cells.

The table data is an array of arrays, where each inner array represents a row in the table. The header data is an array of objects, each containing an \`id\`, a \`name\` for the main header, and a \`subName\` for the subheader.

The component accepts several props that control its appearance and behaviour:

- \`colspan\`: An array of numbers defining how many columns each header should span.
- \`subColspan\`: An array of numbers defining how many columns each subheader should span.
- \`headers\`: An array of objects representing the headers. Each object should have an \`id\`, a \`name\` for the main header, and a \`subName\` for the subheader.
- \`headerBackgroundColor\`: A string representing the background colour of the headers.
- \`headerTextColor\`: A string representing the text colour of the headers.
- \`tdFontWeight\`: A number representing the weight of the font in the table cells.

The headers are styled according to the \`headerBackgroundColor\` and \`headerTextColor\` props, and the table cells are styled according to the \`tdFontWeight\` prop. The component uses PropTypes to ensure the props are of the correct type.

## Usage

\`\`\`jsx
import React from 'react';
import ReactTableSubHeader from './ReactTableSubHeader';

<ReactTableSubHeader
  colspan={[2, 1, 1, 2, 1, 1, 1, 2]}
  subColspan={[1, 0, 0, 1, 0, 0, 0, 1]}
  headers={[
    { id: "test-product", name: "Test Product", subName: "Sub Product" },
    { id: "name", name: "Name" },
    // more headers...
  ]}
  data={[
    ["Test Product", "124689389", "0", "$35.00", "$60.00", "20", "$1200.00", "$500.00"],
    // more rows...
  ]}
/>
\`\`\`
`;