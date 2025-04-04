export default function ReactMultiSelectDescription() {
    return (
      <div>
        <h1>ReactMultiSelect</h1>
        <p>
          <strong>ReactMultiSelect</strong> is a custom multi-select component that provides users with a dropdown list
          of options. Users can select one or more options, and the selected options can be displayed either at the top
          or at the bottom of the dropdown. It supports keyboard navigation for better accessibility and offers a
          customizable selection model.
        </p>
  
        <h2>Features</h2>
        <ul>
          <li>Supports multiple option selections</li>
          <li>Offers a dropdown list for displaying available options</li>
          <li>The selection model can be default or alternative</li>
          <li>Ensures keyboard navigation for easy control and interaction</li>
          <li>
            <strong>New!</strong> Toggle selection state with <kbd>Space</kbd> or <kbd>Enter</kbd> keys without changing
            other selections
          </li>
          <li>Uses ARIA live regions to announce changes to the user</li>
        </ul>
  
        <h2>Keyboard Accessibility</h2>
        <p>
          The ReactMultiSelect component ensures keyboard accessibility for easy control and interaction. Users can
          navigate and interact with the list of options using keyboard controls. The new update allows users to toggle
          the selection state of options using the <kbd>Space</kbd> or <kbd>Enter</kbd> keys. Once selected, the{' '}
          <code>aria-selected</code> attribute will remain unchanged for that option until toggled off again, providing a
          more intuitive keyboard interaction.
        </p>
  
        <h2>ARIA Announcements</h2>
        <p>
          ReactMultiSelect uses an <code>ariaAnnounce</code> function to create an ARIA live region. This is an area of
          the page specifically designed to be monitored by assistive technologies. When changes occur in this area,
          those updates are read out by screen reader software. This ensures that users who can't or aren't looking at
          the screen can still receive important updates.
        </p>
        <p>
          In the case of ReactMultiSelect, <code>ariaAnnounce</code> is used to communicate the selection or dismissal of
          an option. It dynamically generates a hidden live region, injects it into the DOM, updates it with the relevant
          message, and then removes it after a period of time.
        </p>
  
        <h3>Download Build Files</h3>
        <ul>
          <li>
            <a
              href="https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactMultiSelect"
              target="_blank"
              rel="noopener noreferrer"
            >
              Development files on GitHub
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
              <td><code>buttonsPosition</code></td>
              <td><code>string</code></td>
              <td>
                Position the selected options buttons either at <code>'top'</code> or <code>'bottom'</code>. Default is{' '}
                <code>'bottom'</code>.
              </td>
            </tr>
            <tr>
              <td><code>interactionMode</code></td>
              <td><code>string</code></td>
              <td>
                Choose the interaction mode for the listbox. Can be <code>'Keep selected in list'</code> or{' '}
                <code>'Remove selected from list'</code>.
              </td>
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
              <td><code>handleSelectOption</code></td>
              <td>A method that handles the selection of an option.</td>
            </tr>
            <tr>
              <td><code>handleDismissOption</code></td>
              <td>A method that handles the dismissal of a selected option.</td>
            </tr>
            <tr>
              <td><code>handleKeyDown</code></td>
              <td>
                A method that handles the keydown event in the list of options, including the new toggle selection
                functionality.
              </td>
            </tr>
          </tbody>
        </table>
  
        <p>
          The ReactMultiSelect component ensures a seamless user experience for both mouse and keyboard interactions,
          making it accessible and easy to use.
        </p>
      </div>
    );
  }
  