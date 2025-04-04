export default function ReactTableCheckboxDescription() {
  return (
    <div>
      <h1>ReactTableCheckbox</h1>
      <p>
        <strong>ReactTableCheckbox</strong> is a customizable, easy-to-use component that displays
        a data table with checkboxes. This component provides a <em>Select All</em> checkbox
        functionality, allowing users to select or deselect all rows with a single click. In
        addition, individual checkboxes can be initialized as checked or disabled based on the
        component's props.
      </p>

      <h2>Props</h2>
      <ul>
        <li>
          <strong>disabledCheckboxes:</strong> A comma-separated string of checkbox IDs that should
          be disabled on render.
        </li>
        <li>
          <strong>defaultCheckedBoxes:</strong> A comma-separated string of checkbox IDs that should
          be checked on render.
        </li>
      </ul>

      <h2>Example</h2>
      <pre>
        <code>{`
import React from 'react';
import ReactTableCheckbox from './ReactTableCheckbox';

const MyComponent = () => {
  const data = [
    { id: 0, name: 'John', age: 32 },
    { id: 1, name: 'Jane', age: 28 },
    { id: 2, name: 'Mike', age: 45 },
  ];

  return (
    <ReactTableCheckbox data={data} disabledCheckboxes="0" defaultCheckedBoxes="1,2" />
  );
};

// Another usage example
const MyComponent = () => (
  <ReactTableCheckbox 
    disabledCheckboxes="0,2" 
    defaultCheckedBoxes="1,3"
  />
);
        `}</code>
      </pre>
    </div>
  );
}
