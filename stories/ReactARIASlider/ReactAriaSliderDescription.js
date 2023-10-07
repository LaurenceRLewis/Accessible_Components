const description = `
Slider is a custom component that allows users to select a value within a specified range. It provides a user-friendly interface for controlling numeric input.

## Features

- Support for selecting a value within a range.
- Customizable minimum and maximum values.
- Incremental step size for fine-grained control.
- Optional default value for initial selection.
- Direct input through a number field for precise control.
- Error handling for out-of-range values.
- Callback function for handling value changes.
- Accessibility improvements with increment and decrement buttons.

## Keyboard and Button Accessibility

The Slider component ensures keyboard accessibility for easy control and interaction. Users can navigate and adjust the slider value using the following keyboard controls and buttons:

- **Left Arrow or Minus Button**: Decreases the value by one step.
- **Right Arrow or Plus Button**: Increases the value by one step.
- **Home**: Sets the value to the minimum.
- **End**: Sets the value to the maximum.
- **Page Up**: Increases the value by a larger increment.
- **Page Down**: Decreases the value by a larger increment.

The Slider component provides a user-friendly and accessible way to select values within a specified range.

### Download build files
- **[Development files](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactARIASlider)

## Props

| Prop Name         | Type       | Description                                                     |
| ----------------- | ---------- | --------------------------------------------------------------- |
| \`min\`           | \`number\` | The minimum allowed value for the slider.                        |
| \`max\`           | \`number\` | The maximum allowed value for the slider.                        |
| \`step\`          | \`number\` | The increment value for each step of the slider.                 |
| \`defaultValue\`  | \`number\` | The default value of the slider.                                 |
| \`onChange\`      | \`function\` | A callback function triggered when the slider value changes.     |

## ARIA Slider Props

The ARIA Slider component accepts the following additional props:

| Prop Name         | Type       | Description                                                     |
| ----------------- | ---------- | --------------------------------------------------------------- |
| \`ariaMin\`       | \`number\` | The minimum allowed value for the ARIA slider.                   |
| \`ariaMax\`       | \`number\` | The maximum allowed value for the ARIA slider.                   |
| \`ariaStep\`      | \`number\` | The increment value for each step of the ARIA slider.            |
| \`ariaDefaultValue\`  | \`number\` | The default value of the ARIA slider from aria-valuenow.      |
| \`getAriaValueText\` | \`function\` | A function that returns a custom string for the aria-valuetext. Format is 'min of max [aria-valuetext]' |
| \`inputError\`    | \`string\` | Error message displayed when the value entered is out of the defined range. |

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
| \`handleIncrement\` | A method that handles the increment button press, increasing the value by the step size. |
| \`handleDecrement\` | A method that handles the decrement button press, decreasing the value by the step size. |

## Touch and Mouse Interaction

The Slider component supports both touch and mouse interactions for seamless user experience across devices. Here's how it behaves with touch and mouse input:

- **Touchmove**: Sliding your finger across the slider updates the value in real-time.
- **Touchend**: Releasing your finger after sliding sets the final value of the slider.
- **Touchstart**: Placing your finger on the slider starts the touch interaction.
- **Mousedown**: Clicking and holding the mouse button on the slider starts the mouse interaction.
- **Mousemove**: Moving the mouse while holding the button updates the value in real-time.
- **Mouseup**: Releasing the mouse button after moving sets the final value of the slider.

Additionally, users can increment and decrement the value with the plus and minus buttons to meet [WCAG 2.2 2.5.7 Dragging Movements (AA)](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements).

The Slider component ensures a seamless user experience for both keyboard, touch, and mouse interactions, making it accessible and easy to use across different devices.

`;

export default description;