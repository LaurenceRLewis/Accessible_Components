export default function ReactARIASliderDescription() {
    return (
      <div>
        <h1>Slider</h1>
        <p>
          <strong>Slider</strong> is a custom component that allows users to select a value within a
          specified range. It provides a user-friendly interface for controlling numeric input.
        </p>
  
        <h2>Features</h2>
        <ul>
          <li>Support for selecting a value within a range</li>
          <li>Customizable minimum and maximum values</li>
          <li>Incremental step size for fine-grained control</li>
          <li>Optional default value for initial selection</li>
          <li>Direct input through a number field for precise control</li>
          <li>Error handling for out-of-range values</li>
          <li>Callback function for handling value changes</li>
          <li>Accessibility improvements with increment and decrement buttons</li>
        </ul>
  
        <h2>Keyboard and Button Accessibility</h2>
        <ul>
          <li><strong>Left Arrow</strong> or <strong>Minus Button</strong>: Decrease by one step</li>
          <li><strong>Right Arrow</strong> or <strong>Plus Button</strong>: Increase by one step</li>
          <li><strong>Home</strong>: Set to minimum</li>
          <li><strong>End</strong>: Set to maximum</li>
          <li><strong>Page Up</strong>: Increase by larger increment</li>
          <li><strong>Page Down</strong>: Decrease by larger increment</li>
        </ul>
  
        <p>
          The Slider component provides a user-friendly and accessible way to select values within a
          specified range.
        </p>
  
        <h3>Download build files</h3>
        <ul>
          <li>
            <a
              href="https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactARIASlider"
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
            <tr><td><code>min</code></td><td><code>number</code></td><td>Minimum allowed value</td></tr>
            <tr><td><code>max</code></td><td><code>number</code></td><td>Maximum allowed value</td></tr>
            <tr><td><code>step</code></td><td><code>number</code></td><td>Increment step value</td></tr>
            <tr><td><code>defaultValue</code></td><td><code>number</code></td><td>Initial default value</td></tr>
            <tr><td><code>onChange</code></td><td><code>function</code></td><td>Callback on value change</td></tr>
          </tbody>
        </table>
  
        <h2>ARIA Slider Props</h2>
        <table>
          <thead>
            <tr>
              <th>Prop Name</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>ariaMin</code></td><td><code>number</code></td><td>ARIA minimum value</td></tr>
            <tr><td><code>ariaMax</code></td><td><code>number</code></td><td>ARIA maximum value</td></tr>
            <tr><td><code>ariaStep</code></td><td><code>number</code></td><td>ARIA step size</td></tr>
            <tr><td><code>ariaDefaultValue</code></td><td><code>number</code></td><td>ARIA default value</td></tr>
            <tr><td><code>getAriaValueText</code></td><td><code>function</code></td><td>Returns formatted aria-valuetext string</td></tr>
            <tr><td><code>inputError</code></td><td><code>string</code></td><td>Error message for out-of-range input</td></tr>
          </tbody>
        </table>
  
        <h2>Methods</h2>
        <table>
          <thead>
            <tr><th>Method Name</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>handleChange</code></td><td>Handles slider value change</td></tr>
            <tr><td><code>handleTouchMove</code></td><td>Handles touch move event</td></tr>
            <tr><td><code>handleTouchEnd</code></td><td>Handles touch end event</td></tr>
            <tr><td><code>handleTouchStart</code></td><td>Handles touch start event</td></tr>
            <tr><td><code>handleMouseDown</code></td><td>Handles mouse down interaction</td></tr>
            <tr><td><code>handleMouseMove</code></td><td>Handles mouse movement</td></tr>
            <tr><td><code>handleMouseUp</code></td><td>Handles mouse release</td></tr>
            <tr><td><code>handleIncrement</code></td><td>Increases value using button</td></tr>
            <tr><td><code>handleDecrement</code></td><td>Decreases value using button</td></tr>
          </tbody>
        </table>
  
        <h2>Touch and Mouse Interaction</h2>
        <ul>
          <li><strong>Touchmove</strong>: Updates value while sliding finger</li>
          <li><strong>Touchend</strong>: Finalizes value on release</li>
          <li><strong>Touchstart</strong>: Begins interaction</li>
          <li><strong>Mousedown</strong>: Begins mouse drag</li>
          <li><strong>Mousemove</strong>: Updates value while dragging</li>
          <li><strong>Mouseup</strong>: Finalizes value</li>
        </ul>
  
        <p>
          Supports <a href="https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements" target="_blank" rel="noopener noreferrer">
            WCAG 2.2 2.5.7 Dragging Movements (AA)
          </a> via button alternatives.
        </p>
      </div>
    );
  }
  