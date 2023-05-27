const description = `
ReactModalDialog is a flexible and accessible React component that provides the functionality for creating both standard modal dialogues and sheet dialogues. 

## Features

- Both standard and sheet style dialog types.
- Full keyboard accessibility for interacting with the dialog.
- Modal functionality, which will either trap focus in the dialog when open or not based on the modal prop.
- ARIA attributes for better accessibility.

## Keyboard Accessibility

ReactModalDialog component supports keyboard accessibility. It allows opening and closing of the dialog via the 'Enter' key, and closing via the 'Escape' key. It also includes functionality to trap focus within the dialog when it's open and in modal mode.

## ARIA Usage

ReactModalDialog sets appropriate ARIA roles and properties based on the dialog's state and type. It also manages 'aria-hidden' attributes on sibling elements to the dialog when it's open in modal mode, helping to ensure that screen readers only expose the appropriate content to users.

### Download build files
- **[Development files](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactSheetDialog)

## Props

| Prop Name   | Type   | Description                                                    |
| ----------- | ------ | -------------------------------------------------------------- |
| modal       | boolean| Controls whether the dialog should be presented as a modal dialog.|
| dialogType  | string | Determines the type of dialog ('standard' or 'sheet').         |

## Methods

| Method Name            | Description                                                    |
| ---------------------- | -------------------------------------------------------------- |
| \`openSheet\`       | A method that opens the dialog.                     |
| \`closeSheet\`        | A method that closes the dialog.       |
| \`handleEscKey\`     | A method that listens for 'Escape' keypress and closes the dialog.|
| \`setAriaHiddenOnSiblings\` | A method that manages 'aria-hidden' attributes on elements outside the dialog. |

ReactSheetDialog provides a versatile tool for creating dialog interfaces, with robust support for accessibility and two distinct dialog styles.
`;

export default description;