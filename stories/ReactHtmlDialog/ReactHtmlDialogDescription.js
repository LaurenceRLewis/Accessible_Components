const description = `
The ReactHtmlDialog is a customizable dialog component that leverages the native HTML <dialog> element for creating modals and dialogs within React applications.

## Features

- Dynamically controls the opening and closing of the dialog based on the \`open\` prop.
- Focus management options for accessibility, allowing the focus to be set on the heading, a specific container, or the first focusable element when the dialog opens.
- Utilizes either the showModal() or show() method to open the dialog based on the \`showModal\` prop.
- Flexibility to define content inside the dialog, including heading, body, and additional components or text.
- Applies CSS modules for styling to prevent style leakage and ensure component encapsulation.
- Supports ARIA attributes such as \`aria-hidden\`, \`inert\`, and \`aria-modal\` for enhanced accessibility and compatibility with screen readers and assistive technologies.

### Download build files
- **[Development files](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactHtmlDialog)**

### Can I Use
"Can I use" provides up-to-date browser support tables for front-end web technologies on desktop and mobile web browsers.
- **[Dialog element](https://caniuse.com/dialog)**
- **[HTMLElement API: inert](https://caniuse.com/?search=inert)**
- **[Autofocus attribute](https://caniuse.com/?search=autofocus)**

## Props

| Prop Name        | Type      | Description                                                  |
|------------------|-----------|--------------------------------------------------------------|
| \`open\`            | \`boolean\` | Controls whether the dialog is open or closed.               |
| \`setOpen\`        | \`function\`| Function to update the open state of the dialog.             |
| \`showModal\`       | \`string\`  | Determines whether to use showModal() or show(). Options are 'Yes' for showModal() and 'No' for show(). |
| \`heading\`         | \`string\`  | The text for the dialog's heading, displayed inside an h2 element. |
| \`children\`        | \`any\`     | The content of the dialog, displayed beneath the heading.    |
| \`ariaHidden\`      | \`string\`  | Manages the aria-hidden attribute on elements outside the dialog. Options: 'true', 'false', 'remove'. |
| \`inertAttr\`       | \`string\`  | Manages the inert attribute on elements outside the dialog. Options: 'Yes', 'No'. |
| \`ariaModal\`       | \`string\`  | Sets the aria-modal attribute on the dialog. Options: 'true', 'false', 'remove'. |
| \`focusManagement\` | \`string\`  | Determines how focus is managed when the dialog opens. Options: 'Focus is not set', 'focus is set to the dialog heading', 'focus is set to the new div container', 'focus is set to the first focusable element inside the dialog'. |
| \`useAutoFocus\`    | \`boolean\` | Determines whether autofocus is applied to the element specified by the focusManagement prop. When true, autofocus is applied, and tabindex is set to '-1' if the element is not typically focusable. |

## Methods

- \`showModal()\` - Opens the dialog as a modal, which disables interaction with other page content.
- \`show()\` - Opens the dialog in a non-modal fashion, allowing interaction with other page content.

This component is part of a library of accessible, reusable, and composable React components designed to be flexible and customizable to fit the needs of your project.

The props \`ariaHidden\`, \`inertAttr\`, and \`ariaModal\` are used to test which attributes need to be added to the HTML <dialog> element to make it accessible across various browsers and assistive technologies.
`;

export default description;