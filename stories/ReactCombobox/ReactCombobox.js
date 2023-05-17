import React, { useState, useRef, useEffect } from "react";
import ariaAnnounce from "../../.storybook/utils/ariaAnnounce";
import { townsAndCities } from "./ReactComboboxData";
import styles from "./ReactCombobox.module.css";

const ReactCombobox = ({ autocomplete = "list" }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showOptions, setShowOptions] = useState(false);
  const [options, setOptions] = useState(townsAndCities);
  const inputRef = useRef(null);

  useEffect(() => {
    if (autocomplete === "list" || autocomplete === "both") {
      setOptions(
        townsAndCities.filter((city) =>
          city.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      );
    }
  }, [inputValue, autocomplete]);

  const handleOptionClick = (value) => {
    setInputValue(value);
    setShowOptions(false);
    setSelectedIndex(-1);
    ariaAnnounce(`Selected ${value}`);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    setOptions(townsAndCities.filter(city => city.toLowerCase().startsWith(value.toLowerCase())));
    setShowOptions(true);
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
        setInputValue('');
      }
    }
  };

  return (
    <div className={styles["comboboxContainer"]}>
      <label id="combobox-label" htmlFor="combobox-input">
        Your City or Town
      </label>
      <input
        id="combobox-input"
        className={styles["comboboxInput"]}
        role="combobox"
        aria-autocomplete={autocomplete}
        autocomplete="off"
        aria-controls="combobox-listbox"
        aria-activedescendant={
          selectedIndex === -1 ? "" : `option-${selectedIndex}`
        }
        aria-expanded={showOptions}
        aria-labelledby="combobox-label"
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
      <p id="help-text" className={styles["helpText"]}>
        Add instruction here
      </p>
    </div>
  );
};

export default ReactCombobox;
