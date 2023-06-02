import React, { useState, useRef, useEffect } from "react";
import ariaAnnounce from "../../.storybook/utils/ariaAnnounce";
import { townsAndCities } from "./ReactComboboxData";
import styles from "./ReactCombobox.module.css";

const ReactCombobox = ({ isTechnology = "ARIA", showHelpText = false }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showOptions, setShowOptions] = useState(false);
  const [options, setOptions] = useState(townsAndCities);
  const [resultCount, setResultCount] = useState(0);
  const inputRef = useRef(null);
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [showOptions]);

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

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [showOptions]);

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
  
  const [shouldFocusOnOption, setShouldFocusOnOption] = useState(false);

  useEffect(() => {
    if (showOptions && shouldFocusOnOption) {
      if (selectedIndex >= 0 && selectedIndex < options.length) {
        document.getElementById(`option-${selectedIndex}`).scrollIntoView();
      }
    } else if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [showOptions, selectedIndex, shouldFocusOnOption]);

const handleKeyPress = (e) => {
  if (e.key === "ArrowDown") {
    if (inputValue === "" && !showOptions) {
      setShowOptions(true);
      setSelectedIndex(0);
      setShouldFocusOnOption(true);
    }
    else if (inputValue !== "" && !showOptions) {
      setShowOptions(true);
      setSelectedIndex(0);
      setShouldFocusOnOption(true);
    }
    else if (showOptions && selectedIndex < options.length - 1) {
      setSelectedIndex(prevIndex => prevIndex + 1);
      setShouldFocusOnOption(true);
    }
  } else if (e.key === "ArrowUp") {
    if (selectedIndex === -1 || selectedIndex === 0) {
      if (!showOptions) {
        setShowOptions(true);
        setShouldFocusOnOption(false);
      }
      setSelectedIndex(options.length - 1);
    } else if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
      setShouldFocusOnOption(true);
    }
  } else if (e.key === "Enter" && selectedIndex !== -1) {
    setInputValue(options[selectedIndex]);
    setSelectedIndex(-1);
    setShowOptions(false);
    setShouldFocusOnOption(false);
  } else if (e.key === "Escape") {
    setShowOptions(false);
    setSelectedIndex(-1);
    setShouldFocusOnOption(false);
  } else if (e.key === "Home") {
    if (inputRef.current) {
      inputRef.current.setSelectionRange(0, 0);
    }
  } else if (e.key === "End") {
    if (inputRef.current) {
      inputRef.current.setSelectionRange(inputValue.length, inputValue.length);
    }
  } else if (e.key === "Tab") {
    setShowOptions(false);
    setShouldFocusOnOption(false);
  }
};         
  
  const ChevronDown = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="white"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  const ChevronUp = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="white"
    >
      <path
        fillRule="evenodd"
        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  if (isTechnology === "HTML") {
    return (
      <>
        <h1>HTML Datalist</h1>
        <p>
          The datalist element has good support across modern browsers and assistive technology.
        </p>
        <div className={styles["comboboxContainer"]}>
          <label id="combobox-label" htmlFor="combobox-input">
            Australian cities and towns
          </label>
          <input
            id="combobox-input"
            className={styles["comboboxInput"]}
            list="combobox-list"
          />
          <datalist id="combobox-list">
            {townsAndCities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </datalist>
        </div>
      </>
    );
  }

  return (
    <>
      <h1>ARIA Combobox</h1>
      <p>
        The ARIA version uses the aria-autocomplete list. Examples for both and
        none may be added later.
      </p>
      <div className={styles["comboboxContainer"]}>
        <label id="combobox-label" htmlFor="combobox-input">
          Australian cities and towns
        </label>
        {showHelpText === "Yes" && (
          <p id="datalistHelpText" className={styles["helpText"]}>
            Help text
          </p>
        )}
        {showOptions && (
          <p id="result-count" className={styles["resultCount"]}>
            {`${resultCount} results found`}
          </p>
        )}
        <div className={styles["comboboxWrapper"]}>
          <input
            id="combobox-input"
            className={styles["comboboxInput"]}
            role="combobox"
            aria-autocomplete="list"
            autocomplete="off"
            aria-controls={showOptions ? "combobox-listbox" : ""}
            aria-activedescendant={
              selectedIndex === -1 ? "" : `option-${selectedIndex}`
            }
            aria-expanded={showOptions}
            aria-labelledby="combobox-label"
            aria-describedby={`
            ${showHelpText === "Yes" ? "help-text" : ""}
            ${showOptions ? "result-count" : ""}
            `.trim()}
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <button
            id="toggle-button"
            aria-label="Australian towns and cities"
            aria-controls={showOptions ? "combobox-listbox" : ""}
            aria-expanded={showOptions}
            role="button"
            tabIndex="-1"
            className={styles["toggleButton"]}
            onClick={toggleOptions}
          >
            {showOptions ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
        {showOptions && (
          <ul
            id="combobox-listbox"
            className={styles["comboboxListbox"]}
            role="listbox"
            aria-label="Australian towns and cities"
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
