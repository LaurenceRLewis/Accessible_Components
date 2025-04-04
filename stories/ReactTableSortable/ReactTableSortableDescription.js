export default function ReactTableSortableDescription() {
  return (
    <div>
      <h1>ReactTableSortable</h1>
      <p>
        <strong>ReactTableSortable</strong> is a table component that displays data in a sortable
        format. It allows users to click on the header buttons to sort the table by ascending or
        descending order based on the selected column. This component is useful for displaying data
        that needs to be easily sorted and organized.
      </p>

      <h2>Features</h2>
      <ul>
        <li>Displaying data in a table format with sortable columns.</li>
        <li>Allowing users to sort the table by clicking on the header buttons.</li>
        <li>Providing visual indicators for the sorting order.</li>
        <li>Customizable sorting behavior based on column data types.</li>
        <li>Accessible and keyboard-friendly interaction.</li>
        <li>Option to include <code>scope="col"</code> attribute on header cells.</li>
        <li>Configurable visibility of sorting icons.</li>
        <li>Optional inclusion of <code>aria-pressed</code> attribute to enhance accessibility.</li>
      </ul>

      <h2>Usage</h2>
      <p>
        The <code>ReactTableSortable</code> component receives the data to be displayed in the table
        and renders it with sortable columns. Each column header contains a button that can be
        clicked to trigger the sorting action.
      </p>

      <h2>Props</h2>
      <ul>
        <li>
          <code>sortable</code> (<em>string</em>, default: <code>'Sort'</code>): Determines whether
          sorting is enabled or disabled for the columns. Possible values are <code>'Sort'</code> and <code>"Don't Sort"</code>.
        </li>
        <li>
          <code>includeScope</code> (<em>boolean</em>, default: <code>true</code>): Determines
          whether to include <code>scope="col"</code> attribute on header cells.
        </li>
        <li>
          <code>iconVisibility</code> (<em>string</em>, default: <code>'Show on hover / focus'</code>): Controls visibility of sort icons. Options: <code>'Show icons'</code>, <code>'Show on hover / focus'</code>.
        </li>
        <li>
          <code>ariaPressed</code> (<em>string</em>, default: <code>'Yes'</code>): Whether to include <code>aria-pressed</code> attribute. Options: <code>'Yes'</code>, <code>'No'</code>.
        </li>
      </ul>

      <h2>Accessibility</h2>
      <p>
        The <code>ReactTableSortable</code> component ensures accessibility by providing proper ARIA
        attributes and visual indicators for the sorting functionality. The header buttons have
        accessible labels and ARIA attributes to indicate the sorting order (ascending or
        descending). When <code>ariaPressed</code> is set to <code>'Yes'</code>, the buttons will
        also include the <code>aria-pressed</code> attribute to signify their state to assistive
        technologies.
      </p>

      <h2>Download Build Files</h2>
      <p>
        <a
          href="https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactTableSortable"
          target="_blank"
          rel="noopener noreferrer"
        >
          Development files on GitHub
        </a>
      </p>

      <h2>Example</h2>
      <pre>
        <code>{`
import React from 'react';
import ReactTableSortable from './ReactTableSortable';

const MyComponent = () => {
  const tableData = [
    // Data array
  ];

  return (
    <ReactTableSortable
      sortable="Sort"
      includeScope={true}
      iconVisibility="Show on hover / focus"
      ariaPressed="No"
      tableData={tableData}
    />
  );
};
        `}</code>
      </pre>

      <h2>Resources</h2>
      <p>
        <a
          href="https://github.com/w3c/aria-practices/issues/2817"
          target="_blank"
          rel="noopener noreferrer"
        >
          Consider adding aria-pressed to the aria-sort button #2817
        </a>
      </p>
    </div>
  );
}
