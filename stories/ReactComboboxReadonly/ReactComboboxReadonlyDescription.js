const description = `

ReactComboboxReadonly is a custom read-only combobox component that provides users with a dropdown list of options. Users can select one or more options, and the selected options are displayed in the input box. The listbox is controlled via an input element that does not allow the user to freely type, thus limiting the user to select only the provided options.

## Features

- Provides a dropdown list for displaying available options.
- Selected options are displayed in a read-only input.
- Users can't freely type in the input but only select available options.
- Ensures keyboard navigation for easy control and interaction.
- Uses ARIA properties and roles for better accessibility.

## Keyboard Accessibility

The ReactComboboxReadonly component ensures keyboard accessibility for easy control and interaction. Users can navigate and interact with the list of options using keyboard controls.

## ARIA Announcements

ReactComboboxReadonly uses an \`ariaAnnounce\` function to create an ARIA live region. This is an area of the page specifically designed to be monitored by assistive technologies. When changes occur in this area, those updates are read out by screen reader software. This ensures that users who can't or aren't looking at the screen can still receive important updates.

In the case of ReactComboboxReadonly, \`ariaAnnounce\` is used to communicate the selection or dismissal of an option. It dynamically generates a hidden live region, injects it into the DOM, updates it with the relevant message, and then removes it after a period of time.

## ARIA Integration

ReactComboboxReadonly uses ARIA properties and roles to enhance accessibility. ARIA roles and properties provide information about how an element behaves or should be interacted with, allowing assistive technology users to understand the element's role and state.

### Download build files
- **[Development files](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactComboboxReadonly)
- **[ariaAnnounce](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/.storybook/utils)

## Props

| Prop Name              | Type       | Description                                               |
| ---------------------- | ---------- | --------------------------------------------------------- |
| \`isListboxOpen\`      | \`boolean\`| Whether the dropdown list is open or not.                |
| \`activeDescendantId\` | \`string\` | The id of the currently active descendant in the listbox.|

## Methods

| Method Name           | Description                                                    |
| --------------------- | -------------------------------------------------------------- |
| \`handleKeyDown\`     | A method that handles the keydown event in the input element.  |
| \`handleOptionClick\` | A method that handles the click event on an option in the list.|

The ReactComboboxReadonly component ensures a seamless user experience for both mouse and keyboard interactions, making it accessible and easy to use.

`;

export default description;