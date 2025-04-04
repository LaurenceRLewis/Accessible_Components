export default function ReactFormInputDescription() {
    return (
      <div>
        <h1>React Form Input</h1>
        <p>
          The <strong>ReactFormInput</strong> is a customizable input form field component.
        </p>
  
        <h2>Features</h2>
        <ul>
          <li>Generates a unique ID for each rendered instance for compliance with accessibility standards.</li>
          <li>Allows setting of input label through a prop, with a default value.</li>
          <li>Supports a variety of input types (<code>text</code>, <code>email</code>, <code>password</code>) which can be set through a prop.</li>
          <li>Allows setting of HTML <code>autocomplete</code> attribute from a predefined list of options through a prop.</li>
          <li>Provides WCAG compliant focus-visible styles.</li>
          <li>Includes optional help text that can be controlled via a prop.</li>
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
              <td><code>labelName</code></td>
              <td><code>string</code></td>
              <td>Sets the label for the input field. Defaults to <code>'Input Name'</code>.</td>
            </tr>
            <tr>
              <td><code>autoCompleteList</code></td>
              <td><code>array</code></td>
              <td>
                Sets the HTML <code>autocomplete</code> attribute value from a list of predefined options.
                If not set, the attribute is not added.
              </td>
            </tr>
            <tr>
              <td><code>inputType</code></td>
              <td><code>string</code></td>
              <td>Sets the input type (<code>text</code>, <code>email</code>, <code>password</code>). Defaults to <code>'text'</code>.</td>
            </tr>
            <tr>
              <td><code>helpText</code></td>
              <td><code>string</code></td>
              <td>Optional help text displayed under the label.</td>
            </tr>
          </tbody>
        </table>
  
        <p>
          This component is part of a library of accessible, reusable, and composable React components.
          It is designed to be flexible and customizable to ensure it fits the needs of your project.
        </p>
      </div>
    );
  }
  