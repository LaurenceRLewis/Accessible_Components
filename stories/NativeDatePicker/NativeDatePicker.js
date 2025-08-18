import React, { useState, useRef } from "react";
import { DateFormatter, getLocalTimeZone, today, now } from "@internationalized/date";
import styles from "./NativeDatePicker.module.css";

export default function NativeDatePicker({ mode = "date" }) {
  const [date, setDate] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const inputRef = useRef(null);

  const isDateTime = mode === "datetime";

  const resolveLocale = () => {
    const raw = (navigator.language || "en-AU").trim();
    // Normalize plain "en" to AU per your requirement
    if (raw.toLowerCase() === "en") return "en-AU";
    return raw;
  };

  const pad2 = (n) => String(n).padStart(2, "0");

  const handleChange = (e) => {
    setDate(e.target.value);
    setConfirmationMessage("");
  };

  const handleSetDate = () => {
    if (!date) return;

    const userLocale = resolveLocale();

    // Split the native input value
    const [datePart, timePart] = date.split("T");
    if (!datePart) return;

    const [y, m, d] = datePart.split("-").map(Number);
    const hasTime = Boolean(timePart) && isDateTime;

    let h = 0, min = 0;
    if (hasTime) {
      const [hh, mm] = timePart.split(":").map(Number);
      h = Number.isFinite(hh) ? hh : 0;
      min = Number.isFinite(mm) ? mm : 0;
    }

    // Interpret as local time (matches how <input type="date|datetime-local"> behaves)
    const jsDate = new Date(y, (m || 1) - 1, d || 1, h, min);

    const dateFmt = new DateFormatter(userLocale, { dateStyle: "long" });
    const timeFmt = new DateFormatter(userLocale, { timeStyle: "short" });

    const formattedDate = dateFmt.format(jsDate);
    const formattedTime = hasTime ? timeFmt.format(jsDate) : null;

    const message = hasTime
      ? `You set the delivery time for ${formattedDate} at ${formattedTime}`
      : `You set the delivery time for ${formattedDate}`;

    setConfirmationMessage(message);
  };

  const handleResetDate = () => {
    const tz = getLocalTimeZone();

    if (isDateTime) {
      const z = now(tz); // ZonedDateTime
      const yyyy = z.year;
      const mm = pad2(z.month);
      const dd = pad2(z.day);
      const hh = pad2(z.hour);
      const mi = pad2(z.minute);
      setDate(`${yyyy}-${mm}-${dd}T${hh}:${mi}`);
    } else {
      const t = today(tz); // CalendarDate
      const yyyy = t.year;
      const mm = pad2(t.month);
      const dd = pad2(t.day);
      setDate(`${yyyy}-${mm}-${dd}`);
    }

    setConfirmationMessage("");
  };

  return (
    <>
      <h1>HTML Datepicker</h1>
      <div className={styles.datePickerContainer}>
        <label htmlFor="date-picker">
          Select a {isDateTime ? "date and time" : "date"}:
        </label>

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
