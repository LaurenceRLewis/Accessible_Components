export default function TabsAccordionDescription() {
    return (
      <div>
        <h1>TabsAccordion</h1>
        <p>
          The <strong>TabsAccordion</strong> widget is a sophisticated component developed in React that displays
          content in a tabular or accordion view depending on the viewport size. It provides a user-friendly way
          to condense a lot of information into a small space.
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
        <p>The TabsAccordion widget ensures keyboard accessibility for easy control and interaction in both views:</p>
        <ul>
          <li><kbd>Enter</kbd> / <kbd>Space</kbd>: Toggle accordion item or activate tab</li>
          <li><kbd>Arrow Right</kbd> / <kbd>Arrow Left</kbd>: Navigate between tabs</li>
          <li><kbd>Home</kbd>: Focus the first tab</li>
          <li><kbd>End</kbd>: Focus the last tab</li>
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
            <tr><td><code>tabs</code></td><td><code>array</code></td><td>Array with <code>id</code>, <code>title</code>, and <code>content</code>.</td></tr>
            <tr><td><code>tabPanelTabindex</code></td><td><code>boolean</code></td><td>Controls if tab panel is directly focusable.</td></tr>
            <tr><td><code>triggerActivation</code></td><td><code>string</code></td><td>Set tab activation mode ("manual" or "automated").</td></tr>
            <tr><td><code>textColor</code></td><td><code>string</code></td><td>Custom text color.</td></tr>
            <tr><td><code>tabBackground</code></td><td><code>object</code></td><td>Customize tab background styles.</td></tr>
            <tr><td><code>viewportThreshold</code></td><td><code>number</code></td><td>Switch to accordion view below this width.</td></tr>
          </tbody>
        </table>
  
        <h2>Methods</h2>
        <table>
          <thead>
            <tr><th>Method Name</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>handleKeyDown</code></td><td>Handles key events on tabs/accordion.</td></tr>
            <tr><td><code>handleWindowResize</code></td><td>Adjusts view based on viewport width.</td></tr>
          </tbody>
        </table>
  
        <p>
          This component ensures a seamless and accessible experience for keyboard users and adapts across different screen sizes.
        </p>
      </div>
    );
  }
  