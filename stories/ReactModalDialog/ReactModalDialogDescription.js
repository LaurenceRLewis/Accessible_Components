export default function ReactModalDialogDescription() {
    return (
      <div>
        <h1>React Modal Dialog</h1>
        <p>
          <strong>ReactModalDialog</strong> is a flexible and accessible React component that provides the
          functionality for creating both standard modal dialogues and sheet dialogues.
        </p>
  
        <h2>Features</h2>
        <ul>
          <li>Both standard and sheet style dialog types</li>
          <li>Full keyboard accessibility for interacting with the dialog</li>
          <li>
            Modal functionality, which will either trap focus in the dialog when open or not based on the{' '}
            <code>modal</code> prop
          </li>
          <li>ARIA attributes for better accessibility</li>
        </ul>
  
        <h2>Keyboard Accessibility</h2>
        <p>
          ReactModalDialog component supports keyboard accessibility. It allows opening and closing of the dialog via
          the <kbd>Enter</kbd> key, and closing via the <kbd>Escape</kbd> key. It also includes functionality to trap
          focus within the dialog when it's open and in modal mode.
        </p>
  
        <h2>ARIA Usage</h2>
        <p>
          ReactModalDialog sets appropriate ARIA roles and properties based on the dialog's state and type. It also
          manages <code>aria-hidden</code> attributes on sibling elements to the dialog when it's open in modal mode,
          helping to ensure that screen readers only expose the appropriate content to users.
        </p>
  
        <h3>Download Build Files</h3>
        <ul>
          <li>
            <a
              href="https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactSheetDialog"
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
              <td><code>modal</code></td>
              <td><code>boolean</code></td>
              <td>Controls whether the dialog should be presented as a modal dialog.</td>
            </tr>
            <tr>
              <td><code>dialogType</code></td>
              <td><code>string</code></td>
              <td>Determines the type of dialog (<code>'standard'</code> or <code>'sheet'</code>).</td>
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
              <td><code>openSheet</code></td>
              <td>A method that opens the dialog.</td>
            </tr>
            <tr>
              <td><code>closeSheet</code></td>
              <td>A method that closes the dialog.</td>
            </tr>
            <tr>
              <td><code>handleEscKey</code></td>
              <td>A method that listens for <kbd>Escape</kbd> keypress and closes the dialog.</td>
            </tr>
            <tr>
              <td><code>setAriaHiddenOnSiblings</code></td>
              <td>Manages <code>aria-hidden</code> attributes on elements outside the dialog.</td>
            </tr>
          </tbody>
        </table>
  
        <p>
          ReactSheetDialog provides a versatile tool for creating dialog interfaces, with robust support for
          accessibility and two distinct dialog styles.
        </p>
      </div>
    );
  }
  