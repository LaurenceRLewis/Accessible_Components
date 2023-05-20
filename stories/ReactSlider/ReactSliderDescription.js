const description = `
**React Slider**

React Slider is a custom slider component that allows users to select a value within a specified range. It provides a user-friendly interface for controlling numeric input.

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

| Prop Name      | Type       | Description                                                     |
| -------------- | ---------- | --------------------------------------------------------------- |
| \`min\`        | \`number\` | The minimum allowed value for the slider.                        |
| \`max\`        | \`number\` | The maximum allowed value for the slider.                        |
| \`step\`       | \`number\` | The increment value for each step of the slider.                 |
| \`defaultValue\` | \`number\` | The default value of the slider.                                 |
| \`onChange\`   | \`function\` | A callback function triggered when the slider value changes.     |

## Methods

| Method Name    | Description                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| \`handleChange\` | A method that handles the change event of the slider.                        |
`;

export default description;