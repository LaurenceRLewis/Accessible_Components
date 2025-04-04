export default function ReactHtmlSliderDescription() {
    return (
      <div>
        <h1>HTML Slider (type="range")</h1>
        <p>
          The <strong>HTML Slider</strong> (<code>type="range"</code>) is a standard HTML input element
          that allows users to select a value within a specified range. This native HTML control is designed
          for entering numeric input and provides a user-friendly interface for controlling numeric input.
        </p>
        <p>
          The HTML range input type automatically supports keyboard interactions, such as the use of arrow keys
          to increment or decrement the value, <kbd>Home</kbd>/<kbd>End</kbd> keys to set the value to the min/max,
          and <kbd>Page Up</kbd>/<kbd>Page Down</kbd> for larger increments. This behavior is part of the HTML specification
          for the range input type and is supported across all modern browsers.
        </p>
  
        <h2>Features</h2>
        <ul>
          <li>Support for selecting a value within a range.</li>
          <li>Customizable minimum and maximum values.</li>
          <li>Incremental step size for fine-grained control.</li>
          <li>Optional default value for initial selection.</li>
          <li>Callback function for handling value changes.</li>
        </ul>
  
        <h3>Download Build Files</h3>
        <ul>
          <li>
            <a href="https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactHtmlSlider" target="_blank" rel="noopener noreferrer">
              Development files
            </a>
          </li>
        </ul>
  
        <h3>Can I Use</h3>
        <ul>
          <li>
            <a href="https://caniuse.com/?search=type%3Drange" target="_blank" rel="noopener noreferrer">
              Range input type
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
            <tr><td><code>min</code></td><td><code>number</code></td><td>The minimum allowed value for the slider.</td></tr>
            <tr><td><code>max</code></td><td><code>number</code></td><td>The maximum allowed value for the slider.</td></tr>
            <tr><td><code>step</code></td><td><code>number</code></td><td>The increment value for each step of the slider.</td></tr>
            <tr><td><code>defaultValue</code></td><td><code>number</code></td><td>The default value of the slider.</td></tr>
            <tr><td><code>onChange</code></td><td><code>function</code></td><td>A callback function triggered when the slider value changes.</td></tr>
          </tbody>
        </table>
  
        <h2>HTML Slider Props</h2>
        <table>
          <thead>
            <tr>
              <th>Prop Name</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>htmlMin</code></td><td><code>number</code></td><td>The minimum allowed value for the HTML slider.</td></tr>
            <tr><td><code>htmlMax</code></td><td><code>number</code></td><td>The maximum allowed value for the HTML slider.</td></tr>
            <tr><td><code>htmlStep</code></td><td><code>number</code></td><td>The increment value for each step of the HTML slider.</td></tr>
            <tr><td><code>htmlDefaultValue</code></td><td><code>number</code></td><td>The default value of the HTML slider.</td></tr>
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
            <tr><td><code>handleChange</code></td><td>A method that handles the change event of the slider.</td></tr>
          </tbody>
        </table>
  
        <p>
          The HTML Slider component ensures a seamless user experience for keyboard interactions, making it accessible
          and easy to use across different devices.
        </p>
      </div>
    );
  }
  