const description = `
The ReactCombobox is a flexible implementation of both the ARIA Combobox Widget and the HTML Datalist. It provides users with a dropdown list of options that can be filtered by typing into the text field.

## Features

- Provides Autocomplete functionality.
- Supports two technologies: ARIA Combobox and HTML Datalist.
- Supports keyboard navigation for easy control and interaction (ARIA version only).
- Announces changes to screen readers using ARIA properties (ARIA version only).
- Includes help text and result count for better user experience (ARIA version only).
- Help text visibility can be controlled via a prop (ARIA version only).
- Uses a pre-defined list of Australian towns and cities for autocomplete suggestions.
- \`aria-controls\` attribute dynamically updates its value based on the state of the options list (ARIA version only).

### Keyboard Accessibility (ARIA version only)

Users can navigate and interact with the ARIA version of the ReactCombobox using the following keyboard controls:

- **ArrowDown/ArrowUp**: Moves focus to the next/previous item in the options list.
- **Alt + Down Arrow**: Opens the listbox without moving focus or changing selection.
- **Enter**: Selects the focused option and closes the options list.
- **Escape**: Closes the options list if it's open, and clears the input if the list is closed.
- **Home/End**: Moves visual focus to the beginning/end of the textbox.

## ARIA Announcements (ARIA version only)

The ARIA version uses the \`ariaAnnounce\` function to create an ARIA live region. This live region announces the count of search results to the user after each search or when the search is cleared. This feature is particularly useful for screen reader users who would otherwise have no way of knowing the result count without navigating to the part of the page where it is displayed.

## HTML Datalist

HTML Datalist is a simple and native way to add autocomplete functionality to an input field. It uses the \`<datalist>\` element, which works in conjunction with an \`<input>\` to provide a dropdown of options. These options can be static or dynamically generated, and are filtered by the browser as the user types into the input. It's less flexible than the ARIA Combobox but can be a good choice for simpler use cases.

### Download build files
- **[Development files](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactCombobox)
- **[ariaAnnounce](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/.storybook/utils)

## Props

| Prop Name     | Type      | Description                                        |
| ------------- | --------- | -------------------------------------------------- |
| \`isTechnology\` | \`string\` | Determines which technology is used for the component. Can be either "ARIA" for ARIA Combobox or "HTML" for HTML Datalist. Defaults to "ARIA".|
| \`showHelpText\` | \`string\` | Determines whether the help text is visible. Defaults to false. Applies to the ARIA version only. |

## Methods

| Method Name         | Description                                                        |
| ------------------- | ------------------------------------------------------------------ |
| \`handleOptionClick\` | Handles the click event on an option, setting it as the input value and closing the options list (ARIA version only). |
| \`handleInputChange\` | Handles changes to the input value, updating the options list.     |
| \`handleKeyPress\` | Handles key events for navigation and selection within the options list (ARIA version only). |

This widget offers a user-friendly and accessible way to add a combobox with autocomplete functionality to your applications. The component is flexible, allowing you to choose between using ARIA Combobox or HTML Datalist technology based on your requirements.

`;

export default description;
``