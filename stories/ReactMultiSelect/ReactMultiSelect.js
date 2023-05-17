import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ariaAnnounce from '../../.storybook/utils/ariaAnnounce';
import useKeyboardNavigation from './keyboardNavigation';
import styles from './ReactMultiSelect.module.css';

const veganIngredients = [
  'Tofu',
  'Almond Milk',
  'Avocado',
  'Quinoa',
  'Kale',
  'Lentils'
];

const ReactMultiSelect = ({ selectionModel }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isListboxOpen, setListboxOpen] = useState(false);
  const listboxRef = useRef(null);

  useEffect(() => {
    if (isListboxOpen && listboxRef.current.children.length > 0) {
      listboxRef.current.children[0].focus();
    }
  }, [isListboxOpen]);

  const handleSelectOption = (option) => {
    let newSelectedOptions;
    if (selectionModel === 'alternative') {
      newSelectedOptions = [option];
    } else {
      newSelectedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((item) => item !== option)
        : [...selectedOptions, option];
    }
    setSelectedOptions(newSelectedOptions);
    ariaAnnounce(`Selected ${newSelectedOptions.length} items.`);
  };

  const handleKeyDown = useKeyboardNavigation(isListboxOpen, listboxRef, handleSelectOption, selectionModel);

  const handleDismissOption = (option) => {
    const newSelectedOptions = selectedOptions.filter((item) => item !== option);
    setSelectedOptions(newSelectedOptions);
    ariaAnnounce(`Removed ${option}. ${newSelectedOptions.length} items remaining.`);
  };

  return (
    <div className={styles['multi-select-container']}>
  <h2>Your Ingredients</h2>
  <div className={styles['selected-options']}>
      {selectedOptions.map((option, index) => (
  <button 
    key={index} 
    onClick={() => handleDismissOption(option)}
    aria-label={`Remove ${option}`}
  >
    {option} &times;
  </button>
))}
      </div>
      <button onClick={() => setListboxOpen(!isListboxOpen)}>Toggle Listbox</button>
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
              className={classNames(styles['listbox-option'], { [styles['selected']]: selectedOptions.includes(option) })}
              onClick={() => handleSelectOption(option)}
              tabIndex="-1" // Ensure list items can receive focus
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

ReactMultiSelect.propTypes = {
  selectionModel: PropTypes.oneOf(['default', 'alternative']),
};

ReactMultiSelect.defaultProps = {
  selectionModel: 'default',
};

export default ReactMultiSelect;