export default function TabsAccordionDescription() {
    return (
      <div>
        <h1>TabsAccordion</h1>
        <p>
          The <strong>TabsAccordion</strong> widget is a sophisticated component developed in React that displays content in a tabular or accordion view depending on the viewport size. It provides a user-friendly way to condense a lot of information into a small space.
        </p>
  
        <h2>Features</h2>
        <ul>
          <li>Transition from tabs to accordion based on the viewport size.</li>
          <li>Supports customizable colors and styles for both tabs and accordion.</li>
          <li>Interactive keyboard navigation for both tab and accordion view.</li>
          <li>Customizable activation triggers: manual (via enter/space keys) or automated.</li>
          <li>An array of objects each containing an ID, title, and content for tab data.</li>
        </ul>
  
        <h2>Keyboard Accessibility</h2>
        <p>The TabsAccordion widget ensures keyboard accessibility for easy control and interaction in both accordion and tab views. Here are the keyboard controls:</p>
        <ul>
          <li><kbd>Enter</kbd> / <kbd>Space</kbd> — Toggles the expansion of the accordion item or activates the tab.</li>
          <li><kbd>Arrow Right</kbd> / <kbd>Arrow Left</kbd> — Moves focus to the next/previous tab.</li>
          <li><kbd>Home</kbd> — Moves focus to the first tab.</li>
          <li><kbd>End</kbd> — Moves focus to the last tab.</li>
        </ul>
  
        <h2>Download Build Files</h2>
        <p>
          <a
            href="https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactAccordionTabs"
            target="_blank"
            rel="noopener noreferrer"
          >
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
              <td><code>tabs</code></td>
              <td><code>array</code></td>
              <td>An array of objects with 'id', 'title', and 'content' for each tab.</td>
            </tr>
            <tr>
              <td><code>tabPanelTabindex</code></td>
              <td><code>boolean</code></td>
              <td>Determines if the tab panel can be focused directly.</td>
            </tr>
            <tr>
              <td><code>triggerActivation</code></td>
              <td><code>string</code></td>
              <td>Determines if tab activation is "manual" or "automated".</td>
            </tr>
            <tr>
              <td><code>textColor</code></td>
              <td><code>string</code></td>
              <td>The color of the text in tabs.</td>
            </tr>
            <tr>
              <td><code>tabBackground</code></td>
              <td><code>object</code></td>
              <td>An object specifying the default and selected background color of tabs.</td>
            </tr>
            <tr>
              <td><code>viewportThreshold</code></td>
              <td><code>number</code></td>
              <td>The width below which the component switches to accordion view.</td>
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
              <td>Handles the keydown event on the accordion or tab.</td>
            </tr>
            <tr>
              <td><code>handleWindowResize</code></td>
              <td>Updates the component view based on window size.</td>
            </tr>
          </tbody>
        </table>
  
        <p>
          The TabsAccordion component ensures a seamless user experience for both keyboard interactions and responsive design, making it accessible and adaptable to different device sizes.
        </p>
      </div>
    );
  }
  