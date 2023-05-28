const description = `
The React Checkbox Group component renders a set of checkboxes within a fieldset with a specified legend.

## Features

- Configurable group name (legend) for the checkbox group.
- Dynamically generated checkbox labels.
- Capability to define the total number of checkboxes in the group through the story's args.

## Props

| Prop Name               | Type     | Description                                                                                                     | Default           |
| ----------------------- | -------- | --------------------------------------------------------------------------------------------------------------- | ----------------- |
| \`groupName\`           | string   | The name of the checkbox group. This can be modified in the Storybook's Controls UI.                           | 'Group Name'      |
| \`labels\`              | array    | An array of labels for the checkboxes. Each label corresponds to a checkbox in the group.                      | ['Label 1', 'Label 2'] |

## Example

\`\`\`jsx
<ReactCheckboxGroup
  groupName="Example Group"
  labels={['Label 1', 'Label 2', 'Label 3']}
/>
\`\`\`

This example demonstrates a checkbox group with a custom group name (legend) "Example Group", and three checkboxes labeled "Label 1", "Label 2", and "Label 3". To customize the number and labels of checkboxes, provide an array of labels via the \`labels\` prop in the Storybook's Controls UI.

## Adding More Checkboxes in Code

The number of checkboxes to be rendered by the Storybook is controlled by the \`numberOfCheckboxes\` constant. The labels for these checkboxes are dynamically created based on this number and can be further customized through the Storybook's Controls UI.

\`\`\`jsx
const numberOfCheckboxes = 5;
\`\`\`

This will prepare the Storybook to render a checkbox group with five checkboxes. The labels for these checkboxes can be individually updated via the Storybook's Controls UI.

## Customizing Labels in the Storybook Controls UI

Once the number of checkboxes is defined in your code, you can adjust the labels for these checkboxes directly via the Storybook Controls UI. Each checkbox added will render an editable text control for updating its label.
`;

export default description;