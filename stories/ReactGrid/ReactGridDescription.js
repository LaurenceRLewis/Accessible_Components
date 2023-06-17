const description = `
The React Grid component is a robust and dynamic grid-based table component, providing an interactive and flexible way to display and manipulate tabular data in a React application. This component prioritizes accessibility, with a keen focus on keyboard navigation and focus management.

## Features

- **Tabular Representation**: Organize and display data in a structured, easy-to-read grid format.
- **Keyboard Navigation**: Navigate through the grid using arrow keys, with the current focus automatically tracked and visually indicated.
- **Editable Cells**: Allow users to modify cell content directly within the grid, including various types of data such as boolean (represented as checkboxes) and strings.
- **Focus Management**: The component implements a "roving tabindex" strategy for managing focus. On initial load, the first cell has a tabindex of "0" while all other cells have a tabindex of "-1". As the user navigates through the grid, the tabindex of the currently focused cell is updated to "0", while the previously focused cell's tabindex reverts to "-1". This ensures that the tab sequence remains consistent and predictable.
- **Customization Options**: Customize the grid according to your requirements, including cell types, data population, and event handlers for changing data.

### Download build files
- **[Development files](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactGrid)

`;

export default description;