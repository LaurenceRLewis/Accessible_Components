import React, { useState, useRef } from "react";
import styles from "./NativeDatePicker.module.css";

export default function NativeDatePicker() {
  const [date, setDate] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
    setConfirmationMessage("");
  };

  const handleSetDate = () => {
    if (!date) return;

    const [year, month, day] = date.split("-");
    const formatted = `${day}/${month}/${year}`;
    setConfirmationMessage(`You set the delivery time for ${formatted}`);
  };

  const handleResetDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const todayFormatted = `${yyyy}-${mm}-${dd}`;

    setDate(todayFormatted);
    setConfirmationMessage(""); // Clear message on reset
  };

  return (
    <>
      <h1>HTML Datepicker</h1>
      <div className={styles.datePickerContainer}>
        <label htmlFor="date-picker">Select a date:</label>
        <input
          ref={inputRef}
          type="date"
          id="date-picker"
          aria-label="Date Picker. Displayed as dd/mm/yyyy in Australian locale."
          value={date}
          onChange={handleChange}
        />

        <div className={styles.buttonGroup}>
          <button
            type="button"
            onClick={handleSetDate}
            className={styles.setButton}
          >
            Set Date
          </button>
          <button
            type="button"
            onClick={handleResetDate}
            className={styles.setButton}
          >
            Reset to Today
          </button>
        </div>

        {confirmationMessage && (
          <div className={styles.successMessage}>
            <strong>{confirmationMessage}</strong>
          </div>
        )}
      </div>

      <div className={styles.infoSections}>
        <div className={styles.keyboardControls}>
          <h2>Keyboard Controls for Date Picker and Calendar</h2>
          <ul>
            <li><kbd>Tab</kbd> - Navigate to the date picker input</li>
            <li><kbd>Enter</kbd> or <kbd>Space</kbd> - Open the calendar</li>
            <li><kbd>Arrow Up</kbd> - Move to the previous week</li>
            <li><kbd>Arrow Down</kbd> - Move to the next week</li>
            <li><kbd>Arrow Left</kbd> - Move to the previous day</li>
            <li><kbd>Arrow Right</kbd> - Move to the next day</li>
            <li><kbd>Page Up</kbd> - Move to the previous month</li>
            <li><kbd>Page Down</kbd> - Move to the next month</li>
            <li><kbd>Home</kbd> - Move to the start of the current month</li>
            <li><kbd>End</kbd> - Move to the end of the current month</li>
            <li><kbd>Esc</kbd> - Close the calendar without selecting a date</li>
          </ul>
        </div>
      </div>
    </>
  );
}
