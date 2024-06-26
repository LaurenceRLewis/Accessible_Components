import React, { useState, useRef, useEffect } from 'react';
import styles from './ReactSearchTable.module.css';
import ReactSearchTableData from './ReactSearchTableData';
import ariaAnnounce from '../../.storybook/utils/ariaAnnounce';

const ReactSearchTable = ({
  containerRole = 'search', // Default to 'search' if not provided
  inputType = 'search',
  inputRole = undefined,
}) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState(ReactSearchTableData);
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isInputEmpty) {
      searchInputRef.current.focus();
    }
  }, [isInputEmpty]);

  const handleSearch = () => {
    if (searchText.trim() === '') {
      setIsInputEmpty(true);
      searchInputRef.current.focus(); // Focus on input if empty
      return;
    }
  
    setIsInputEmpty(false); // Resetting error state
  
    const filteredResults = ReactSearchTableData.filter(
      (item) =>
        item.id.includes(searchText) ||
        item.givenName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.lastName.toLowerCase().includes(searchText.toLowerCase())
    );

    setSearchResults(filteredResults);
    searchInputRef.current.focus(); // Focus back on input after search
    const message = `Showing ${filteredResults.length} of ${ReactSearchTableData.length} table rows.`;
    ariaAnnounce(message);
  };

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
    if (event.target.value.trim() === '') {
        setSearchResults(ReactSearchTableData);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClear = () => {
    setSearchText('');
    setSearchResults(ReactSearchTableData);
    setIsInputEmpty(false); // Resetting error state
    searchInputRef.current.focus(); // Focus back on input after clearing
    const message = `Showing all ${ReactSearchTableData.length} table rows.`;
    ariaAnnounce(message);
  };

  return (
    <>
      <div className={styles.container}>
        <search {...(containerRole ? { role: containerRole } : {})} className={styles.searchContainer}>
          <label htmlFor="searchInput" className={styles.label}>
            Filter table
          </label>
          <input
            type={inputType}
            id="searchInput"
            ref={searchInputRef}
            autoComplete="off"
            className={styles.input}
            value={searchText}
            onChange={handleSearchInputChange}
            onKeyDown={handleKeyPress}
            {...(inputRole ? { role: inputRole } : {})}
            aria-describedby="errorText helpText"
          />
          <button type="submit" className={`${styles.button} ${styles.searchButton}`} onClick={handleSearch}>
            Search
          </button>
          <button type="reset" className={`${styles.button} ${styles.clearButton}`} onClick={handleClear}>
            Clear
          </button>
        </search>
        <p id="helpText" className={styles.helpText}>
          Press Enter or click the Search button to activate.
        </p>
        <div id="errorText">
          {isInputEmpty && <p className={styles.errorText}>Error: Input cannot be empty.</p>}
        </div>
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
      <h3>The new HTML &lt;search&gt; element</h3>
      <p>In browsers that lack support for the search element, the element will still be recognised, along with any attached attributes such as roles, IDs, and classes. It will act as a generic element, akin to a &lt;div&gt;. For this reason, it's advisable to append an ARIA search role to the &lt;div&gt; element for the moment. By employing &lt;div role="search"&gt;, you ensure that every user has the experience as intended. When all browsers eventually provide support, the ARIA search role can be removed.</p>
    </>
  );
};

export default ReactSearchTable;