const description = `
The ReactCombobox is an implementation of both the ARIA Combobox Widget and the HTML Datalist. It provides users with a dropdown list of options that can be filtered by typing into the text field.

## Features

- Provides Autocomplete functionality.
- Supports two versions: ARIA Combobox and HTML Datalist.
- Supports keyboard navigation for easy control and interaction in the ARIA version.
- Announces changes to screen readers using ARIA properties in the ARIA version.
- Includes help text and result count for better user experience in the ARIA version.
- Uses a pre-defined list of Australian towns and cities for autocomplete suggestions.

## Keyboard Accessibility

Users can navigate and interact with the ARIA version of the ReactCombobox using the following keyboard controls:

- **ArrowDown/ArrowUp**: Moves focus to the next/previous item in the options list.
- **Enter**: Selects the focused option and closes the options list.
- **Escape**: Closes the options list if it's open, and clears the input if the list is closed.

### Download build files
- **[Development files](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactCombobox)

## Props

| Prop Name     | Type      | Description                                        |
| ------------- | --------- | -------------------------------------------------- |
| \`autocomplete\` | \`string\`  | The autocomplete method. It can be "list", "both" or "inline" for ARIA Combobox or "list" for HTML Datalist |
| \`isDatalist\` | \`bool\` | Determines whether the component should use the HTML Datalist. Defaults to false.|

## Methods

| Method Name         | Description                                                        |
| ------------------- | ------------------------------------------------------------------ |
| \`handleOptionClick\` | Handles the click event on an option, setting it as the input value and closing the options list in the ARIA version. |
| \`handleInputChange\` | Handles changes to the input value, updating the options list.     |
| \`handleKeyPress\` | Handles key events for navigation and selection within the options list in the ARIA version. |

This widget offers a user-friendly and accessible way to add a combobox with autocomplete functionality to your applications. The component is flexible, allowing you to choose between an ARIA Combobox or an HTML Datalist based on your requirements.

`;

export default description;