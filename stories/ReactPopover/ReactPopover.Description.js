const description = `
Popover is a versatile React component that provides an accessible and interactive UI element for displaying additional content. This content can be dynamic or static and can appear upon user interaction.

## Features

- Popover can be triggered by a button.
- Ability to use arrow key navigation for focusable content inside the Popover.
- The Popover's content is highly customizable, allowing for active elements, reference links, or simply static content.
- Enhanced keyboard and focus behavior ensures accessibility and usability.
- ARIA attributes integrated for screen readers and better accessibility.

## Keyboard Accessibility

Popover component supports keyboard accessibility, such as:
- Open the Popover content with 'Enter' when focused on the button.
- Close the Popover with 'Escape' key.
- Navigate through focusable elements using 'Tab' or 'Shift+Tab'.
- Optionally, navigate through active elements using arrow keys.

## ARIA Usage

Popover sets appropriate ARIA roles and properties based on its state and type. If set, it will have a role of 'region' and can also have an 'aria-label' attribute, ensuring that screen readers can interpret the Popover's content correctly.

### Additional Resources
- **[Development files](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactPopover)**

## Props

| Prop Name           | Type    | Description                                                                      |
| --------------------| ------- | -------------------------------------------------------------------------------- |
| withRole            | boolean | Whether to include the 'region' role for the Popover content.                    |
| ariaLabel           | string  | The value of the 'aria-label' attribute for the Popover content.                 |
| useArrowKeys        | boolean | Control if arrow key navigation is enabled for the Popover's active content.     |
| dismissOnClickOutside | boolean | Determine if the Popover should close when clicked outside of it.               |
| contentType         | string  | Determines the content type: 'ActiveContentOnly', 'HelpWithReferenceLink', or 'StaticContentOnly'.|

## Methods

| Method Name          | Description                                                                               |
| -------------------- | ----------------------------------------------------------------------------------------- |
| \`handleClickOutside\` | Listens for mouse clicks outside the Popover to close it.                        |
| \`handleTabKey\`      | Manages focus behavior with the 'Tab' key and closes the Popover when focus moves out.   |
| \`handleEscKey\`      | Listens for the 'Escape' key press to close the Popover.                            |

Popover ensures that additional content is presented in an accessible, user-friendly manner, making it an essential tool for enhancing user interfaces.
`;

export default description;