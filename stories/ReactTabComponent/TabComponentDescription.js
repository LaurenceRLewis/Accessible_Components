const description = `
TabComponent is a versatile and accessible React component that enables the creation of tabbed interfaces. It allows users to switch between different content sections by selecting the corresponding tabs. The TabComponent provides support for keyboard navigation, ARIA attributes, and customizable styles.

## Features

- Tabbed interface for organizing and navigating content.
- Keyboard navigation for easy accessibility.
- Support for automated or manual tab activation.
- Customizable styles for text color and tab backgrounds.

## Keyboard Navigation

TabComponent supports keyboard navigation for enhanced accessibility. Users can use the arrow keys (Left, Right), Home, and End keys to navigate between tabs. Pressing Enter or Space can activate a tab when using manual activation mode.

## ARIA Usage

The TabComponent implements ARIA attributes to improve accessibility. Each tab has the 'tab' role and is associated with a corresponding tab panel using 'aria-controls' and 'aria-labelledby' attributes. The currently selected tab is indicated using the 'aria-selected' attribute. The tab panel is marked with the 'tabpanel' role and is hidden when not selected.

## Props

| Prop Name              | Type      | Description                                                    |
| ---------------------- | --------- | -------------------------------------------------------------- |
| \`tabs\`               | array     | An array of objects representing the tabs and their content.    |
| \`tabPanelTabindex\`   | boolean   | Determines whether the tab panel should have a tabindex of 0.  |
| \`triggerActivation\`  | string    | Determines how tab activation is triggered ('automated' or 'manual'). |
| \`textColor\`          | string    | The color of the tab text.                                     |
| \`tabBackground\`      | object    | An object with 'default' and 'selected' properties for tab backgrounds. |

## Tab Object

Each tab object in the \`tabs\` array should have the following properties:

| Property   | Type   | Description                                              |
| ---------- | ------ | -------------------------------------------------------- |
| \`id\`     | string | The unique ID of the tab.                                |
| \`title\`  | string | The title or label of the tab.                           |
| \`content\`| node   | The content to be displayed when the tab is selected.    |

TabComponent provides a powerful and accessible solution for implementing tabbed interfaces in React applications.
`;

export default description;