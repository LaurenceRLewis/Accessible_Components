const description = `
The HTML Slider (type="range") is a standard HTML input element that allows users to select a value within a specified range. This native HTML control is designed for entering numeric input and provides a user-friendly interface for controlling numeric input.

The HTML range input type automatically supports keyboard interactions, such as the use of arrow keys to increment or decrement the value, Home/End keys to set the value to the min/max, and Page Up/Page Down for larger increments. This behavior is part of the HTML specification for the range input type and is supported across all modern browsers.

## Features

- Support for selecting a value within a range.
- Customizable minimum and maximum values.
- Incremental step size for fine-grained control.
- Optional default value for initial selection.
- Callback function for handling value changes.

### Download build files
- **[Development files](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactHtmlSlider)

### Can I Use
"Can I use" provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.
- **[Range input type](https://caniuse.com/?search=type%3Drange)

## Props

| Prop Name         | Type       | Description                                                     |
| ----------------- | ---------- | --------------------------------------------------------------- |
| \`min\`           | \`number\` | The minimum allowed value for the slider.                        |
| \`max\`           | \`number\` | The maximum allowed value for the slider.                        |
| \`step\`          | \`number\` | The increment value for each step of the slider.                 |
| \`defaultValue\`  | \`number\` | The default value of the slider.                                 |
| \`onChange\`      | \`function\` | A callback function triggered when the slider value changes.     |

## HTML Slider Props

The HTML Slider component accepts the following props:

| Prop Name         | Type       | Description                                                     |
| ----------------- | ---------- | --------------------------------------------------------------- |
| \`htmlMin\`       | \`number\` | The minimum allowed value for the HTML slider.                   |
| \`htmlMax\`       | \`number\` | The maximum allowed value for the HTML slider.                   |
| \`htmlStep\`      | \`number\` | The increment value for each step of the HTML slider.            |
| \`htmlDefaultValue\`  | \`number\` | The default value of the HTML slider.                            |

## Methods

| Method Name         | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| \`handleChange\`    | A method that handles the change event of the slider.          |

The HTML Slider component ensures a seamless user experience for keyboard interactions, making it accessible and easy to use across different devices.

`;

export default description;