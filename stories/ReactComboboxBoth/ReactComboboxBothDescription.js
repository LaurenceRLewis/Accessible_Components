export default function ReactComboboxBothDescription() {
    return (
      <div>
        <h1>React Combobox Both</h1>
        <p>
          The <strong>ReactComboboxBoth</strong> is a flexible implementation of the ARIA Combobox
          Widget with both Autocomplete functionality: <code>"inline"</code> and{" "}
          <code>"list"</code>. It provides users with a dropdown list of options that can be filtered
          by typing into the text field. As the user types, the component provides predictive text
          functionality.
        </p>
  
        <h2>Features</h2>
        <ul>
          <li>Provides both "inline" and "list" Autocomplete functionality</li>
          <li>Supports keyboard navigation</li>
          <li>Uses ARIA live regions to announce changes</li>
          <li>Includes optional help text and result count</li>
          <li>Uses Australian town/city list for suggestions</li>
          <li>
            <code>aria-controls</code> dynamically updates with list state
          </li>
          <li>Handles Backspace for predictive text correction</li>
        </ul>
  
        <h2>Keyboard Accessibility</h2>
        <ul>
          <li>
            <strong>ArrowDown:</strong> Move focus to next item (DOM focus stays on input)
          </li>
          <li>
            <strong>ArrowUp:</strong> Move focus to previous item (DOM focus stays on input)
          </li>
          <li>
            <strong>Enter:</strong> Select focused option and close list
          </li>
          <li>
            <strong>Escape:</strong> Close list or clear input
          </li>
          <li>
            <strong>Backspace:</strong> Updates input value and predictive state
          </li>
        </ul>
  
        <h2>ARIA Announcements</h2>
        <p>
          The component uses ARIA properties to create a live region that announces result counts or
          updates as users type. This improves accessibility for screen reader users by providing
          real-time updates without requiring navigation.
        </p>
  
        <h3>Download Build Files</h3>
        <ul>
          <li>
            <a
              href="https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactComboboxBoth"
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
              <td><code>isTechnology</code></td>
              <td><code>string</code></td>
              <td>
                Determines which technology is used. Use <code>"ARIA"</code> for ARIA Combobox or{" "}
                <code>"HTML"</code> for native Datalist.
              </td>
            </tr>
            <tr>
              <td><code>showHelpText</code></td>
              <td><code>string</code></td>
              <td>Shows help text below the field if set to true</td>
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
              <td>Handles option selection and input update</td>
            </tr>
            <tr>
              <td><code>handleInputChange</code></td>
              <td>Updates input and suggestions list</td>
            </tr>
            <tr>
              <td><code>handleKeyPress</code></td>
              <td>Keyboard navigation and interaction handler</td>
            </tr>
          </tbody>
        </table>
  
        <p>
          This widget offers a flexible and accessible combobox with support for both inline and list
          autocomplete. Designed to adapt to your accessibility and UX needs.
        </p>
      </div>
    );
  }
  