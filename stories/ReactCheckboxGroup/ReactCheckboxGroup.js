import React, { useState } from 'react';
import styles from './ReactCheckboxGroup.module.css';

// The component takes two props:
// - groupName: the name of the group that will be displayed in the legend
// - labels: an array of strings where each string is the label for a checkbox
const ReactCheckboxGroup = ({
  groupName = 'Group Name',
  labels = ['Label 1', 'Label 2'],
}) => {
  // We use React's useState hook to store the currently selected option
  const [selectedOption, setSelectedOption] = useState('');

  // This function is called whenever a checkbox is selected
  const handleCheckboxChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // This function maps over the labels array to generate a checkbox for each label
  const renderCheckbox = () => {
    return labels.map((label, i) => {
      const id = `checkbox-${i}`;
      return (
        <div key={id} className={styles.checkboxContainer}>
          <input
            type="checkbox"
            id={id}
            className={styles.checkboxInput}
            name={groupName}
            value={label}
            checked={selectedOption === label}
            onChange={handleCheckboxChange}
          />
          <label className={styles.checkboxLabel} htmlFor={id}>{label}</label>
        </div>
      );
    });
  };

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{groupName}</legend>
      {renderCheckbox()}
    </fieldset>
  );
};

export default ReactCheckboxGroup;