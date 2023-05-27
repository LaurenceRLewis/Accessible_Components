import React, { useState } from 'react';
import styles from './ReactFormInput.module.css';

let uniqueNumber = 0;

const ReactFormInput = ({ labelName = 'Input Name', autoComplete = '', inputType = 'text', helpText = '' }) => {
  const [uniqueId] = useState(() => {
    uniqueNumber += 1;
    return `LRL_Library_${uniqueNumber}`;
  });

  const helpTextId = `LRL_HelpText_${uniqueId}`;

  return (
    <>
    <h1>Text Input</h1>
    <div className={styles.container}>
      <label htmlFor={uniqueId} className={styles.label}>{labelName}</label>
      {helpText && <p id={helpTextId} className={styles.helpText}>{helpText}</p>}
      <input
        type={inputType}
        id={uniqueId}
        className={styles.input}
        {...(autoComplete !== '' ? { autoComplete } : {})}
        {...(helpText !== '' ? { 'aria-describedby': helpTextId } : {})}
      />
    </div>
    </>
  );
};

export default ReactFormInput;