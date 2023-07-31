import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ariaAnnounce from "../../.storybook/utils/ariaAnnounce";
import useKeyboardNavigation from "./keyboardNavigation";
import styles from "./ReactMultiSelect.module.css";

const initialIngredients = [
  "Tofu",
  "Almond Milk",
  "Avocado",
  "Quinoa",
  "Kale",
  "Lentils",
];

const ReactMultiSelect = ({ buttonsPosition, interactionMode }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [availableOptions, setAvailableOptions] = useState(initialIngredients);
  const [isListboxOpen, setListboxOpen] = useState(false);
  const listboxRef = useRef(null);
  const triggerButtonRef = useRef(null);
  const firstButtonRef = useRef(null);

  useEffect(() => {
    if (isListboxOpen && listboxRef.current.children.length > 0) {
      listboxRef.current.children[0].focus();
    } else if (!isListboxOpen && triggerButtonRef.current) {
      triggerButtonRef.current.focus();
    }
  }, [isListboxOpen]);

  const handleSelectOption = (option) => {
    let newSelectedOptions;

    if (interactionMode === "Remove selected from list") {
      const available = availableOptions.filter(
        (ingredient) => !selectedOptions.includes(ingredient)
      );

      if (available.includes(option)) {
        newSelectedOptions = [...selectedOptions, option];
        setAvailableOptions(availableOptions.filter((item) => item !== option)); // remove option from available options
      } else {
        newSelectedOptions = selectedOptions.filter((item) => item !== option);
        setAvailableOptions([...availableOptions, option]); // add option back to available options
      }
    } else {
      newSelectedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((item) => item !== option)
        : [...selectedOptions, option];
    }

    setSelectedOptions(newSelectedOptions);
    ariaAnnounce(`You have ${newSelectedOptions.length} items selected.`);
  };

  const handleDismissOption = (option) => {
    const newSelectedOptions = selectedOptions.filter(
      (item) => item !== option
    );
    setSelectedOptions(newSelectedOptions);
    if (interactionMode === "Remove selected from list") {
      setAvailableOptions([...availableOptions, option]); // add option back to available options
    }
    ariaAnnounce(
      `Removed ${option}. ${newSelectedOptions.length} items remaining.`
    );
    if (newSelectedOptions.length === 0) {
      triggerButtonRef.current.focus();
    } else {
      firstButtonRef.current.focus();
    }
  };

  const handleKeyDown = useKeyboardNavigation(
    isListboxOpen,
    listboxRef,
    handleSelectOption,
    setListboxOpen
  );

  return (
    <>
      <h2>Shopping List</h2>
      <div className={styles.multiSelectContainer}>
        {buttonsPosition === "top" && selectedOptions.length > 0 && (
          <>
            <p className={styles.HelpText}>
              Remove items from your shopping cart by clicking on the buttons
              below.
            </p>
            {selectedOptions.map((option, index) => (
              <button
                key={index}
                ref={index === 0 ? firstButtonRef : null}
                className={styles.selectedOptionButton}
                onClick={() => handleDismissOption(option)}
                aria-label={`Remove ${option}`}
              >
                {option} &times;
              </button>
            ))}
          </>
        )}
        <p className={styles.SrOnly}>
          You have {selectedOptions.length} items in your cart.
        </p>
          <button
            ref={triggerButtonRef}
            className={styles.listboxToggleButton}
            onClick={() => setListboxOpen(!isListboxOpen)}
            aria-expanded={isListboxOpen}
            aria-controls="ingredientsListbox"
          >
            Groceries
          </button>
        {isListboxOpen && (
          <ul
            id="ingredientsListbox"
            ref={listboxRef}
            className={styles.listbox}
            role="listbox"
            aria-label="Ingredients"
            aria-multiselectable="true"
            tabIndex="0"
            onKeyDown={handleKeyDown}
          >
            {availableOptions.map((option, index) => (
              <li
                key={index}
                role="option"
                aria-selected={selectedOptions.includes(option)}
                className={classNames(styles.listboxOption, {
                  [styles.selected]: selectedOptions.includes(option),
                })}
                onClick={() => handleSelectOption(option)}
                tabIndex="-1"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
        {buttonsPosition === "bottom" && selectedOptions.length > 0 && (
          <>
            <p className={styles.HelpText}>
              Remove items from your shopping cart by clicking on the buttons
              below.
            </p>
            {selectedOptions.map((option, index) => (
              <button
                key={index}
                ref={index === 0 ? firstButtonRef : null}
                className={styles.selectedOptionButton}
                onClick={() => handleDismissOption(option)}
                aria-label={`Remove ${option}`}
              >
                {option} &times;
              </button>
            ))}
          </>
        )}
      </div>
    </>
  );
};

ReactMultiSelect.propTypes = {
  buttonsPosition: PropTypes.oneOf(["top", "bottom"]),
  interactionMode: PropTypes.oneOf([
    "Keep selected in list",
    "Remove selected from list",
  ]),
};

ReactMultiSelect.defaultProps = {
  buttonsPosition: "bottom",
  interactionMode: "Keep selected in list",
};

export default ReactMultiSelect;
