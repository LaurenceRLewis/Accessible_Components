export default function ReactRadioButtonGroupDescription() {
  return (
    <div>
      <h1>React Radio Button Group</h1>
      <p>
        The <strong>React Radio Button Group</strong> renders a group of radio buttons within a <code>fieldset</code> with a <code>legend</code>.
      </p>

      <h2>Features</h2>
      <ul>
        <li>Supports custom group name (legend).</li>
        <li>Supports custom radio button labels.</li>
        <li>Allows specifying the number of radio buttons in the group.</li>
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
            <td>The name of the radio button group. This can be edited in the Controls UI.</td>
            <td><code>'Group Name'</code></td>
          </tr>
          <tr>
            <td><code>labels</code></td>
            <td><code>array</code></td>
            <td>An array of labels for the radio buttons. Each label corresponds to a radio button in the group.</td>
            <td><code>['Label 1', 'Label 2']</code></td>
          </tr>
        </tbody>
      </table>

      <h2>Example</h2>
      <pre>
        <code>{`<ReactRadioButtonGroup
  groupName="Example Group"
  labels={['Label 1', 'Label 2', 'Label 3']}
/>`}</code>
      </pre>
      <p>
        This will render a radio button group with a custom group name (legend) <strong>"Example Group"</strong> and three radio buttons with the labels <strong>"Label 1"</strong>, <strong>"Label 2"</strong>, and <strong>"Label 3"</strong>.
      </p>
      <p>
        If you want to specify a different number of radio buttons, you can provide an array of custom labels through the <code>labels</code> prop.
      </p>

      <h2>Adding More Radio Buttons in Code</h2>
      <p>
        To add more radio buttons, extend the <code>labels</code> array with more label strings and update the <code>numberOfRadioButtons</code> constant accordingly.
      </p>

      <pre>
        <code>{`const numberOfRadioButtons = 5;`}</code>
      </pre>

      <pre>
        <code>{`<ReactRadioButtonGroup
  groupName="Example Group"
  labels={['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5']}
/>`}</code>
      </pre>

      <p>
        This will create a radio button group with five radio buttons, labelled from "Label 1" to "Label 5". The maximum number of radio buttons that can be added to the group is <strong>10</strong>.
      </p>

      <h2>Customising Labels in the Storybook Controls UI</h2>
      <p>
        Once you've added more radio buttons in your code, you can customise the labels for these radio buttons directly from the Storybook Controls UI.
        Each radio button added will render an editable text control to update its label.
      </p>
    </div>
  );
}
