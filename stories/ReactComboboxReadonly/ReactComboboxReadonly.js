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
  const [singleSelectMessage, setSingleSelectMessage] = useState("");
  const [focusedOptionIndex, setFocusedOptionIndex] = useState(0);
  const listboxRef = useRef(null);
  const triggerButtonRef = useRef(null);
  const firstButtonRef = useRef(null);

  useEffect(() => {
    if (isListboxOpen && listboxRef.current.children.length > 0) {
      listboxRef.current.children[focusedOptionIndex].setAttribute(
        "aria-selected",
        "true"
      );
    }
  }, [isListboxOpen, listboxRef, focusedOptionIndex]);

  useEffect(() => {
    if (!isListboxOpen && triggerButtonRef.current) {
      triggerButtonRef.current.focus();
    }
  }, [isListboxOpen]);

  useEffect(() => {
    if (!ariaMultiselectable) {
      const message =
        "Only one option can be selected, to select multiple, set aria-multiselect to true in the controls";
      setSingleSelectMessage(message);
    }
  }, [ariaMultiselectable]);

  const handleSelectOption = (option) => {
    let newSelectedOptions;

    if (ariaMultiselectable) {
      if (interactionMode === "Remove selected from list") {
        const available = availableOptions.filter(
          (ingredient) => !selectedOptions.includes(ingredient)
        );

        if (available.includes(option)) {
          newSelectedOptions = [...selectedOptions, option];
          setAvailableOptions(
            availableOptions.filter((item) => item !== option)
          );
        } else {
          newSelectedOptions = selectedOptions.filter(
            (item) => item !== option
          );
          setAvailableOptions([...availableOptions, option]);
        }
      } else {
        newSelectedOptions = selectedOptions.includes(option)
          ? selectedOptions.filter((item) => item !== option)
          : [...selectedOptions, option];
      }
      setSelectedOptions(newSelectedOptions);
      ariaAnnounce(`You have ${newSelectedOptions.length} items selected.`);
    } else {
      if (selectedOptions.length === 0 || selectedOptions.includes(option)) {
        newSelectedOptions = [option];
        setSelectedOptions(newSelectedOptions);
        ariaAnnounce(`You have ${newSelectedOptions.length} items selected.`);
      } else {
        setListboxOpen(false);
        return;
      }
    }
  };

  const handleDismissOption = (option) => {
    const newSelectedOptions = selectedOptions.filter(
      (item) => item !== option
    );
    setSelectedOptions(newSelectedOptions);
    if (interactionMode === "Remove selected from list") {
      setAvailableOptions([...availableOptions, option]);
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
    setListboxOpen,
    ariaMultiselectable,
    availableOptions,
    triggerButtonRef,
    focusedOptionIndex,
    setFocusedOptionIndex
  );

  return (
    <>
      <h2>Shopping List</h2>
      {!ariaMultiselectable && singleSelectMessage && (
        <div className={styles.singleSelectMessage}>{singleSelectMessage}</div>
      )}
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
        Select
          ingredients... {selectedOptions.length > 0 ? `${selectedOptions.length} selected ` : ""}
        </label>
        <input
          id="combobox01"
          role="combobox"
          aria-expanded={isListboxOpen}
          aria-controls="ingredientsListbox"
          aria-activedescendant={isListboxOpen ? activeDescendantId : undefined}
          readOnly
          ref={triggerButtonRef}
          className={styles.listboxToggleButton}
          onClick={() => setListboxOpen(!isListboxOpen)}
          onKeyDown={(event) => {
            switch (event.key) {
              case "ArrowDown":
              case "Alt + ArrowDown":
                event.preventDefault();
                if (!isListboxOpen) {
                  setListboxOpen(true);
                } else {
                  setFocusedOptionIndex(
                    (focusedOptionIndex + 1) % availableOptions.length
                  );
                  handleKeyDown(event, isListboxOpen);
                }
                break;
              case "ArrowUp":
                event.preventDefault();
                if (!isListboxOpen) {
                  setListboxOpen(true);
                } else {
                  setFocusedOptionIndex(
                    (focusedOptionIndex - 1 + availableOptions.length) %
                      availableOptions.length
                  );
                  handleKeyDown(event, isListboxOpen);
                }
                break;
              case "Enter":
              case " ":
                event.preventDefault();
                if (isListboxOpen) {
                  handleSelectOption(availableOptions[focusedOptionIndex]);
                  setListboxOpen(false);
                } else {
                  setListboxOpen(true);
                }
                break;
              case "Escape":
                event.preventDefault();
                setListboxOpen(false);
                break;
              case "Tab":
                event.preventDefault();
                handleSelectOption(availableOptions[focusedOptionIndex]);
                setListboxOpen(false);
                break;
              case "Home":
              case "End":
                if (isListboxOpen) {
                  handleKeyDown(event, isListboxOpen);
                }
                break;
              default:
                if (isListboxOpen) {
                  handleKeyDown(event, isListboxOpen);
                }
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
            {...(ariaMultiselectable ? { "aria-multiselectable": "true" } : {})}
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
