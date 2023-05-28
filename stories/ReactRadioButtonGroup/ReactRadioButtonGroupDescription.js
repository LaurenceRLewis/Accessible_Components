const description = `
The React Radio Button Group renders a group of radio buttons within a fieldset with a legend.

## Features

- Supports custom group name (legend).
- Supports custom radio button labels.
- Allows specifying the number of radio buttons in the group.

## Props

| Prop Name               | Type     | Description                                                                                                     | Default           |
| ----------------------- | -------- | --------------------------------------------------------------------------------------------------------------- | ----------------- |
| \`groupName\`           | string   | The name of the radio button group. This can be edited in the Controls UI.                                      | 'Group Name'      |
| \`labels\`              | array    | An array of labels for the radio buttons. Each label corresponds to a radio button in the group.                | ['Label 1', 'Label 2'] |

## Example

\`\`\`jsx
<ReactRadioButtonGroup
  groupName="Example Group"
  labels={['Label 1', 'Label 2', 'Label 3']}
/>
\`\`\`

This will render a radio button group with a custom group name (legend) "Example Group" and three radio buttons with the labels "Label 1", "Label 2", and "Label 3". If you want to specify a different number of radio buttons, you can provide an array of custom labels through the \`labels\` prop.

## Adding More Radio Buttons in Code

To add more radio buttons, you will need to make changes in your code. Specifically, extend the \`labels\` array with more label strings. Each new label you add will create a new radio button in the group.

For example:

\`\`\`jsx
<ReactRadioButtonGroup
  groupName="Example Group"
  labels={['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5']}
/>
\`\`\`

This will create a radio button group with five radio buttons, labelled from "Label 1" to "Label 5". The maximum number of radio buttons that can be added to the group is 10.

## Customising Labels in the Storybook Controls UI

Once you've added more radio buttons in your code, you can customise the labels for these radio buttons directly from the Storybook Controls UI. Each radio button added will render an editable text control to update its label.
`;

export default description;