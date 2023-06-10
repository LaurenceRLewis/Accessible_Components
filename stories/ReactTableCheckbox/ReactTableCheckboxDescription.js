const description = `
/*... the previous part of your description ...*/

## Props

ReactTableCheckbox accepts the following props:

- **disabledCheckboxes:** A string of comma-separated checkbox IDs that should be disabled on render.
- **defaultCheckedBoxes:** A string of comma-separated checkbox IDs that should be checked on render.

/*... the remaining part of your description ...*/

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
    <ReactTableCheckbox data={data} disabledCheckboxes="0" defaultCheckedBoxes="1,2" />
  );
};
\`\`\`

/*... the remaining part of your description ...*/

`;

export default description;