const description = `
ReactMultiSelect is a custom multi-select component that provides users with a dropdown list of options. Users can select one or more options, and the selected options are displayed at the top of the dropdown. It supports keyboard navigation for better accessibility and a customizable selection model.

## Features

- Multiple option selection support.
- Dropdown list for displaying available options.
- Selection model can be default or alternative.
- Utilizes keyboard navigation for easy control and interaction.
- Utilizes ARIA live regions to announce changes to the user.

## Keyboard Accessibility

ReactMultiSelect component ensures keyboard accessibility for easy control and interaction. Users can navigate and interact with the list of options using keyboard controls.

## ARIA Announcements

ReactMultiSelect uses an \`ariaAnnounce\` function to create an ARIA live region. This is an area of the page specifically designed to be monitored by assistive technologies. When changes occur in this area, those updates are read out by screen reader software. This ensures that users who can't or aren't looking at the screen can still receive important updates.

In the case of ReactMultiSelect, \`ariaAnnounce\` is used to communicate the selection or dismissal of an option. It dynamically generates a hidden live region, injects it into the DOM, updates it with the relevant message, and then removes it after a period of time.

## Props

| Prop Name          | Type       | Description                                                 |
| ------------------ | ---------- | ----------------------------------------------------------- |
| \`selectionModel\` | \`string\` | Choose the selection model for the listbox. Can be 'default' or 'alternative'. |

## Methods

| Method Name            | Description                                                    |
| ---------------------- | -------------------------------------------------------------- |
| \`handleSelectOption\` | A method that handles the selection of an option.              |
| \`handleDismissOption\`| A method that handles the dismissal of a selected option.      |
| \`handleKeyDown\`      | A method that handles the keydown event in the list of options.|

The ReactMultiSelect component ensures a seamless user experience for both mouse and keyboard interactions, making it accessible and easy to use.

`;

export default description;