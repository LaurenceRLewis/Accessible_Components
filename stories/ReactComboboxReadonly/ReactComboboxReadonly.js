import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ariaAnnounce from "../../.storybook/utils/ariaAnnounce";
import useKeyboardNavigation from "./ReactComboboxReadonlyNavigation";
import styles from "./ReactComboboxReadonly.module.css";

const initialIngredients = [
  "Tofu",
  "Almond Milk",
  "Avocado",
  "Quinoa",
  "Kale",
  "Lentils",
];

const ReactComboboxReadonly = ({
  buttonsPosition,
  interactionMode,
  ariaMultiselectable,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [availableOptions, setAvailableOptions] = useState(initialIngredients);
  const [isListboxOpen, setListboxOpen] = useState(false);
  const listboxRef = useRef(null);
  const triggerButtonRef = useRef(null);
  const firstButtonRef = useRef(null);

  useEffect(() => {
    if (isListboxOpen && listboxRef.current.children.length > 0) {
      listboxRef.current.children[0].setAttribute("aria-selected", "true");
      listboxRef.current.children[0].setAttribute("tabindex", "0");
    }
  }, [isListboxOpen, listboxRef]);

  useEffect(() => {
    if (!isListboxOpen && triggerButtonRef.current) {
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

  const { handleKeyDown, activeDescendantId } = useKeyboardNavigation(
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
        <p className={styles.numItemsInCart}>
          You have {selectedOptions.length} items in your cart.
        </p>
        <label htmlFor="combobox01" className={styles.comboboxLabel}>
          {selectedOptions.length > 0 ? `${selectedOptions.length} ` : ""}Select
          ingredients...
        </label>
        <input
          id="combobox01"
          role="combobox"
          aria-expanded={isListboxOpen}
          aria-controls="ingredientsListbox"
          aria-activedescendant={activeDescendantId}
          readOnly
          ref={triggerButtonRef}
          className={styles.listboxToggleButton}
          onClick={() => setListboxOpen(!isListboxOpen)}
          onKeyDown={(event) => {
            if (
              event.key === "Enter" ||
              event.key === " " ||
              event.key === "ArrowDown"
            ) {
              event.preventDefault();
              setListboxOpen(true);
            } else if (event.key === "ArrowUp") {
              event.preventDefault();
              setListboxOpen(true);
              // Here we simulate the 'End' key to focus the last option when the listbox is opened
              if (isListboxOpen) {
                const fakeEndEvent = { key: "End", preventDefault: () => {} };
                handleKeyDown(fakeEndEvent);
              }
            } else {
              handleKeyDown(event);
            }
          }}
        />
        {isListboxOpen && (
          <ul
            id="ingredientsListbox"
            ref={listboxRef}
            className={styles.listbox}
            role="listbox"
            aria-label="Ingredients"
            aria-multiselectable={ariaMultiselectable}
            tabIndex="0"
            onKeyDown={handleKeyDown}
          >
            {availableOptions.map((option, index) => (
              <li
                key={index}
                id={`option-${index}`}
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

ReactComboboxReadonly.propTypes = {
  buttonsPosition: PropTypes.oneOf(["top", "bottom"]),
  interactionMode: PropTypes.oneOf([
    "Keep selected in list",
    "Remove selected from list",
  ]),
};

ReactComboboxReadonly.defaultProps = {
  buttonsPosition: "bottom",
  interactionMode: "Keep selected in list",
  ariaMultiselectable: true,
};

export default ReactComboboxReadonly;
