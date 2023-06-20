import React, { useState } from 'react';
import styles from './ReactSearchTable.module.css';
import ReactSearchTableData from './ReactSearchTableData';
import ariaAnnounce from '../../.storybook/utils/ariaAnnounce';

const ReactSearchTable = ({ 
  containerRole = undefined,
  inputType = 'search',
  inputRole = undefined,
}) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState(ReactSearchTableData);

  const handleSearch = () => {
    const filteredResults = ReactSearchTableData.filter(
      (item) => item.id.includes(searchText)
    );
    setSearchResults(filteredResults);
    const message = `Showing ${filteredResults.length} of ${ReactSearchTableData.length} table rows.`
    ariaAnnounce(message);
  };

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClear = () => {
    setSearchText('');
    setSearchResults(ReactSearchTableData);
    const message = `Showing all ${ReactSearchTableData.length} table rows.`;
    ariaAnnounce(message);
  };

  return (
    <div className={styles.container}>
      <div {...(containerRole ? { role: containerRole } : {})} className={styles.searchContainer}>
        <label htmlFor="searchInput" className={styles.label}>
          Search table
        </label>
        <input
          type={inputType}
          id="searchInput"
          autocomplete="off"
          className={styles.input}
          value={searchText}
          onChange={handleSearchInputChange}
          onKeyDown={handleKeyPress}
          {...(inputRole ? { role: inputRole } : {})}
          aria-describedby="helpText"
        />
        <button className={`${styles.button} ${styles.searchButton}`} onClick={handleSearch}>
          Search
        </button>
        <button className={`${styles.button} ${styles.clearButton}`} onClick={handleClear}>
          Clear
        </button>
      </div>
      <p id="helpText" className={styles.helpText}>
        Enter partial or full ID to search, then press Enter or click the Search button to activate.
      </p>
      <p className={styles.resultText}>
        {`Showing ${searchResults.length} of ${ReactSearchTableData.length} table rows.`}
      </p>
      <table className={`${styles.table} ${styles.searchTable}`}>
        <thead>
          <tr>
            <th>Given name</th>
            <th>Last name</th>
            <th>Mobile number</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((item) => (
            <tr key={item.id}>
              <td>{item.givenName}</td>
              <td>{item.lastName}</td>
              <td>{item.mobileNumber}</td>
              <td>{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReactSearchTable;