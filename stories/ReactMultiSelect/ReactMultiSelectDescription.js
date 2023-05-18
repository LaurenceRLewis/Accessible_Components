const description = `
**ReactMultiSelect** is a versatile component for multi-selection scenarios. 

## Features
- A dropdown list with multi-select options.
- Keyboard support for accessibility.
- Support for different selection models.

## Selection Models
The selection model can be one of the following:
- **Default**: Allows selection and deselection on click.
- **Alternative**: Selection on click but deselection only when the selected item is clicked in the selected items list.

## Accessibility
The **ReactMultiSelect** component uses the \`ariaAnnounce\` function for accessibility. This function creates an announcement that will be read by screen readers, helping to ensure that important updates or notifications are communicated to all users, regardless of their accessibility needs.

The \`ariaAnnounce\` function is a part of the open-source project [aria-announce](https://github.com/WhatSock/aria-announce), which provides utilities for managing live region announcements in web applications.

## Props and Methods

| Prop Name | Type | Description |
| --------- | ---- | ----------- |
| \`selectionModel\` | \`string\` | The selection model can be one of the following: <br/> **Default**: Allows selection and deselection on click. <br/> **Alternative**: Selection on click but deselection only when the selected item is clicked in the selected items list. |

**Usage:**
\`\`\`jsx
import ariaAnnounce from './ariaAnnounce';

// Somewhere in your code...
ariaAnnounce('This is an important announcement for screen readers.');
\`\`\`
`;

export default description;