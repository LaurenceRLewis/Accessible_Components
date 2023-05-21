const description = `
The TabsAccordion widget is a sophisticated component developed in React that displays content in a tabular or accordion view depending on the viewport size. It provides a user-friendly way to condense a lot of information into a small space.

## Features

- Transition from tabs to accordion based on the viewport size.
- Supports customizable colors and styles for both tabs and accordion.
- Interactive keyboard navigation for both tab and accordion view.
- Customizable activation triggers: manual (via enter/space keys) or automated.
- An array of objects each containing an ID, title, and content for tab data.

## Keyboard Accessibility

The TabsAccordion widget ensures keyboard accessibility for easy control and interaction in both accordion and tab views. Here are the keyboard controls:

- **Enter/Space**: Toggles the expansion of the accordion item or activates the tab.
- **Arrow Right/Left**: Moves focus to the next/previous tab.
- **Home**: Moves focus to the first tab.
- **End**: Moves focus to the last tab.

This component provides a user-friendly and accessible way to manage multiple content sections in a compact view.

### Download build files
- **[Development files](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactAccordionTabs)

## Props

| Prop Name            | Type            | Description                                                       |
| -------------------- | --------------- | ----------------------------------------------------------------- |
| \`tabs\`             | \`array\`       | An array of objects with 'id', 'title', and 'content' for each tab. |
| \`tabPanelTabindex\` | \`boolean\`     | Determines if the tab panel can be focused directly. |
| \`triggerActivation\`| \`string\`      | Determines if tab activation is "manual" or "automated". |
| \`textColor\`        | \`string\`      | The color of the text in tabs. |
| \`tabBackground\`    | \`object\`      | An object specifying the default and selected background color of tabs. |
| \`viewportThreshold\`| \`number\`      | The width below which the component switches to accordion view. |

## Methods

| Method Name         | Description                                                    |
| ------------------- | -------------------------------------------------------------- |
| \`handleKeyDown\`   | A method that handles the keydown event on the accordion or tab. |
| \`handleWindowResize\`| A method that updates the component view based on window size. |

The TabsAccordion component ensures a seamless user experience for both keyboard interactions and responsive design, making it accessible and adaptable to different device sizes.
`;

export default description;