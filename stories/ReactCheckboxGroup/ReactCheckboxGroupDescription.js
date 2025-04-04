export default function ReactCheckboxGroupDescription() {
  return (
    <div>
      <h1>React Checkbox Group</h1>
      <p>
        The <strong>React Checkbox Group</strong> component renders a set of checkboxes within a{' '}
        <code>&lt;fieldset&gt;</code> with a specified legend.
      </p>

      <h2>Features</h2>
      <ul>
        <li>Configurable group name (legend)</li>
        <li>Dynamically generated checkbox labels</li>
        <li>
          Define the total number of checkboxes in the group through the Storybook <em>args</em>
        </li>
      </ul>

      <h2>Props</h2>
      <table>
        <thead>
          <tr>
            <th>Prop Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>groupName</code></td>
            <td><code>string</code></td>
            <td>The name of the checkbox group (legend)</td>
            <td><code>'Group Name'</code></td>
          </tr>
          <tr>
            <td><code>labels</code></td>
            <td><code>array</code></td>
            <td>An array of labels for the checkboxes</td>
            <td><code>['Label 1', 'Label 2']</code></td>
          </tr>
        </tbody>
      </table>

      <h2>Example</h2>
      <pre style={{ background: '#f9f9f9', padding: '1rem', overflow: 'auto' }}>
        <code>
{`<ReactCheckboxGroup
  groupName="Example Group"
  labels={['Label 1', 'Label 2', 'Label 3']}
/>`}
        </code>
      </pre>
      <p>
        This example demonstrates a checkbox group with a custom group name (legend){" "}
        <strong>"Example Group"</strong>, and three checkboxes labeled <em>Label 1</em>,{" "}
        <em>Label 2</em>, and <em>Label 3</em>.
      </p>
      <p>
        To customize the number and labels of checkboxes, provide an array of labels via the{" "}
        <code>labels</code> prop in Storybook's Controls UI.
      </p>

      <h2>Adding More Checkboxes in Code</h2>
      <p>
        The number of checkboxes rendered in Storybook is typically controlled by a variable like:
      </p>
      <pre style={{ background: '#f9f9f9', padding: '1rem', overflow: 'auto' }}>
        <code>{`const numberOfCheckboxes = 5;`}</code>
      </pre>
      <p>This will render five checkboxes. Their labels can then be set via the Storybook UI.</p>

      <h2>Customizing Labels in Storybook Controls</h2>
      <p>
        Once you've defined how many checkboxes to display, you can customize each one’s label
        directly from Storybook's Controls panel. Each label is editable through the UI for easy
        testing and review.
      </p>
    </div>
  );
}
