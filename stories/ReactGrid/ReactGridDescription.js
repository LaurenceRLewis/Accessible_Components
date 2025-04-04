export default function ReactGridDescription() {
    return (
      <div>
        <h1>React Grid</h1>
        <p>
          The <strong>React Grid</strong> component is a robust and dynamic grid-based table component,
          providing an interactive and flexible way to display and manipulate tabular data in a React application.
          This component prioritizes accessibility, with a keen focus on keyboard navigation and focus management.
        </p>
  
        <h2>Features</h2>
        <ul>
          <li><strong>Tabular Representation</strong>: Organize and display data in a structured, easy-to-read grid format.</li>
          <li><strong>Keyboard Navigation</strong>: Navigate through the grid using arrow keys, with the current focus automatically tracked and visually indicated.</li>
          <li><strong>Editable Cells</strong>: Allow users to modify cell content directly within the grid, including various types of data such as boolean (represented as checkboxes) and strings.</li>
          <li>
            <strong>Focus Management</strong>: The component implements a "roving tabindex" strategy for managing focus.
            On initial load, the first cell has a <code>tabindex</code> of <code>0</code> while all other cells have a <code>tabindex</code> of <code>-1</code>.
            As the user navigates through the grid, the <code>tabindex</code> of the currently focused cell is updated to <code>0</code>,
            while the previously focused cell’s <code>tabindex</code> reverts to <code>-1</code>. This ensures that the tab sequence remains consistent and predictable.
          </li>
          <li><strong>Customization Options</strong>: Customize the grid according to your requirements, including cell types, data population, and event handlers for changing data.</li>
        </ul>
  
        <h2>Download Build Files</h2>
        <p>
          <a
            href="https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactGrid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Development files on GitHub
          </a>
        </p>
      </div>
    );
  }
  