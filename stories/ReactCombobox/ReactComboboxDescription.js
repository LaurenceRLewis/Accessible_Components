const description = `
The ReactCombobox is a flexible implementation of the ARIA Combobox Widget, providing users with a dropdown list of options that can be filtered by typing into the text field.

## Features

- Provides Autocomplete functionality.
- Supports keyboard navigation for easy control and interaction.
- Announces changes to screen readers using ARIA properties.
- Includes help text and result count for better user experience.
- Help text visibility can be controlled via a prop.
- Uses a pre-defined list of Australian towns and cities for autocomplete suggestions.
- \`aria-controls\` attribute dynamically updates its value based on the state of the options list.

### Keyboard Accessibility

Users can navigate and interact with the ReactCombobox using the following keyboard controls:

- **ArrowDown**: If the textbox is not empty and the listbox is displayed, moves visual focus to the first suggested value. If the textbox is empty and the listbox is not displayed, opens the listbox and moves visual focus to the first option. In both cases, DOM focus remains on the textbox.
- **ArrowUp**: Moves visual focus to the previous item in the options list. If the textbox is empty and the listbox is not displayed, opens the listbox and moves visual focus to the last option. In both cases, DOM focus remains on the textbox.
- **Alt + Down Arrow**: Opens the listbox without moving focus or changing selection.
- **Enter**: Selects the focused option and closes the options list.
- **Escape**: Closes the options list if it's open, and clears the input if the list is closed.
- **Home/End**: Moves visual focus to the beginning/end of the textbox.

## ARIA Announcements

The ReactCombobox uses the \`ariaAnnounce\` function to create an ARIA live region. This live region announces the count of search results to the user after each search or when the search is cleared. This feature is particularly useful for screen reader users who would otherwise have no way of knowing the result count without navigating to the part of the page where it is displayed.

### Download build files
- **[Development files](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactCombobox)
- **[ariaAnnounce](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/.storybook/utils)

## Props

| Prop Name     | Type      | Description                                        |
| ------------- | --------- | -------------------------------------------------- |
| \`showHelpText\` | \`string\` | Determines whether the help text is visible. Defaults to false. |

## Methods

| Method Name         | Description                                                        |
| ------------------- | ------------------------------------------------------------------ |
| \`handleOptionClick\` | Handles the click event on an option, setting it as the input value and closing the options list. |
| \`handleInputChange\` | Handles changes to the input value, updating the options list.     |
| \`handleKeyPress\` | Handles key events for navigation and selection within the options list. |

This widget offers a user-friendly and accessible way to add a combobox with autocomplete functionality to your applications. The component is flexible, allowing you to meet your requirements.

`;

export default description;