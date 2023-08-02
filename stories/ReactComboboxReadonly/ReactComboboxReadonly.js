import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ariaAnnounce from "../../.storybook/utils/ariaAnnounce";
import styles from "./ReactComboboxReadonly.module.css";

const initialIngredients = [
  "Tofu",
  "Almond Milk",
  "Avocado",
  "Quinoa",
  "Kale",
  "Lentils",
];

const useKeyboardNavigation = (
  isListboxOpen,
  listboxRef,
  handleSelectOption,
  setListboxOpen,
  ariaMultiselectable,
  availableOptions,
  triggerButtonRef
) => {
  const [focusedOptionIndex, setFocusedOptionIndex] = useState(0);
  const [activeDescendantId, setActiveDescendantId] = useState(null);
  
  useEffect(() => {
    if (isListboxOpen) {
      listboxRef.current.focus();
    }
  }, [isListboxOpen, listboxRef]);

  const handleKeyDown = (event) => {
    const { key } = event;
    const options = Array.from(listboxRef.current.children);
    let newIndex;

    switch (key) {
      case "ArrowUp":
        event.preventDefault();
        newIndex = focusedOptionIndex - 1 >= 0 ? focusedOptionIndex - 1 : 0;
        options[focusedOptionIndex].setAttribute("aria-selected", "false");
        options[newIndex].focus();
        options[newIndex].setAttribute("aria-selected", "true");
        setActiveDescendantId(options[newIndex].id);
        setFocusedOptionIndex(newIndex);
        triggerButtonRef.current.setAttribute(
          "aria-activedescendant",
          options[newIndex].id
        );
        break;

      case "ArrowDown":
        event.preventDefault();
        newIndex =
          focusedOptionIndex + 1 < options.length
            ? focusedOptionIndex + 1
            : focusedOptionIndex;
        options[focusedOptionIndex].setAttribute("aria-selected", "false");
        options[newIndex].focus();
        options[newIndex].setAttribute("aria-selected", "true");
        setActiveDescendantId(options[newIndex].id);
        setFocusedOptionIndex(newIndex);
        triggerButtonRef.current.setAttribute(
          "aria-activedescendant",
          options[newIndex].id
        );
        break;

      case "Home":
        event.preventDefault();
        options[0].focus();
        setActiveDescendantId(options[0].id);
        setFocusedOptionIndex(0);
        break;

      case "End":
        event.preventDefault();
        options[options.length - 1].focus();
        setActiveDescendantId(options[options.length - 1].id);
        setFocusedOptionIndex(options.length - 1);
        break;

      case "PageUp":
        event.preventDefault();
        newIndex = focusedOptionIndex - 10 >= 0 ? focusedOptionIndex - 10 : 0;
        options[focusedOptionIndex].setAttribute("aria-selected", "false");
        options[newIndex].focus();
        options[newIndex].setAttribute("aria-selected", "true");
        setActiveDescendantId(options[newIndex].id);
        setFocusedOptionIndex(newIndex);
        break;

      case "PageDown":
        event.preventDefault();
        newIndex =
          focusedOptionIndex + 10 < options.length
            ? focusedOptionIndex + 10
            : options.length - 1;
        options[focusedOptionIndex].setAttribute("aria-selected", "false");
        options[newIndex].focus();
        options[newIndex].setAttribute("aria-selected", "true");
        setActiveDescendantId(options[newIndex].id);
        setFocusedOptionIndex(newIndex);
        break;

      case "Enter":
      case " ":
        event.preventDefault();
        handleSelectOption(options[focusedOptionIndex].textContent);
        // If 'ariaMultiselectable' is false and one item is already selected, close the listbox
        if (!ariaMultiselectable && selectedOptions.length > 0) {
          setListboxOpen(false);
        }
        break;

      case "Escape":
        event.preventDefault();
        setListboxOpen(false);
        break;

      case "Tab":
        event.preventDefault();
        handleSelectOption(options[focusedOptionIndex].textContent);
        setListboxOpen(false);
        // let the browser handle the default tabbing behavior
        break;

      case "Alt+ArrowUp":
        event.preventDefault();
        handleSelectOption(options[focusedOptionIndex].textContent);
        setListboxOpen(false);
        break;

      default:
        break;
    }
  };

  return { handleKeyDown, activeDescendantId };
};

const ReactComboboxReadonly = ({
  buttonsPosition,
  interactionMode,
  ariaMultiselectable,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [availableOptions, setAvailableOptions] = useState(initialIngredients);
  const [isListboxOpen, setListboxOpen] = useState(false);
  const [singleSelectMessage, setSingleSelectMessage] = useState("");
  const listboxRef = useRef(null);
  const triggerButtonRef = useRef(null);
  const firstButtonRef = useRef(null);

  useEffect(() => {
    if (isListboxOpen) {
      triggerButtonRef.current.focus();
    }
  }, [isListboxOpen]);

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
          ); // remove the selected item from the available options
        }
      } else {
        newSelectedOptions = [...selectedOptions, option];
      }

      setSelectedOptions(newSelectedOptions);
      ariaAnnounce(`${option} selected`);
    } else {
      newSelectedOptions = [option];
      setSelectedOptions(newSelectedOptions);
      setSingleSelectMessage(`${option} selected`);
    }
  };

  const handleClearAll = () => {
    setSelectedOptions([]);
    setAvailableOptions(initialIngredients);
  };

  const handleListboxToggle = () => {
    setListboxOpen(!isListboxOpen);
  };

  const {
    handleKeyDown,
    activeDescendantId,
  } = useKeyboardNavigation(
    isListboxOpen,
    listboxRef,
    handleSelectOption,
    setListboxOpen,
    ariaMultiselectable,
    availableOptions,
    triggerButtonRef
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
            {...(ariaMultiselectable ? { "aria-multiselectable": "true" } : {})}
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
  ariaMultiselectable: PropTypes.bool,
};

ReactComboboxReadonly.defaultProps = {
  buttonsPosition: "bottom",
  interactionMode: "Keep selected in list",
  ariaMultiselectable: true,
};

export default ReactComboboxReadonly;