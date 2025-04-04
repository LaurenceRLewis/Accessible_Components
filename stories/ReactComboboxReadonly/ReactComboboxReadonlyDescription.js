export default function ReactComboboxReadonlyDescription() {
    return (
      <div>
        <h1>React Combobox Readonly (Experimental)</h1>
        <p>
          <strong>ReactComboboxReadonly</strong> is a custom read-only combobox component that provides users with a dropdown list of options. Users can select one or more options, and the selected options are displayed in the input box. The listbox is controlled via an input element that does not allow the user to freely type, thus limiting the user to select only the provided options.
        </p>
  
        <h2>Features</h2>
        <ul>
          <li>Provides a dropdown list for displaying available options</li>
          <li>Selected options are displayed in a read-only input</li>
          <li>Users can't freely type in the input but only select available options</li>
          <li>Ensures keyboard navigation for easy control and interaction</li>
          <li>Uses ARIA properties and roles for better accessibility</li>
        </ul>
  
        <h2>Keyboard Accessibility</h2>
        <p>
          The ReactComboboxReadonly component ensures keyboard accessibility for easy control and interaction. Users can navigate and interact with the list of options using keyboard controls.
        </p>
  
        <h2>ARIA Announcements</h2>
        <p>
          ReactComboboxReadonly uses an <code>ariaAnnounce</code> function to create an ARIA live region. This is an area of the page specifically designed to be monitored by assistive technologies. When changes occur in this area, those updates are read out by screen reader software. This ensures that users who can't or aren't looking at the screen can still receive important updates.
        </p>
        <p>
          In the case of ReactComboboxReadonly, <code>ariaAnnounce</code> is used to communicate the selection or dismissal of an option. It dynamically generates a hidden live region, injects it into the DOM, updates it with the relevant message, and then removes it after a period of time.
        </p>
  
        <h2>ARIA Integration</h2>
        <p>
          ReactComboboxReadonly uses ARIA properties and roles to enhance accessibility. ARIA roles and properties provide information about how an element behaves or should be interacted with, allowing assistive technology users to understand the element's role and state.
        </p>
  
        <h3>Download build files</h3>
        <ul>
          <li>
            <a
              href="https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactComboboxReadonly"
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
              <td><code>isListboxOpen</code></td>
              <td><code>boolean</code></td>
              <td>Whether the dropdown list is open or not.</td>
            </tr>
            <tr>
              <td><code>activeDescendantId</code></td>
              <td><code>string</code></td>
              <td>The id of the currently active descendant in the listbox.</td>
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
              <td><code>handleKeyDown</code></td>
              <td>A method that handles the keydown event in the input element.</td>
            </tr>
            <tr>
              <td><code>handleOptionClick</code></td>
              <td>A method that handles the click event on an option in the list.</td>
            </tr>
          </tbody>
        </table>
  
        <p>
          The ReactComboboxReadonly component ensures a seamless user experience for both mouse and keyboard interactions, making it accessible and easy to use.
        </p>
      </div>
    );
  }
  