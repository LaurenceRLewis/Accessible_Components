import React, { useState, useRef } from "react";
import { DateFormatter } from "@internationalized/date";
import styles from "./NativeDatePicker.module.css";

export default function NativeDatePicker({ mode = "date" }) {
  const [date, setDate] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const inputRef = useRef(null);

  const isDateTime = mode === "datetime";

  const handleChange = (e) => {
    setDate(e.target.value);
    setConfirmationMessage("");
  };

const handleSetDate = () => {
  if (!date) return;

  const [datePart, timePart] = date.split("T");
  const [year, month, day] = datePart.split("-").map(Number);

  // Determine locale from browser
  let userLocale = navigator.language?.toLowerCase() || "en-au";

  // Normalize "en" to "en-AU"
  if (userLocale === "en") {
    userLocale = "en-AU";
  }

  // Build a DateFormatter with AU-style formatting
  const formatter = new DateFormatter(userLocale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const jsDate = new Date(year, month - 1, day);
  const formattedDate = formatter.format(jsDate);

  const message =
    mode === "datetime" && timePart
      ? `You set the delivery time for ${formattedDate} at ${timePart}`
      : `You set the delivery time for ${formattedDate}`;

  setConfirmationMessage(message);
};   

  const handleResetDate = () => {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    const hh = String(now.getHours()).padStart(2, "0");
    const mi = String(now.getMinutes()).padStart(2, "0");

    const formatted = isDateTime
      ? `${yyyy}-${mm}-${dd}T${hh}:${mi}`
      : `${yyyy}-${mm}-${dd}`;

    setDate(formatted);
    setConfirmationMessage("");
  };

  return (
    <>
      <h1>HTML Datepicker</h1>
      <div className={styles.datePickerContainer}>
        <label htmlFor="date-picker">Select a {isDateTime ? "date and time" : "date"}:</label>
        <input
          ref={inputRef}
          type={isDateTime ? "datetime-local" : "date"}
          id="date-picker"
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
