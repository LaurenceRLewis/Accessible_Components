import React, { useState } from 'react';
import styles from './ReactRadioButtonGroup.module.css';

// The component takes two props:
// - groupName: the name of the group that will be displayed in the legend
// - labels: an array of strings where each string is the label for a radio button
const ReactRadioButtonGroup = ({
  groupName = 'Group Name',
  labels = ['Label 1', 'Label 2'],
}) => {
  // We use React's useState hook to store the currently selected option
  const [selectedOption, setSelectedOption] = useState('');

  // This function is called whenever a radio button is selected
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // This function maps over the labels array to generate a radio button for each label
  const renderRadioButtons = () => {
    return labels.map((label, i) => {
      const id = `radio-button-${i}`;
      return (
        <div key={id} className={styles.radioContainer}>
          <input
            type="radio"
            id={id}
            className={styles.radioInput}
            name={groupName}
            value={label}
            checked={selectedOption === label}
            onChange={handleRadioChange}
          />
          <label className={styles.radioLabel} htmlFor={id}>{label}</label>
        </div>
      );
    });
  };

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{groupName}</legend>
      {renderRadioButtons()}
    </fieldset>
  );
};

export default ReactRadioButtonGroup;