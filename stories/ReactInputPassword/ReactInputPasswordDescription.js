const description = `
The Password Input is a specialized HTML input element designed to securely capture password input from users. It obscures the characters entered to ensure privacy and security, showing dots or asterisks in place of the actual characters.

Native password inputs offer inherent security benefits, such as not allowing the password to be copied or viewed as plain text without user interaction.

## Features

- Secure method for password entry.
- Obscures input to maintain user security.
- Supports all standard text input methods, including copy, paste, and text selection (though these might be restricted for security reasons).
- Toggleable visibility to switch between obscured and plaintext password views.
- Callback function for handling input value changes.

### Download build files
- **[Development files](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactInputPassword)

## Props

| Prop Name             | Type        | Description                                                     |
| --------------------- | ----------- | --------------------------------------------------------------- |
| \`includeAriaPressed\`| \`boolean\` | Indicates whether to include the 'aria-pressed' attribute.      |

## Methods

| Method Name        | Description                                                               |
| -------------------| ------------------------------------------------------------------------- |
| \`handleToggle\`   | A method that toggles the password visibility between obscured and plain. |

The Password Input component prioritizes security and usability, allowing users to confidently input their passwords while also having the option to check their input for any errors.

`;

export default description;