const description = `
The ReactCombobox is an implementation of the ARIA Combobox Widget. It provides users with a dropdown list of options that can be filtered by typing into the text field.

## Features

- Provides Autocomplete functionality.
- Supports keyboard navigation for easy control and interaction.
- Announces changes to screen readers using ARIA properties.
- Includes help text and result count for better user experience.
- Uses a pre-defined list of Australian towns and cities for autocomplete suggestions.

## Keyboard Accessibility

Users can navigate and interact with the ReactCombobox using the following keyboard controls:

- **ArrowDown/ArrowUp**: Moves focus to the next/previous item in the options list.
- **Enter**: Selects the focused option and closes the options list.
- **Escape**: Closes the options list if it's open, and clears the input if the list is closed.

### Download build files
- **[Development files](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactCombobox)

## Props

| Prop Name     | Type      | Description                                        |
| ------------- | --------- | -------------------------------------------------- |
| \`autocomplete\` | \`string\`  | The autocomplete method.|

## Methods

| Method Name         | Description                                                        |
| ------------------- | ------------------------------------------------------------------ |
| \`handleOptionClick\` | Handles the click event on an option, setting it as the input value and closing the options list. |
| \`handleInputChange\` | Handles changes to the input value, updating the options list.     |
| \`handleKeyPress\` | Handles key events for navigation and selection within the options list. |

This widget offers a user-friendly and accessible way to add a combobox with autocomplete functionality to your applications.

`;

export default description;