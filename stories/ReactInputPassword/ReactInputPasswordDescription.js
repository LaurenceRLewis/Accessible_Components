export default function ReactInputPasswordDescription() {
    return (
      <div>
        <h1>Password Input</h1>
        <p>
          The <strong>Password Input</strong> is a specialized HTML input element designed to securely capture
          password input from users. It obscures the characters entered to ensure privacy and security, showing
          dots or asterisks in place of the actual characters.
        </p>
        <p>
          Native password inputs offer inherent security benefits, such as not allowing the password to be copied
          or viewed as plain text without user interaction.
        </p>
  
        <h2>Features</h2>
        <ul>
          <li>Secure method for password entry.</li>
          <li>Obscures input to maintain user security.</li>
          <li>
            Supports all standard text input methods, including copy, paste, and text selection (though these might
            be restricted for security reasons).
          </li>
          <li>Toggleable visibility to switch between obscured and plaintext password views.</li>
          <li>Callback function for handling input value changes.</li>
        </ul>
  
        <h3>Download Build Files</h3>
        <ul>
          <li>
            <a
              href="https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactInputPassword"
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
              <td><code>includeAriaPressed</code></td>
              <td><code>boolean</code></td>
              <td>Indicates whether to include the <code>aria-pressed</code> attribute.</td>
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
              <td><code>handleToggle</code></td>
              <td>A method that toggles the password visibility between obscured and plain.</td>
            </tr>
          </tbody>
        </table>
  
        <p>
          The Password Input component prioritizes security and usability, allowing users to confidently input their
          passwords while also having the option to check their input for any errors.
        </p>
      </div>
    );
  }
  