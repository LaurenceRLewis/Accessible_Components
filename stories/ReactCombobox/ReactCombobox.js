import React, { useState, useRef, useEffect } from "react";
import ariaAnnounce from "../../.storybook/utils/ariaAnnounce";
import { townsAndCities } from "./ReactComboboxData";
import styles from "./ReactCombobox.module.css";

const ReactCombobox = ({
  showHelpText = false,
  showToggleButton = true,
  showAllOptionsAfterSelection = "No",
}) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showOptions, setShowOptions] = useState(false);
  const [options, setOptions] = useState(townsAndCities);
  const [resultCount, setResultCount] = useState(0);
  const [shouldFocusOnOption, setShouldFocusOnOption] = useState(false);
  const [lastSelectedValue, setLastSelectedValue] = useState(null);
  const inputRef = useRef(null);

  const filterOptions = (value) =>
    townsAndCities.filter((city) =>
      city.toLowerCase().startsWith(value.toLowerCase())
    );

  const toggleOptions = () => {
    if (!showOptions) {
      if (showAllOptionsAfterSelection === "Yes" && lastSelectedValue) {
        setOptions(townsAndCities);
        const idx = townsAndCities.findIndex((c) => c === lastSelectedValue);
        setSelectedIndex(idx);
        setResultCount(townsAndCities.length);
        setShouldFocusOnOption(true);
      } else if (lastSelectedValue) {
        setOptions([lastSelectedValue]);
        setSelectedIndex(0);
        setResultCount(1);
        setShouldFocusOnOption(true);
      } else {
        const filtered = filterOptions(inputValue);
        setOptions(filtered);
        setSelectedIndex(0);
        setResultCount(filtered.length);
        setShouldFocusOnOption(true);
      }
    }
    setShowOptions(!showOptions);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    const filtered = filterOptions(value);
    setOptions(filtered);
    setResultCount(filtered.length);
    setSelectedIndex(0);
    setShowOptions(true);
    setShouldFocusOnOption(true);
  };

  const handleOptionClick = (value) => {
    setInputValue(value);
    setLastSelectedValue(value);
    setShowOptions(false);
    setSelectedIndex(-1);
    setShouldFocusOnOption(false);
    ariaAnnounce(`Selected ${value}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!showOptions) {
        toggleOptions();
      } else {
        setSelectedIndex((prev) =>
          prev === options.length - 1 ? 0 : prev + 1
        );
        setShouldFocusOnOption(true);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!showOptions) {
        toggleOptions();
      } else {
        setSelectedIndex((prev) =>
          prev <= 0 ? options.length - 1 : prev - 1
        );
        setShouldFocusOnOption(true);
      }
    } else if (e.key === "Enter" && selectedIndex !== -1) {
      handleOptionClick(options[selectedIndex]);
    } else if (e.key === "Escape") {
      setShowOptions(false);
      setSelectedIndex(-1);
    }
  };

  useEffect(() => {
    if (showOptions && shouldFocusOnOption) {
      if (selectedIndex >= 0 && selectedIndex < options.length) {
        document
          .getElementById(`option-${selectedIndex}`)
          ?.scrollIntoView({ block: "nearest" });
      }
    }
  }, [showOptions, selectedIndex, shouldFocusOnOption]);

  useEffect(() => {
    if (showOptions) {
      ariaAnnounce(`${resultCount} of ${townsAndCities.length} results found`);
    }
  }, [showOptions, resultCount]);

  const ChevronDown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="white">
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  const ChevronUp = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="white">
      <path
        fillRule="evenodd"
        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <>
      <h1>ARIA Combobox (List)</h1>
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
            ref={inputRef}
            className={styles["comboboxInput"]}
            role="combobox"
            aria-autocomplete="list"
            autoComplete="off"
            aria-controls="combobox-listbox"
            aria-activedescendant={
              selectedIndex === -1 ? "" : `option-${selectedIndex}`
            }
            aria-expanded={showOptions}
            aria-labelledby="combobox-label"
            aria-describedby={`
              ${showHelpText === "Yes" ? "datalistHelpText" : ""}
              ${showOptions ? "result-count" : ""}
            `.trim()}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            onFocus={(e) =>
              e.target.setSelectionRange(e.target.value.length, e.target.value.length)
            }
          />
          {showToggleButton && (
            <button
              id="toggle-button"
              aria-label="Toggle list of Australian towns and cities"
              aria-controls="combobox-listbox"
              aria-expanded={showOptions}
              role="button"
              tabIndex="-1"
              className={styles["toggleButton"]}
              onClick={toggleOptions}
            >
              {showOptions ? <ChevronUp /> : <ChevronDown />}
            </button>
          )}
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
                key={option}
                className={index === selectedIndex ? styles["selectedOption"] : ""}
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

ReactCombobox.displayName = "ReactCombobox"; // <- Fix for Storybook Docs
export default ReactCombobox;
