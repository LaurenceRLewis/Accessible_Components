const description = `
**React Slider**

React Slider is a custom slider component that allows users to select a value within a specified range. It provides a user-friendly interface for controlling numeric input.

## Features

- Support for selecting a value within a range.
- Customizable minimum and maximum values.
- Incremental step size for fine-grained control.
- Optional default value for initial selection.
- Callback function for handling value changes.

## Selection Models

The React Slider component supports different selection models, which determine how selection and deselection behave:

- **Default**: Allows selection and deselection on click.
- **Alternative**: Allows selection on click, but deselection only occurs when the selected item is clicked again.

Keyboard Accessibility

The React Slider component ensures keyboard accessibility for easy control and interaction. Users can navigate and adjust the slider value using the following keyboard controls:

- **Left Arrow**: Decreases the value by one step.
- **Right Arrow**: Increases the value by one step.
- **Home**: Sets the value to the minimum.
- **End**: Sets the value to the maximum.
- **Page Up**: Increases the value by a larger increment.
- **Page Down**: Decreases the value by a larger increment.

The React Slider component provides a user-friendly and accessible way to select values within a specified range.

## Props

| Prop Name         | Type       | Description                                                     |
| ----------------- | ---------- | --------------------------------------------------------------- |
| \`min\`           | \`number\` | The minimum allowed value for the slider.                        |
| \`max\`           | \`number\` | The maximum allowed value for the slider.                        |
| \`step\`          | \`number\` | The increment value for each step of the slider.                 |
| \`defaultValue\`  | \`number\` | The default value of the slider.                                 |
| \`onChange\`      | \`function\` | A callback function triggered when the slider value changes.     |

## Methods

| Method Name         | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| \`handleChange\`    | A method that handles the change event of the slider.          |
| \`handleTouchMove\` | A method that handles the touchmove event for touch interaction. |
| \`handleTouchEnd\`  | A method that handles the touchend event for touch interaction. |
| \`handleTouchStart\`| A method that handles the touchstart event for touch interaction. |
| \`handleMouseDown\` | A method that handles the mousedown event for mouse interaction. |
| \`handleMouseMove\` | A method that handles the mousemove event for mouse interaction. |
| \`handleMouseUp\`   | A method that handles the mouseup event for mouse interaction.   |

## Touch and Mouse Interaction

The React Slider component supports both touch and mouse interactions for seamless user experience across devices. Here's how it behaves with touch and mouse input:

- **Touchmove**: Sliding your finger across the slider updates the value in real-time.
- **Touchend**: Releasing your finger after sliding sets the final value of the slider.
- **Touchstart**: Placing your finger on the slider starts the touch interaction.
- **Mousedown**: Clicking and holding the mouse button on the slider starts the mouse interaction.
- **Mousemove**: Moving the mouse while holding the button updates the value in real-time.
- **Mouseup**: Releasing the mouse button after moving sets the final value of the slider.

The React Slider component ensures a seamless user experience for both keyboard, touch, and mouse interactions, making it accessible and easy to use across different devices.

`;

export default description;