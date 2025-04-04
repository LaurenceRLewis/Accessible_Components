export default function HTMLDatalistDescription() {
    return (
      <div>
        <h1>HTML Datalist</h1>
        <p>
          The <strong>HTML Datalist</strong> provides users with a dropdown list of options that can be filtered by typing into the text field.
        </p>
  
        <h2>Features</h2>
        <ul>
          <li>Provides Autocomplete functionality using HTML Datalist</li>
          <li>Uses a pre-defined list of Australian towns and cities for autocomplete suggestions</li>
          <li>Optional Help Text</li>
        </ul>
  
        <h2>HTML Datalist</h2>
        <p>
          HTML Datalist is a simple and native way to add autocomplete functionality to an input field. It uses the <code>&lt;datalist&gt;</code> element, which works in conjunction with an <code>&lt;input&gt;</code> to provide a dropdown of options. These options can be static or dynamically generated, and are filtered by the browser as the user types into the input. It's a straightforward solution for simpler use cases.
        </p>
  
        <h3>Download build files</h3>
        <ul>
          <li>
            <a
              href="https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactComboboxDataList"
              target="_blank"
              rel="noopener noreferrer"
            >
              Development files
            </a>
          </li>
        </ul>
  
        <h3>Can I Use</h3>
        <p>
          "Can I use" provides up-to-date browser support tables for front-end web technologies on desktop and mobile browsers.
        </p>
        <ul>
          <li>
            <a
              href="https://caniuse.com/?search=datalist"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datalist element on Can I Use
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
              <td><code>showHelpText</code></td>
              <td><code>string</code></td>
              <td>Determines whether the help text is visible. Defaults to 'No'.</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  