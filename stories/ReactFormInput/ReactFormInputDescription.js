const description = `
The ReactFormInput is a customisable input form field component. 

## Features

- Generates a unique ID for each rendered instance for compliance with accessibility standards.
- Allows setting of input label through a prop, with a default value.
- Supports a variety of input types (text, email, password) which can be set through a prop.
- Allows setting of HTML autocomplete attribute from a predefined list of options through a prop.
- Provides WCAG compliant focus visible styles.
- Includes optional help text that can be controlled via a prop.

## Props

| Prop Name         | Type      | Description                                           |
| ----------------- | --------- | ----------------------------------------------------- |
| \`labelName\`      | \`string\`  | Sets the label for the input field. Defaults to 'Input Name'.|
| \`autoCompleteList\` | \`array\`   | Sets the HTML autocomplete attribute value from a list of predefined options. If not set, the attribute is not added.|
| \`inputType\`       | \`string\`  | Sets the input type (text, email, password). Defaults to 'text'. |
| \`helpText\`        | \`string\`  | Optional help text displayed under the label. |

This component is part of a library of accessible, reusable, and composable React components. It is designed to be flexible and customisable to ensure it fits the needs of your project.

`;

export default description;