export default function ReactAccordionDescription() {
  return (
    <div>
      <h1>React Accordion</h1>
      <p>
        <strong>React Accordion</strong> is a custom component that allows users to expand and collapse content sections.
        It provides a user-friendly interface for toggling visibility of grouped content.
      </p>

      <h2>Features</h2>
      <ul>
        <li>Support for multiple accordion items</li>
        <li>Optional multi-expand behavior</li>
        <li>Keyboard navigation for full accessibility</li>
        <li>Customizable chevron position (left or right)</li>
        <li>Optional inclusion in a named landmark region</li>
      </ul>

      <h2>Keyboard Accessibility</h2>
      <p>Users can interact with the accordion using:</p>
      <ul>
        <li><kbd>Enter</kbd> / <kbd>Space</kbd> – Toggle expansion</li>
        <li><kbd>Arrow Down</kbd> / <kbd>Arrow Up</kbd> – Navigate between items</li>
        <li><kbd>Home</kbd> – Focus the first item</li>
        <li><kbd>End</kbd> – Focus the last item</li>
      </ul>

      <h2>Download Build Files</h2>
      <p>
        <a href="https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactAccordion" target="_blank" rel="noopener noreferrer">
          Development files on GitHub
        </a>
      </p>

      <h2>Props</h2>
      <table>
        <thead>
          <tr>
            <th>Prop Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>items</code></td>
            <td><code>array</code></td>
            <td>An array of accordion items with title and content.</td>
          </tr>
          <tr>
            <td><code>groupName</code></td>
            <td><code>string</code></td>
            <td>The group name of the accordion.</td>
          </tr>
          <tr>
            <td><code>multiExpand</code></td>
            <td><code>boolean</code></td>
            <td>Allows multiple items to be expanded at once.</td>
          </tr>
          <tr>
            <td><code>chevronPosition</code></td>
            <td><code>string</code></td>
            <td>Position of the chevron: 'left' or 'right'.</td>
          </tr>
          <tr>
            <td><code>NamedRegionContainer</code></td>
            <td><code>select</code></td>
            <td>Wrap the accordion in a named landmark region.</td>
          </tr>
        </tbody>
      </table>

      <h2>Methods</h2>
      <table>
        <thead>
          <tr>
            <th>Method Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>onTitleClick</code></td>
            <td>Handles click events on accordion titles.</td>
          </tr>
          <tr>
            <td><code>onTitleKeyDown</code></td>
            <td>Handles keydown events for keyboard navigation.</td>
          </tr>
        </tbody>
      </table>

      <p>
        This component ensures a seamless and accessible experience for keyboard users and supports advanced structural layout.
      </p>
    </div>
  );
}
