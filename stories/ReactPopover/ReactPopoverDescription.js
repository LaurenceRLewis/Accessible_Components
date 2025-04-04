export default function ReactPopoverDescription() {
    return (
      <div>
        <h1>Popover</h1>
        <p>
          <strong>Popover</strong> is a versatile React component that provides an accessible and interactive UI element
          for displaying additional content. This content can be dynamic or static and can appear upon user interaction.
        </p>
  
        <h2>Features</h2>
        <ul>
          <li>Popover can be triggered by a button.</li>
          <li>Ability to use arrow key navigation for focusable content inside the Popover.</li>
          <li>
            The Popover's content is highly customizable, allowing for active elements, reference links, or simply static
            content.
          </li>
          <li>Enhanced keyboard and focus behavior ensures accessibility and usability.</li>
          <li>ARIA attributes integrated for screen readers and better accessibility.</li>
        </ul>
  
        <h2>Keyboard Accessibility</h2>
        <ul>
          <li>Open the Popover content with <kbd>Enter</kbd> when focused on the button.</li>
          <li>Close the Popover with <kbd>Escape</kbd> key.</li>
          <li>Navigate through focusable elements using <kbd>Tab</kbd> or <kbd>Shift+Tab</kbd>.</li>
          <li>Optionally, navigate through active elements using arrow keys.</li>
        </ul>
  
        <h2>ARIA Usage</h2>
        <p>
          Popover sets appropriate ARIA roles and properties based on its state and type. If set, it will have a role of{' '}
          <code>region</code> and can also have an <code>aria-label</code> attribute, ensuring that screen readers can
          interpret the Popover's content correctly.
        </p>
  
        <h3>Additional Resources</h3>
        <ul>
          <li>
            <a
              href="https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactPopover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Development files on GitHub
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
              <td><code>withRole</code></td>
              <td><code>boolean</code></td>
              <td>Whether to include the <code>region</code> role for the Popover content.</td>
            </tr>
            <tr>
              <td><code>ariaLabel</code></td>
              <td><code>string</code></td>
              <td>The value of the <code>aria-label</code> attribute for the Popover content.</td>
            </tr>
            <tr>
              <td><code>useArrowKeys</code></td>
              <td><code>boolean</code></td>
              <td>Control if arrow key navigation is enabled for the Popover's active content.</td>
            </tr>
            <tr>
              <td><code>dismissOnClickOutside</code></td>
              <td><code>boolean</code></td>
              <td>Determine if the Popover should close when clicked outside of it.</td>
            </tr>
            <tr>
              <td><code>contentType</code></td>
              <td><code>string</code></td>
              <td>
                Determines the content type: <code>'ActiveContentOnly'</code>,{' '}
                <code>'HelpWithReferenceLink'</code>, or <code>'StaticContentOnly'</code>.
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
              <td><code>handleClickOutside</code></td>
              <td>Listens for mouse clicks outside the Popover to close it.</td>
            </tr>
            <tr>
              <td><code>handleTabKey</code></td>
              <td>Manages focus behavior with the <kbd>Tab</kbd> key and closes the Popover when focus moves out.</td>
            </tr>
            <tr>
              <td><code>handleEscKey</code></td>
              <td>Listens for the <kbd>Escape</kbd> key press to close the Popover.</td>
            </tr>
          </tbody>
        </table>
  
        <p>
          Popover ensures that additional content is presented in an accessible, user-friendly manner, making it an
          essential tool for enhancing user interfaces.
        </p>
      </div>
    );
  }
  