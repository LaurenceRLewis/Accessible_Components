import React, { useState, useEffect, useRef } from 'react';
import styles from './ReactComboboxBoth.module.css';

const townsAndCities = [
  'Adelaide (SA)',
  'Albany (WA)',
  'Ayr (QLD)',
  'Brisbane (QLD)',
  'Bundaberg (QLD)',
  'Cairns (QLD)',
  'Charters Towers (QLD)',
  'Dalby (QLD)',
  'Gladstone (QLD)',
  'Gold Coast (QLD)',
  'Gympie (QLD)',
  'Hervey Bay (QLD)',
  'Innisfail (QLD)',
  'Mackay (QLD)',
  'Maryborough (QLD)',
  'Melbourne (VIC)',
  'Moranbah (QLD)',
  'Mount Isa (QLD)',
  'Perth (WA)',
  'Rockhampton (QLD)',
  'Sunshine Coast (QLD)',
  'Sydney (NSW)',
  'Toowoomba (QLD)',
  'Townsville (QLD)',
  'Warwick (QLD)',
];

const ReactComboboxBoth = () => {
  const [filteredOptions, setFilteredOptions] = useState([...townsAndCities]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [userInput, setUserInput] = useState('');
  const [listboxVisible, setListboxVisible] = useState(false);
  const [predictiveText, setPredictiveText] = useState('');
  const [textboxEmpty, setTextboxEmpty] = useState(true); // New state variable

  const inputRef = useRef(null);

  const filterOptions = (query) => {
    return townsAndCities.filter((option) => option.toLowerCase().startsWith(query.toLowerCase()));
  };

  const showOptions = () => {
    setListboxVisible(true);
  };

  const hideOptions = () => {
    setListboxVisible(false);
  };

  const selectOption = (index) => {
    if (index >= 0 && index < filteredOptions.length) {
      const selectedOption = filteredOptions[index];
      setUserInput(selectedOption);
      setPredictiveText('');
      hideOptions();
      setSelectedIndex(-1);
      inputRef.current.focus();
      inputRef.current.setSelectionRange(userInput.length, selectedOption.length);
    }
  };

  const onInput = (event) => {
    const newValue = event.target.value;
    setUserInput(newValue);

    const newFilteredOptions = filterOptions(newValue);
    setFilteredOptions(newFilteredOptions);

    if (newValue === '') {
      setTextboxEmpty(true); // Update textboxEmpty state when the value is empty
      setPredictiveText('');
    } else {
      setTextboxEmpty(false); // Update textboxEmpty state when the value is not empty
      showOptions();
      if (newFilteredOptions.length > 0) {
        setSelectedIndex(0);
        const selectedOption = newFilteredOptions[0];
        setPredictiveText(selectedOption);
        inputRef.current.setSelectionRange(newValue.length, selectedOption.length);
      }
    }
  };

  const onKeydown = (event) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (filteredOptions.length > 0) {
          setSelectedIndex((selectedIndex + 1) % filteredOptions.length);
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (filteredOptions.length > 0) {
          setSelectedIndex((selectedIndex - 1 + filteredOptions.length) % filteredOptions.length);
        }
        break;
      case 'Enter':
        event.preventDefault();
        if (selectedIndex >= 0) {
          selectOption(selectedIndex);
        }
        break;
      case 'Escape':
        hideOptions();
        setSelectedIndex(-1);
        setUserInput(inputRef.current.value);
        setPredictiveText('');
        break;
      case 'Backspace':
        if (userInput !== '') {
          event.preventDefault();
          if (userInput.length === 1) {
            setUserInput('');
            setPredictiveText('');
            setFilteredOptions([...townsAndCities]);
            setSelectedIndex(-1);
          } else {
            const newValue = userInput.slice(0, -1);
            setUserInput(newValue);
            const newFilteredOptions = filterOptions(newValue);
            setFilteredOptions(newFilteredOptions);
            if (newFilteredOptions.length > 0) {
              setSelectedIndex(0);
              setPredictiveText(newFilteredOptions[0]);
            } else {
              setSelectedIndex(-1);
              setPredictiveText('');
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
      inputRef.current.setSelectionRange(userInput.length, selectedOption.length);
    }
  }, [selectedIndex, userInput, filteredOptions]);

  useEffect(() => {
    if (textboxEmpty) {
      setSelectedIndex(-1); // Reset selectedIndex to -1 when the textbox is empty
      hideOptions(); // Close the listbox when the textbox is empty
    }
  }, [textboxEmpty]);

  return (
    <div className={styles['comboboxContainer']}>
      <label id={styles['combobox-label']} htmlFor={styles['combobox-input']}>
        Australian cities and towns
      </label>
      <div className={styles['optionsCount']} aria-live="assertive" aria-atomic="true" role="region">
        {listboxVisible ? `${filteredOptions.length} options available.` : ''}
      </div>
      <div className={styles['comboboxWrapper']}>
        <input
          id={styles['combobox-input']}
          type="text"
          autoComplete="off"
          role="combobox"
          aria-autocomplete="both"
          onKeyDown={onKeydown}
          onInput={onInput}
          value={predictiveText}
          ref={inputRef}
        />
        <button
          id={styles['toggle-button']}
          aria-label="Show options"
          tabIndex="-1"
          onClick={onToggleButtonClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
            <path d="M7 10l5 5 5-5z" fill="#ffffff" />
          </svg>
        </button>
      </div>
      <ul
        id={styles['combobox-listbox']}
        role="listbox"
        aria-label="Australian towns and cities"
        style={{ display: listboxVisible ? 'block' : 'none' }}
      >
        {filteredOptions.map((option, index) => (
          <li
            role="option"
            aria-selected={selectedIndex === index ? 'true' : 'false'}
            onClick={() => selectOption(index)}
            key={index}
            className={selectedIndex === index ? styles['selectedOption'] : ''}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReactComboboxBoth;
