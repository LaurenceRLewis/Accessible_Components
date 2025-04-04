export default function ReactDetailsDisclosureDescription() {
    return (
      <div>
        <h1>HTML Details/Summary</h1>
        <p>
          The <strong>HTML Details/Summary</strong> component provides users with a collapsible content area.
          When clicked, the content within the <code>&lt;details&gt;</code> tag is shown or hidden.
        </p>
  
        <h2>Features</h2>
        <ul>
          <li>Provides collapsible functionality using HTML Details/Summary</li>
          <li>
            The component can be controlled to start in an open state using the <code>isOpen</code> prop
          </li>
        </ul>
  
        <h2>HTML Details/Summary</h2>
        <p>
          HTML Details/Summary is a native way to create collapsible sections on a web page. It uses the{" "}
          <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> elements to provide a clickable
          area that can show or hide content within the details element. It's a straightforward solution
          for simpler use cases.
        </p>
  
        <h3>Download build files</h3>
        <ul>
          <li>
            <a
              href="https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactDetailsDisclosure"
              target="_blank"
              rel="noopener noreferrer"
            >
              Development files
            </a>
          </li>
        </ul>
  
        <h3>Can I Use</h3>
        <p>
          "Can I use" provides up-to-date browser support tables for front-end web technologies:
        </p>
        <ul>
          <li>
            <a
              href="https://caniuse.com/?search=Details%20%26%20Summary%20elements"
              target="_blank"
              rel="noopener noreferrer"
            >
              Details & Summary elements
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
              <td><code>isOpen</code></td>
              <td><code>boolean</code></td>
              <td>Determines whether the details are open initially. Defaults to false.</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  