import React, { useState, useEffect, useRef } from "react";
import { townsAndCities } from "./ReactComboboxBothData";
import ariaAnnounce from "../../.storybook/utils/ariaAnnounce";
import styles from "./ReactComboboxBoth.module.css";

const ReactComboboxBoth = ({ showHelpText = false }) => {
  const [filteredOptions, setFilteredOptions] = useState([...townsAndCities]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [userInput, setUserInput] = useState("");
  const [listboxVisible, setListboxVisible] = useState(false);
  const [predictiveText, setPredictiveText] = useState("");
  const [predictiveIndex, setPredictiveIndex] = useState(-1);
  const [textboxEmpty, setTextboxEmpty] = useState(true);

  const inputRef = useRef(null);

  const onBlur = () => {
    if (selectedIndex !== -1 && filteredOptions.length > selectedIndex) {
      setUserInput(filteredOptions[selectedIndex]);
      setPredictiveText(filteredOptions[selectedIndex]);
    }
    hideOptions();
  };

  const filterOptions = (query) => {
    return townsAndCities.filter((option) =>
      option.toLowerCase().startsWith(query.toLowerCase())
    );
  };

  const showOptions = () => {
    setListboxVisible(true);
  };

  const hideOptions = () => {
    setListboxVisible(false);
  };

  // Function to select an option
const selectOption = (index) => {
  if (index >= 0 && index < filteredOptions.length) {
    const selectedOption = filteredOptions[index];
    setUserInput(selectedOption);
    setPredictiveText(selectedOption);
    hideOptions();
    setSelectedIndex(-1);
    inputRef.current.focus();
    inputRef.current.setSelectionRange(userInput.length, userInput.length);
    ariaAnnounce(`Option ${selectedOption} selected.`);
  }
};

const onInput = (event) => {
  const newValue = event.target.value;
  setUserInput(newValue);

  const newFilteredOptions = filterOptions(newValue);
  setFilteredOptions(newFilteredOptions);

  if (newValue === "") {
    setTextboxEmpty(true); 
    setPredictiveText("");
    setPredictiveIndex(-1);
    setSelectedIndex(-1); // set selectedIndex to -1 when textbox is empty
  } else {
    setTextboxEmpty(false); 
    showOptions();
    if (newFilteredOptions.length > 0) {
      setSelectedIndex(0); // set selectedIndex to 0 when new options are found
      const selectedOption = newFilteredOptions[0];
      setPredictiveText(selectedOption);
      setPredictiveIndex(0);
      inputRef.current.setSelectionRange(
        newValue.length,
        selectedOption.length
      );
    } else {
      setSelectedIndex(-1); // set selectedIndex to -1 when no options are found
      setPredictiveIndex(-1);
    }
  }
};

  const onKeydown = (event) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (filteredOptions.length > 0) {
          setSelectedIndex((selectedIndex + 1) % filteredOptions.length);
          setPredictiveIndex(-1); // Remove predictive class when ArrowDown is pressed
        }
        break;
      case "ArrowUp":
        event.preventDefault();
        if (filteredOptions.length > 0) {
          setSelectedIndex(
            (selectedIndex - 1 + filteredOptions.length) %
              filteredOptions.length
          );
        }
        break;
        case 'Enter':
  // Prevent the default 'Enter' key behavior
  event.preventDefault();

  // If a valid option is selected
  if (selectedIndex >= 0) {
    // Get the selected option based on selectedIndex
    const selectedOption = filteredOptions[selectedIndex];
    // Set the userInput value as the selected option
    setUserInput(selectedOption);
    // Also set the predictive text to be the same as the selected option
    // This sets the full text of the selected option as the userInput and the predictiveText
    setPredictiveText(selectedOption);
    // Hide the options list, as we've made a selection
    hideOptions();
    // Reset the selectedIndex as we've made a selection
    setSelectedIndex(-1);
    // Set the focus back to the input
    // This is done to ensure the input stays in focus after the selection
    inputRef.current.focus();
    // Set the cursor (caret) at the end of the input
    // This is done so that further typing happens after the selected option text
    inputRef.current.setSelectionRange(selectedOption.length, selectedOption.length);
    // Announce the selection to the user (using the ARIA live region)
    // This is for accessibility purposes, to let the user know what option was selected
    ariaAnnounce(`Option ${selectedOption} selected.`);
    // Check if caret is positioned before the predictive text
    if (inputRef.current.selectionStart < userInput.length) {
      // Caret is before predictive text
      console.log("Caret is positioned before predictive text");
      // Perform desired action
    } else {
      // Caret is positioned at the end of the set text (after pressing Enter)
      console.log("Caret is positioned at the end of the set text (after pressing Enter)");
      // Perform desired action
    }
  }
  break;
      case "Escape":
        hideOptions();
        setSelectedIndex(-1);
        setUserInput(inputRef.current.value);
        setPredictiveText("");
        break;
        case "Backspace":
  if (userInput !== "") {
    event.preventDefault();
    if (userInput.length === 1) {
      setUserInput("");
      setPredictiveText("");
      setFilteredOptions([...townsAndCities]);
      setSelectedIndex(-1);
      setTextboxEmpty(true);
    } else {
      const newValue = userInput.slice(0, -1);
      setUserInput(newValue);
      const newFilteredOptions = filterOptions(newValue);
      setFilteredOptions(newFilteredOptions);
      if (newFilteredOptions.length > 0) {
        setSelectedIndex(0); // set selectedIndex to 0 when new options are found
        setPredictiveText(newFilteredOptions[0]);
      } else {
        setSelectedIndex(-1); // set selectedIndex to -1 when no options are found
        setPredictiveText("");
      }
    }
  }
  break;
      default:
        break;
    }
  };

  const onToggleButtonClick = () => {
    if (!listboxVisible) {
      showOptions();
    } else {
      hideOptions();
    }
  };

  useEffect(() => {
    if (selectedIndex !== -1) {
      const selectedOption = filteredOptions[selectedIndex];
      setPredictiveText(selectedOption);
      inputRef.current.setSelectionRange(
        userInput.length,
        selectedOption.length
      );
      ariaAnnounce(`Option ${selectedOption} is highlighted.`);
    }
  }, [selectedIndex, userInput, filteredOptions]);

  useEffect(() => {
    if (textboxEmpty) {
      setSelectedIndex(-1); // Reset selectedIndex to -1 when the textbox is empty
      hideOptions(); // Close the listbox when the textbox is empty
    }
  }, [textboxEmpty]);

  return (
    <>
      <h1>ARIA Combobox (Both)</h1>
      <p>The version uses the aria-autocomplete Both method.</p>
      <div className={styles["comboboxContainer"]}>
        <label id={styles["combobox-label"]} htmlFor={styles["combobox-input"]}>
          Australian cities and towns
        </label>
        {showHelpText === "Yes" && (
          <p id="datalistHelpText" className={styles["helpText"]}>
            Help text
          </p>
        )}
        <div
          className={styles["optionsCount"]}
          aria-live="assertive"
          aria-atomic="true"
          role="region"
        >
          {listboxVisible ? `${filteredOptions.length} options available.` : ""}
        </div>
        <div className={styles["comboboxWrapper"]}>
          <input
            id={styles["combobox-input"]}
            type="text"
            autoComplete="off"
            role="combobox"
            aria-autocomplete="both"
            onKeyDown={onKeydown}
            onInput={onInput}
            onBlur={onBlur}
            value={predictiveText}
            aria-describedby={`
            ${showHelpText === "Yes" ? "help-text" : ""}
            ${showOptions ? "result-count" : ""}
            `.trim()}
            ref={inputRef}
          />
          <button
            id={styles["toggle-button"]}
            aria-label="Show options"
            tabIndex="-1"
            onClick={onToggleButtonClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="48"
              height="48"
            >
              <path d="M7 10l5 5 5-5z" fill="#ffffff" />
            </svg>
          </button>
        </div>
        <ul
          id={styles["combobox-listbox"]}
          role="listbox"
          aria-label="Australian towns and cities"
          style={{ display: listboxVisible ? "block" : "none" }}
        >
          {filteredOptions.map((option, index) => (
            <li
              role="option"
              aria-selected={selectedIndex === index ? "true" : "false"}
              onClick={() => selectOption(index)}
              key={index}
              className={
                selectedIndex === index
                  ? `${styles["selectedOption"]} ${
                      predictiveIndex === index ? styles["predictive"] : ""
                    }`
                  : `${predictiveIndex === index ? styles["predictive"] : ""}`
              }
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ReactComboboxBoth;
