export default function ReactComboboxDescription() {
    return (
      <div>
        <h1>React Combobox</h1>
        <p>
          The <strong>ReactCombobox</strong> is a flexible implementation of the ARIA Combobox Widget,
          providing users with a dropdown list of options that can be filtered by typing into the
          text field.
        </p>
  
        <h2>Features</h2>
        <ul>
          <li>Provides Autocomplete functionality</li>
          <li>Supports keyboard navigation</li>
          <li>Announces changes using ARIA live regions</li>
          <li>Optional help text and result count</li>
          <li>Australian cities/towns as autocomplete options</li>
          <li>
            <code>aria-controls</code> attribute updates dynamically with the options list
          </li>
        </ul>
  
        <h2>Keyboard Accessibility</h2>
        <ul>
          <li>
            <strong>ArrowDown:</strong> Opens the listbox and moves focus to the first item, if
            applicable
          </li>
          <li>
            <strong>ArrowUp:</strong> Moves focus to the previous option or opens the listbox
          </li>
          <li>
            <strong>Alt + Down Arrow:</strong> Opens the listbox without selecting
          </li>
          <li>
            <strong>Enter:</strong> Selects the focused option and closes the list
          </li>
          <li>
            <strong>Escape:</strong> Closes the listbox or clears input
          </li>
          <li>
            <strong>Home/End:</strong> Moves caret in the textbox
          </li>
        </ul>
  
        <h2>ARIA Announcements</h2>
        <p>
          The component uses an <code>ariaAnnounce</code> function to trigger an ARIA live region
          update that announces the number of matching search results or confirms when the list is
          cleared. This improves screen reader accessibility.
        </p>
  
        <h3>Download Build Files</h3>
        <ul>
          <li>
            <a
              href="https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactCombobox"
              target="_blank"
              rel="noopener noreferrer"
            >
              Development files
            </a>
          </li>
          <li>
            <a
              href="https://github.com/LaurenceRLewis/Accessible_Components/tree/main/.storybook/utils"
              target="_blank"
              rel="noopener noreferrer"
            >
              ariaAnnounce Utility
            </a>
          </li>
        </ul>
  
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
              <td><code>showHelpText</code></td>
              <td><code>string</code></td>
              <td>Determines whether the help text is visible. Defaults to false.</td>
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
              <td><code>handleOptionClick</code></td>
              <td>Handles option click, updates value, and closes the list</td>
            </tr>
            <tr>
              <td><code>handleInputChange</code></td>
              <td>Updates the input and suggestions list</td>
            </tr>
            <tr>
              <td><code>handleKeyPress</code></td>
              <td>Handles keyboard events for navigation and selection</td>
            </tr>
          </tbody>
        </table>
  
        <p>
          This widget offers a user-friendly and accessible way to add autocomplete functionality with
          ARIA-compliant behavior to your app.
        </p>
      </div>
    );
  }
  