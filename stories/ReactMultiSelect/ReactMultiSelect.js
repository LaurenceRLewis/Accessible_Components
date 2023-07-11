import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ariaAnnounce from "../../.storybook/utils/ariaAnnounce";
import useKeyboardNavigation from "./keyboardNavigation";
import styles from "./ReactMultiSelect.module.css";

const veganIngredients = [
  "Tofu",
  "Almond Milk",
  "Avocado",
  "Quinoa",
  "Kale",
  "Lentils",
];

const ReactMultiSelect = ({ selectionModel, buttonsPosition }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
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
    if (selectionModel === "alternative") {
      newSelectedOptions = [option];
    } else {
      newSelectedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((item) => item !== option)
        : [...selectedOptions, option];
    }
    setSelectedOptions(newSelectedOptions);
    ariaAnnounce(`You have ${newSelectedOptions.length} items selected.`);
  };

  const handleKeyDown = useKeyboardNavigation(
    isListboxOpen,
    listboxRef,
    handleSelectOption,
    setListboxOpen,
    selectionModel
  );

  const handleDismissOption = (option) => {
    const newSelectedOptions = selectedOptions.filter(
      (item) => item !== option
    );
    setSelectedOptions(newSelectedOptions);
    ariaAnnounce(
      `Removed ${option}. ${newSelectedOptions.length} items remaining.`
    );
    if (newSelectedOptions.length === 0) {
      // If there are no more buttons, focus on the "Ingredients" button
      triggerButtonRef.current.focus();
    } else {
      // Otherwise, focus on the first button in the list
      firstButtonRef.current.focus();
    }
  };

  return (
    <>
      <h2>Shopping List</h2>
      <div className={styles['multiSelectContainer']}>
  {buttonsPosition === 'top' && selectedOptions.length > 0 && (
    <>
      <p className={styles['HelpText']}>Remove items from your shopping cart by clicking on the buttons below.</p>
      {selectedOptions.map((option, index) => (
        <button 
          key={index}
          ref={index === 0 ? firstButtonRef : null}
          className={styles['selectedOptionButton']}
          onClick={() => handleDismissOption(option)}
          aria-label={`Remove ${option}`}
        >
          {option} &times;
        </button>
      ))}
    </>
  )}
  <p className={styles['SrOnly']} >You have {selectedOptions.length} items in your cart.</p>
 <div>
  <button 
    ref={triggerButtonRef}
    className={styles['listboxToggleButton']} 
    onClick={() => setListboxOpen(!isListboxOpen)}>Groceries
  </button>
  </div>
  {isListboxOpen && (
    <ul
      ref={listboxRef}
      className={styles['listbox']}
      role="listbox"
      aria-label="Ingredients"
      tabIndex="0"
      onKeyDown={handleKeyDown}
    >
      {veganIngredients.map((option, index) => (
        <li
          key={index}
          role="option"
          aria-selected={selectedOptions.includes(option)}
          className={classNames(styles['listboxOption'], { [styles['selected']]: selectedOptions.includes(option) })}
          onClick={() => handleSelectOption(option)}
          tabIndex="-1" // Ensure list items can receive focus
        >
          {option}
        </li>
      ))}
    </ul>
  )}
  {buttonsPosition === 'bottom' && selectedOptions.length > 0 && (
    <>
    <p className={styles['HelpText']}>Remove items from your shopping cart by clicking on the buttons below.</p>
      {selectedOptions.map((option, index) => (
        <button 
          key={index}
          ref={index === 0 ? firstButtonRef : null}
          className={styles['selectedOptionButton']}
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
  selectionModel: PropTypes.oneOf(["default", "alternative"]),
  buttonsPosition: PropTypes.oneOf(["top", "bottom"]),
};

ReactMultiSelect.defaultProps = {
  selectionModel: "default",
  buttonsPosition: "bottom",
};

export default ReactMultiSelect;
