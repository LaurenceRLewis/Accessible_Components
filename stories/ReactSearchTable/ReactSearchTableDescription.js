const description = `
ReactSearchTable is a component that displays a table of data and includes a search box allowing users to filter the table based on their search query. The table search widget is robust and includes features such as keyboard accessibility and ARIA announcements for improved usability and accessibility.

## Features

- Filtering of table data based on user's search query.
- Showing count of search results in relation to total data.
- Clear search function that resets the search field and shows all data.
- ARIA live region announcement for search results.
- Keyboard accessibility for activating search and clear functions.

## Keyboard Accessibility

ReactSearchTable component provides keyboard accessibility. The search field listens for 'Enter' keypress events and activates the search function when the 'Enter' key is pressed.

## ARIA Announcements

ReactSearchTable uses the \`ariaAnnounce\` function to create an ARIA live region. This live region announces the count of search results to the user after each search or when the search is cleared. This feature is particularly useful for screen reader users who would otherwise have no way of knowing the result count without navigating to the part of the page where it is displayed.

### Download build files
- **[Development files](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/stories/ReactSearchTable)
- **[ariaAnnounce](https://github.com/LaurenceRLewis/Accessible_Components/tree/main/.storybook/utils)

## Props

ReactSearchTable does not accept any props. It uses internal state for handling the search input and search results.

## Methods

| Method Name            | Description                                                    |
| ---------------------- | -------------------------------------------------------------- |
| \`handleSearch\`       | A method that handles the search function.                     |
| \`handleClear\`        | A method that handles the clearing of the search field.        |
| \`handleKeyPress\`     | A method that listens for 'Enter' keypress in the search field.|
| \`handleSearchInputChange\` | A method that updates the search input state.              |

ReactSearchTable provides a seamless and accessible user experience for both mouse and keyboard interactions, making it an essential widget for data-heavy applications.

`;

export default description;