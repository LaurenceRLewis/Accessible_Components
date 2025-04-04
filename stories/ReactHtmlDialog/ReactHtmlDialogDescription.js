export default function ReactHtmlDialogDescription() {
    return (
      <div>
        <h1>React HTML Dialog</h1>
        <p>
          The <strong>ReactHtmlDialog</strong> is a customizable dialog component that leverages the native HTML <code>&lt;dialog&gt;</code> element
          for creating modals and dialogs within React applications.
        </p>
  
        <h2>Features</h2>
        <ul>
          <li>Dynamically controls the opening and closing of the dialog based on the <code>open</code> prop.</li>
          <li>
            Focus management options for accessibility, allowing the focus to be set on the heading, a specific container,
            or the first focusable element when the dialog opens.
          </li>
          <li>Utilizes either the <code>showModal()</code> or <code>show()</code> method to open the dialog based on the <code>showModal</code> prop.</li>
          <li>
            Flexibility to define content inside the dialog, including heading, body, and additional components or text.
          </li>
          <li>Applies CSS modules for styling to prevent style leakage and ensure component encapsulation.</li>
          <li>
            Supports ARIA attributes such as <code>aria-hidden</code>, <code>inert</code>, and <code>aria-modal</code> for enhanced accessibility and compatibility with screen readers.
          </li>
        </ul>
  
        <h3>Download Build Files</h3>
        <ul>
          <li>
            <a href="https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactHtmlDialog" target="_blank" rel="noopener noreferrer">
              Development files
            </a>
          </li>
        </ul>
  
        <h3>Can I Use</h3>
        <ul>
          <li>
            <a href="https://caniuse.com/dialog" target="_blank" rel="noopener noreferrer">
              Dialog element
            </a>
          </li>
          <li>
            <a href="https://caniuse.com/?search=inert" target="_blank" rel="noopener noreferrer">
              HTMLElement API: inert
            </a>
          </li>
          <li>
            <a href="https://caniuse.com/?search=autofocus" target="_blank" rel="noopener noreferrer">
              Autofocus attribute
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
            <tr><td><code>open</code></td><td><code>boolean</code></td><td>Controls whether the dialog is open or closed.</td></tr>
            <tr><td><code>setOpen</code></td><td><code>function</code></td><td>Function to update the open state of the dialog.</td></tr>
            <tr><td><code>showModal</code></td><td><code>string</code></td><td>Determines whether to use <code>showModal()</code> or <code>show()</code>.</td></tr>
            <tr><td><code>heading</code></td><td><code>string</code></td><td>The text for the dialog's heading, displayed inside an <code>h2</code> element.</td></tr>
            <tr><td><code>children</code></td><td><code>any</code></td><td>The content of the dialog, displayed beneath the heading.</td></tr>
            <tr><td><code>ariaHidden</code></td><td><code>string</code></td><td>Manages the <code>aria-hidden</code> attribute outside the dialog.</td></tr>
            <tr><td><code>inertAttr</code></td><td><code>string</code></td><td>Manages the <code>inert</code> attribute outside the dialog.</td></tr>
            <tr><td><code>ariaModal</code></td><td><code>string</code></td><td>Sets the <code>aria-modal</code> attribute on the dialog.</td></tr>
            <tr><td><code>focusManagement</code></td><td><code>string</code></td><td>Defines how focus is handled when the dialog opens.</td></tr>
            <tr><td><code>useAutoFocus</code></td><td><code>boolean</code></td><td>Whether autofocus is applied to the element selected by <code>focusManagement</code>.</td></tr>
          </tbody>
        </table>
  
        <h2>Methods</h2>
        <ul>
          <li><code>showModal()</code> – Opens the dialog as a modal, which disables interaction with other page content.</li>
          <li><code>show()</code> – Opens the dialog in a non-modal fashion, allowing interaction with other page content.</li>
        </ul>
  
        <p>
          This component is part of a library of accessible, reusable, and composable React components.
          The props <code>ariaHidden</code>, <code>inertAttr</code>, and <code>ariaModal</code> are useful for testing and enhancing cross-browser accessibility.
        </p>
      </div>
    );
  }
  