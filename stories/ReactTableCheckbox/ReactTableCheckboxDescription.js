const description = `

The ReactTableCheckbox component is a customizable, easy-to-use component that displays a data table with checkboxes. This component provides a 'Select All' checkbox functionality, allowing users to select or deselect all rows with a single click. In addition, individual checkboxes can be initialized as checked or disabled based on the component's props.

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

const MyComponent = () => (
  <ReactTableCheckbox 
      disabledCheckboxes="0,2" 
      defaultCheckedBoxes="1,3"
  />
);
\`\`\`

`;

export default description;