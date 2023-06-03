const description = `
The ReactComboboxBoth is a flexible implementation of the ARIA Combobox Widget with both Autocomplete functionality: "inline" and "list". It provides users with a dropdown list of options that can be filtered by typing into the text field. As the user types, the component provides predictive text functionality.

## Features

- Provides both "inline" and "list" Autocomplete functionality.
- Supports keyboard navigation for easy control and interaction.
- Announces changes to screen readers using ARIA properties.
- Includes help text and result count for better user experience.
- Help text visibility can be controlled via a prop.
- Uses a pre-defined list of Australian towns and cities for autocomplete suggestions.
- \`aria-controls\` attribute dynamically updates its value based on the state of the options list.
- "Backspace" key handling for predictive text and option filtering.

### Keyboard Accessibility

Users can navigate and interact with the ReactComboboxBoth using the following keyboard controls:

- **ArrowDown**: Moves visual focus to the next item in the options list. DOM focus remains on the textbox.
- **ArrowUp**: Moves visual focus to the previous item in the options list. DOM focus remains on the textbox.
- **Enter**: Selects the focused option and closes the options list.
- **Escape**: Closes the options list if it's open, and clears the input if the list is closed.
- **Backspace**: Handles the deletion of characters from the input and updates predictive text accordingly.

## ARIA Announcements

The component uses ARIA properties to create a live region. This live region announces the count of search results to the user after each search or when the search is cleared. This feature is particularly useful for screen reader users who would otherwise have no way of knowing the result count without navigating to the part of the page where it is displayed.

### Download build files
- **[Development files](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactComboboxBoth)
- **[ariaAnnounce](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/.storybook/utils)

## Props

| Prop Name     | Type      | Description                                        |
| ------------- | --------- | -------------------------------------------------- |
| \`isTechnology\` | \`string\` | Determines which technology is used for the component. Can be either "ARIA" for ARIA Combobox or "HTML" for HTML Datalist. Defaults to "ARIA".|
| \`showHelpText\` | \`string\` | Determines whether the help text is visible. Defaults to false. |

## Methods

| Method Name         | Description                                                        |
| ------------------- | ------------------------------------------------------------------ |
| \`handleOptionClick\` | Handles the click event on an option, setting it as the input value and closing the options list. |
| \`handleInputChange\` | Handles changes to the input value, updating the options list.     |
| \`handleKeyPress\` | Handles key events for navigation and selection within the options list. |

This widget offers a user-friendly and accessible way to add a combobox with autocomplete functionality to your applications. The component is flexible, providing both "inline" and "list" autocomplete functionality, depending on your requirements.

`;

export default description;