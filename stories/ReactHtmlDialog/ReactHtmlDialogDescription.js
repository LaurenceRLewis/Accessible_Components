const description = `
The ReactHtmlDialog is a customizable dialog component that utilizes the native HTML <dialog> element.

## Features

- Allows dynamic opening and closing of the dialog based on provided props.
- Enables focusing on the heading when the dialog opens for better accessibility.
- Uses either the showModal() or show() method to open the dialog, which can be set through a prop.
- Provides flexibility to define the content inside the dialog, including heading and additional text or components.
- Utilizes CSS modules for styling to prevent style leaking and conflicts.
- Supports adding aria-hidden and inert attributes for testing support for aria-modal true and inert for better accessibility control.

### Download build files
- **[Development files](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactHtmlDialog)

### Can I Use
"Can I use" provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.
- **[Dialog element](https://caniuse.com/dialog)
- **[HTMLElement API: inert](https://caniuse.com/?search=inert)
- **[Autofocus attribute](https://caniuse.com/?search=autofocus)

## Props

| Prop Name     | Type      | Description                                                 |
| ------------- | --------- | ----------------------------------------------------------- |
| \`open\`         | \`boolean\` | Controls whether the dialog is open or closed.              |
| \`showModal\`    | \`string\`  | Determines whether to use showModal() or show(). Options: 'Yes', 'No'. 'Yes' corresponds to showModal() and 'No' corresponds to show(). |
| \`heading\`      | \`string\`  | The heading of the dialog, displayed inside an h2 element.  |
| \`children\`     | \`any\`     | The content of the dialog, displayed under the heading.     |
| \`ariaHidden\`   | \`string\`  | Controls the aria-hidden attribute on elements outside the dialog. Options: 'true', 'false', 'remove'. The default is 'remove'. |
| \`inertAttr\`    | \`string\`  | Controls the inert attribute on elements outside the dialog. Options: 'Yes', 'No'. The default is 'No'. |
| \`ariaModal\`    | \`string\`  | Determines the value of the aria-modal attribute on the dialog. Options: 'true', 'false', 'remove'. The default is 'remove'. |


## Methods

- \`showModal()\` - Opens the dialog as a modal dialog. The ::backdrop pseudo-element can be used to style the backdrop.
- \`show()\` - Opens the dialog. This method does not make the dialog modal, so it does not prevent interaction with other elements.

This component is part of a library of accessible, reusable, and composable React components. It is designed to be flexible and customizable to ensure it fits the needs of your project.

Props ariaHidden, inertAttr and ariaModal are to test what attributes need to be added to HTML <dialog> to make it accessible across browsers and assistive technologies.
`;

export default description;