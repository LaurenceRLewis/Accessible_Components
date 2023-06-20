const description = `
React Search Table is a table that can be filtered using search. This allows users to filter the table based on their search query. The table search widget is robust and includes features such as keyboard accessibility and ARIA announcements for improved usability and accessibility. 

The component now also allows you to control ARIA properties via props, thus enabling more fine-grained accessibility configurations.

The default configuration is using the ARIA search role on the container, the input type of search and the role searchbox is not inplemented in the default.

type=search is exactly the same as type=text. type=search is for styling the search differently to other input types on a page.
role=searchbox is not recommended if role search is implemented on the container.

## Features

- Filtering of table data based on user's search query.
- Showing count of search results in relation to total data.
- Clear search function that resets the search field and shows all data.
- ARIA live region announcement for search results.
- Keyboard accessibility for activating search and clear functions.
- Configurable ARIA roles and input type through props.

## Keyboard Accessibility

ReactSearchTable component provides keyboard accessibility. The search field listens for 'Enter' key press events and activates the search function when the 'Enter' key is pressed.

## ARIA Announcements

ReactSearchTable uses the \`ariaAnnounce\` function to create an ARIA live region. This live region announces the count of search results to the user after each search or when the search is cleared. This feature is particularly useful for screen reader users who would otherwise have no way of knowing the result count without navigating to the part of the page where it is displayed.

### Download build files
- **[Development files](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactSearchTable)
- **[ariaAnnounce](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/.storybook/utils)

## Props

ReactSearchTable accepts several props:

- \`containerRole\`: Defines the ARIA role for the search container. Defaults to 'search'.
- \`inputType\`: Determines the type of the search input field. Defaults to 'text'.
- \`inputRole\`: Defines the ARIA role for the search input field. Defaults to 'searchbox'.

## Methods

| Method Name            | Description                                                    |
| ---------------------- | -------------------------------------------------------------- |
| \`handleSearch\`       | A method that handles the search function.                     |
| \`handleClear\`        | A method that handles the clearing of the search field.        |
| \`handleKeyPress\`     | A method that listens for 'Enter' key press in the search field. |
| \`handleSearchInputChange\` | A method that updates the search input state.              |

ReactSearchTable provides a seamless and accessible user experience for both mouse and keyboard interactions, making it an essential widget for data-heavy applications.

`;

export default description;