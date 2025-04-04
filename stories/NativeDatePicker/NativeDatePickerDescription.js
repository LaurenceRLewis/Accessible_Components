export default function NativeDatePickerDescription() {
    return (
      <div>
        <h1>HTML Datepicker</h1>
        <p>
          The <strong>HTML Datepicker</strong> component allows users to select a date or date and time
          using the native HTML <code>&lt;input type="date"&gt;</code> or <code>&lt;input type="datetime-local"&gt;</code> controls.
        </p>
  
        <h2>Features</h2>
        <ul>
          <li>Native date or datetime input</li>
          <li>Toggle input mode with the <code>mode</code> prop</li>
          <li>Localized confirmation using <code>@internationalized/date</code></li>
          <li>Responsive to browser locale (e.g., <code>en-AU</code> vs <code>en-US</code>)</li>
        </ul>
  
        <h2>Localization Behavior</h2>
        <p>The following formats are used for date messaging based on locale:</p>
        <ul>
          <li><code>en</code>, <code>en-AU</code>, <code>en-GB</code>: <strong>dd/mm/yyyy</strong></li>
          <li><code>en-US</code>, <code>ja-JP</code>: <strong>yyyy/mm/dd</strong></li>
        </ul>
  
        <h2>Controls</h2>
        <ul>
          <li><strong>Set Date</strong>: Confirms the selected value</li>
          <li><strong>Reset to Today</strong>: Resets the picker to the current date</li>
        </ul>
  
        <h2>Accessibility</h2>
        <ul>
          <li>Labels are properly associated using <code>htmlFor</code></li>
          <li>Keyboard controls are documented below the picker</li>
        </ul>
      </div>
    );
  }
  