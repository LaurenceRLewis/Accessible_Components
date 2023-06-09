const description = `
React Accordion is a custom accordion component that allows users to expand and collapse content sections. It provides a user-friendly interface for toggling the visibility of the content.

## Features

- Support for multiple accordion items.
- Option to allow multiple items to be expanded at once.
- Keyboard navigation for easy control and interaction.
- Customizable chevron position to either left or right.
- Option to contain accordion in a named landmark region.

## Keyboard Accessibility

The React Accordion component ensures keyboard accessibility for easy control and interaction. Users can navigate and interact with the accordion using the following keyboard controls:

- **Enter/Space**: Toggles the expansion of the accordion item.
- **Arrow Down/Up**: Moves focus to the next/previous accordion item.
- **Home**: Moves focus to the first accordion item.
- **End**: Moves focus to the last accordion item.

The React Accordion component provides a user-friendly and accessible way to manage multiple content sections in a compact view.

### Download build files
- **[Development files](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactAccordion)

## Props

| Prop Name               | Type       | Description                                                       |
| ----------------------- | ---------- | ----------------------------------------------------------------- |
| \`items\`               | \`array\`  | An array of accordion items. Each item is an object with title and content. |
| \`groupName\`           | \`string\` | The group name of the accordion.                                  |
| \`multiExpand\`         | \`boolean\` | Determines if multiple accordion items can be open at once.       |
| \`chevronPosition\`     | \`string\` | The position of the chevron. Can be 'left' or 'right'.           |
| \`NamedRegionContainer\`| \`select\` | Specifies if the accordion is contained in a named landmark region. |

## Methods

| Method Name         | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| \`onTitleClick\`    | A method that handles the click event on the accordion title.   |
| \`onTitleKeyDown\`  | A method that handles the keydown event on the accordion title. |

The React Accordion component ensures a seamless user experience for keyboard interactions, making it accessible and easy to use.

`;

export default description;