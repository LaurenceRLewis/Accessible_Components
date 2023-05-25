import React, { useState, useRef, useEffect } from "react";
import ariaAnnounce from "../../.storybook/utils/ariaAnnounce";
import { townsAndCities } from "./ReactComboboxData";
import styles from "./ReactCombobox.module.css";

const ReactCombobox = ({ isTechnology = "ARIA" }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showOptions, setShowOptions] = useState(false);
  const [options, setOptions] = useState(townsAndCities);
  const [resultCount, setResultCount] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    const filteredOptions = townsAndCities.filter((city) =>
      city.toLowerCase().startsWith(inputValue.toLowerCase())
    );
    setOptions(filteredOptions);
    setResultCount(filteredOptions.length);
  }, [inputValue]);

  useEffect(() => {
    if (showOptions) {
      ariaAnnounce(`${resultCount} of ${townsAndCities.length} results found`);
    }
  }, [showOptions, resultCount]);

  const handleOptionClick = (value) => {
    setInputValue(value);
    setShowOptions(false);
    setSelectedIndex(-1);
    ariaAnnounce(`Selected ${value}`);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    if (isTechnology === "HTML" || value === "") {
      setShowOptions(false);
      setOptions(townsAndCities);
      setResultCount(townsAndCities.length);
    } else {
      const filteredOptions = townsAndCities.filter((city) =>
        city.toLowerCase().startsWith(value.toLowerCase())
      );
      setOptions(filteredOptions);
      setResultCount(filteredOptions.length);
      setShowOptions(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "ArrowDown" && selectedIndex < options.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else if (e.key === "ArrowUp" && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else if (e.key === "Enter" && selectedIndex !== -1) {
      setInputValue(options[selectedIndex]);
      setSelectedIndex(-1);
      setShowOptions(false);
    } else if (e.key === "Escape") {
      if (showOptions) {
        setShowOptions(false);
      } else {
        setInputValue("");
      }
    }
  };

  if (isTechnology === "HTML") {
    return (
      <>
        <h1>HTML Datalist</h1>
        <p>
          The datalist element has good support across modern browsers and ATs.
          However, there are some gaps in support.
        </p>
        <div className={styles["comboboxContainer"]}>
          <label id="combobox-label" htmlFor="combobox-input">
            Australian cities and towns
          </label>
          <p id="help-text" className={styles["helpText"]}>Help text</p>
          <input
            id="combobox-input"
            className={styles["comboboxInput"]}
            list="combobox-list"
            aria-describedby="help-text"
          />
          <datalist id="combobox-list">
            {townsAndCities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </datalist>
        </div>
      </>
    );
  }

  return (
    <>
      <h1>ARIA Combobox</h1>
      <p>The ARIA version uses the aria-autocomplete list. Examples for both and none may be added later.</p>
    <div className={styles["comboboxContainer"]}>
      <label id="combobox-label" htmlFor="combobox-input">
        Australian cities and towns
      </label>
      <p id="help-text" className={styles["helpText"]}>
        Help text
      </p>
      {showOptions && (
                <p id="result-count" className={styles["resultCount"]}>
                {`${resultCount} of ${townsAndCities.length} results found`}
              </p>
            )}
            <input
              id="combobox-input"
              className={styles["comboboxInput"]}
              role="combobox"
              aria-autocomplete="list"
              autocomplete="off"
              aria-controls="combobox-listbox"
              aria-activedescendant={
                selectedIndex === -1 ? "" : `option-${selectedIndex}`
              }
              aria-expanded={showOptions}
              aria-labelledby="combobox-label"
              aria-describedby="result-count"
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
            {showOptions && (
              <ul
                id="combobox-listbox"
                className={styles["comboboxListbox"]}
                role="listbox"
              >
                {options.map((option, index) => (
                  <li
                    id={`option-${index}`}
                    className={
                      index === selectedIndex ? styles["selectedOption"] : ""
                    }
                    key={option}
                    role="option"
                    aria-selected={index === selectedIndex}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          </>
        );
      };
      
      export default ReactCombobox;
      
