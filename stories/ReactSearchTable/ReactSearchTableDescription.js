export default function ReactSearchTableDescription() {
    return (
      <div>
        <h1>React Search Table</h1>
        <p>
          <strong>React Search Table</strong> is a table that can be filtered using a search input.
          This allows users to dynamically narrow down table results based on their query.
          The widget is robust and includes features such as keyboard accessibility and ARIA announcements
          for improved usability and accessibility.
        </p>
        <p>
          The component now also allows control of ARIA properties via props, enabling
          more fine-grained accessibility configurations.
        </p>
        <p>
          The default configuration uses the ARIA <code>search</code> role on the container.
          The input is set to <code>type="search"</code>, but <code>role="searchbox"</code> is not implemented by default.
        </p>
        <p>
          <code>type="search"</code> behaves identically to <code>type="text"</code>, but allows
          for different default styling. <code>role="searchbox"</code> is not recommended when
          <code>role="search"</code> is already implemented on the container.
        </p>
  
        <h2>Features</h2>
        <ul>
          <li>Filter table data based on search queries.</li>
          <li>Display result count vs total rows.</li>
          <li>Clear search to reset results.</li>
          <li>ARIA live announcements for result changes.</li>
          <li>Keyboard accessible interactions for search and clear.</li>
          <li>ARIA roles and input type are customizable via props.</li>
        </ul>
  
        <h2>Keyboard Accessibility</h2>
        <p>
          The component listens for the <kbd>Enter</kbd> key in the input field and
          activates the search when pressed.
        </p>
  
        <h2>ARIA Announcements</h2>
        <p>
          <code>ariaAnnounce</code> is used to dynamically inject a live region into the DOM,
          providing screen reader users with the result count after each search or when cleared.
        </p>
  
        <h3>Download build files</h3>
        <ul>
          <li>
            <a href="https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactSearchTable" target="_blank" rel="noopener noreferrer">
              Development files
            </a>
          </li>
          <li>
            <a href="https://github.com/LaurenceRLewis/Accessible_Components/tree/main/.storybook/utils" target="_blank" rel="noopener noreferrer">
              ariaAnnounce utility
            </a>
          </li>
        </ul>
  
        <h2>Props</h2>
        <ul>
          <li><code>containerRole</code>: ARIA role for the container (default: <code>search</code>)</li>
          <li><code>inputType</code>: Input field type (default: <code>text</code>)</li>
          <li><code>inputRole</code>: ARIA role for the input (default: <code>searchbox</code>)</li>
        </ul>
  
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
              <td><code>handleSearch</code></td>
              <td>Handles the search logic when user submits a query.</td>
            </tr>
            <tr>
              <td><code>handleClear</code></td>
              <td>Clears the input and resets the results.</td>
            </tr>
            <tr>
              <td><code>handleKeyPress</code></td>
              <td>Triggers search on pressing <kbd>Enter</kbd> in the input.</td>
            </tr>
            <tr>
              <td><code>handleSearchInputChange</code></td>
              <td>Updates the state of the search input as the user types.</td>
            </tr>
          </tbody>
        </table>
  
        <p>
          <strong>ReactSearchTable</strong> provides a seamless and accessible experience for both
          keyboard and mouse users, making it essential for data-driven UIs.
        </p>
      </div>
    );
  }
  